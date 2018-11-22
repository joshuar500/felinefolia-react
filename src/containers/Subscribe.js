import React, { Component } from 'react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { SubscriptionCard, CheckoutSummaryCard } from '../components/Card';
import { ShippingForm, PaymentForm } from '../components/Forms';
import { injectStripe } from 'react-stripe-elements';

import { subscribe } from '../api/billing';
import { stripePayloadNormalizer } from '../helpers/stripeNormalizer';

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Lato, sans-serif',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

class Subscribe extends Component {

  state = {
    shippingAddress: {},
    billingAddress: {
      name: '',
      address1: '',
      address2: '',
      city: '',
      optionState: '',
      zip: '',
      phone: ''
    },
    name: '',
    address1: '',
    address2: '',
    city: '',
    optionState: 'AK', // in case someone actually lives in AK, they won't update the state
    zip: '',
    phone: '',
    cardholderName: '',
    activeStep: 1,
    option: 0,
    billingSameAsShipping: true,
    error: false,
    errorMsg: '',
  }

  componentDidUpdate(prevProps, prevState) {
    // update shipping/billing address states
    if (this.state.billingSameAsShipping !== prevState.billingSameAsShipping) {
      if (!this.state.billingSameAsShipping) {
        this.setState({
          shippingAddress: stripePayloadNormalizer(this.state)
        })
      } else {
        this.setState({
          billingAddress: stripePayloadNormalizer(this.state),
          shippingAddress: stripePayloadNormalizer(this.state)
        })
      }
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleNextStep = (activeStep, option) => {
    this.setState({ activeStep, option: (option ? option : this.state.option) });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const billingAddress = this.state.billingAddress;
    this.props.stripe
      .createToken({name: this.state.cardholderName, ...stripePayloadNormalizer(billingAddress)})
      .then((payload) => {
        if (payload.error) {
          // console.warn('show user there was an error', payload.error);
          this.setState({
            error: true,
            errorMsg: payload.error.message
          })
        } else if (payload.token) {
          console.log('send to server to make charge');
          subscribe(payload.token)
            .then(resp => {
              console.log('resp', resp)
              if (resp.status !== 200) {
                this.setState({
                  error: true,
                  errorMsg: resp.statusText
                })
              }
            })
            .catch(err => {
              console.warn('err', err)
            });
        }
      });
  }

  getStepView = () => {
    const { activeStep, cardholderName } = this.state;
    if (activeStep === 1) {
      return (
        <React.Fragment>
          <div className="column is-4 is-offset-2">
            <SubscriptionCard
              handleNextStep={() => this.handleNextStep(2, 1)}
              title="Plants First!"
              items={[
                "• 1 chlorophytum comosum",
                "• 1 calathea lancifolia",
                "• 2 plastic pots",
                "• 1 small bag of potting mix"
              ]}
            />
          </div>
          <div className="column is-4">
            <SubscriptionCard
              handleNextStep={() => this.handleNextStep(2, 2)}
              title="Other Stuff First!"
              items={[
                "• 1 sm. ceramic white plant pot",
                "• 1 sm. ceramic orange plant pot",
                "• 1 art print supporting local artist",
                "• 1 small bag of potting mix"
              ]}
            />
          </div>
        </React.Fragment>
      );
    } else if (activeStep === 2) {
      return (
        <ShippingForm
          handleNextStep={() => this.handleNextStep(3)}
          handleChange={this.handleChange}
          name={this.state.name}
          address1={this.state.address1}
          address2={this.state.address2}
          city={this.state.city}
          optionState={this.state.optionState}
          zip={this.state.zip}
          phone={this.state.phone}
          error={this.state.error}
          errorMsg={this.state.errorMsg}
        />
      )
    } else if (activeStep === 3) {
      return (
        <PaymentForm
          handleSubmit={this.handleSubmit}
          createOptions={createOptions}
          cardholderName={cardholderName}
          billingAddress={this.state.billingAddress}
          billingSameAsShipping={this.state.billingSameAsShipping}
          handleChange={this.handleChange}
          error={this.state.error}
          errorMsg={this.state.errorMsg}
        />
      )
    } else if (activeStep === 4) {
      return (
        <PaymentForm
          handleSubmit={this.handleSubmit}
          createOptions={createOptions}
          cardholderName={cardholderName}
        />
      )
    }
  }

  render() {
    return (
      <section id="subscribe">
        <Navbar />
        <Hero 
          title="Choose the right plan for you and your pets"
          subtitle="We have two options this month that we think you'll love"
        />
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-2">
            <small className={"plan-step " + (this.state.activeStep === 1 ? 'active' : '')}>
              1. Choose your plan
            </small>
            <small className={"plan-step " + (this.state.activeStep === 2 ? 'active' : '')}>
              2. Shipping
            </small>
            <small className={"plan-step " + (this.state.activeStep === 3 ? 'active' : '')}>
              3. Payment
            </small>
            <small className={"plan-step " + (this.state.activeStep === 4 ? 'active' : '')}>
              4. Confirmation
            </small>
            </div>
          </div>
          <div className="columns">
            { this.getStepView() }

            {this.state.activeStep > 1 &&
              <div className="column is-2">
                <CheckoutSummaryCard
                  plan={this.state.option}
                  name={this.state.name}
                />
              </div>
            }
          </div>
        </div>
        <div className="container">
        <div className="columns">
        <div className="column has-text-centered">You choose your first option and next month you'll get the other option.</div>
        </div>
        </div>
        <div className="container">
        {/* add a spacer */}
          &nbsp;
        </div>
        <Footer />
      </section>
    );
  }
}

export default injectStripe(Subscribe);
