import React, { Component } from 'react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { SubscriptionCard, CheckoutSummaryCard, ReviewSummaryCard } from '../components/Card';
import { ShippingForm, PaymentForm } from '../components/Forms';
import { injectStripe } from 'react-stripe-elements';

import { subscribe } from '../api/billing';
import { stripePayloadNormalizer } from '../helpers/stripeNormalizer';

import option1img from '../img/two_plants.png';
import option2img from '../img/felinefolia_homepage_houseplant.png';

import '../styles/containers/Subscribe.css';

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Lato, sans-serif',
        '::placeholder': {
          color: '#aab7c4'
        },
        padding
      },
      invalid: {
        color: '#9e2146'
      }
    }
  };
};

class Subscribe extends Component {
  state = {
    billingAddress: {},
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
    errorMsg: ''
  };

  componentDidUpdate(prevProps, prevState) {
    // update shipping/billing address states
    if (this.state.billingSameAsShipping !== prevState.billingSameAsShipping) {
      if (!this.state.billingSameAsShipping) {
        this.setState({
          shippingAddress: stripePayloadNormalizer(this.state)
        });
      } else {
        this.setState({
          billingAddress: stripePayloadNormalizer(this.state),
          shippingAddress: stripePayloadNormalizer(this.state)
        });
      }
    }
  }

  handleStateChange = values => {
    this.setState({ ...values });
    console.log('this.state', this.state);
  };

  handleStep = (activeStep, option) => {
    this.setState({ activeStep, option: option ? option : this.state.option });
  };

  handleSubmit = () => {
    const billingAddress = this.state.billingAddress;
    console.log('billingAddress', billingAddress);
    this.props.stripe
      .createToken({ name: this.state.cardholderName, ...stripePayloadNormalizer(billingAddress) })
      .then(payload => {
        if (payload.error) {
          // console.warn('show user there was an error', payload.error);
          this.setState({
            error: true,
            errorMsg: payload.error.message
          });
        } else if (payload.token) {
          console.log('send to server to make charge');
          subscribe(payload.token)
            .then(resp => {
              console.log('resp', resp);
              if (resp.status !== 200) {
                this.setState({
                  error: true,
                  errorMsg: resp.statusText
                });
              } else {
                this.setState({});
              }
            })
            .catch(err => {
              console.warn('err', err);
            });
        }
      });
  };

  getStepView = () => {
    const { activeStep, cardholderName } = this.state;
    if (activeStep === 1) {
      return (
        <React.Fragment>
          <div className="column is-4 is-offset-2">
            <SubscriptionCard
              handleNextStep={() => this.handleStep(2, 1)}
              title="Plants First!"
              image={option1img}
              items={[
                '• 1 chlorophytum comosum',
                '• 1 calathea lancifolia',
                '• 2 plastic pots',
                '• 1 small bag of potting mix'
              ]}
            />
          </div>
          <div className="column is-4">
            <SubscriptionCard
              handleNextStep={() => this.handleStep(2, 2)}
              title="Other Stuff First!"
              image={option2img}
              items={[
                '• 1 sm. ceramic white plant pot',
                '• 1 sm. ceramic orange plant pot',
                '• 1 art print supporting indie artist',
                '• 1 small bag of potting mix'
              ]}
            />
          </div>
        </React.Fragment>
      );
    } else if (activeStep === 2) {
      return (
        <ShippingForm
          handleNextStep={() => this.handleStep(3)}
          handlePrevStep={() => this.handleStep(1)}
          handleStateChange={this.handleStateChange}
        />
      );
    } else if (activeStep === 3) {
      return (
        <PaymentForm
          handlePrevStep={() => this.handleStep(2)}
          handleNextStep={() => this.handleStep(4)}
          handleStateChange={this.handleStateChange}
          createOptions={createOptions}
          cardholderName={cardholderName}
          shippingAddress={stripePayloadNormalizer(this.state)}
          phone={this.state.phone}
          billingAddress={this.state.billingAddress}
          billingSameAsShipping={this.state.billingSameAsShipping}
          error={this.state.error}
          errorMsg={this.state.errorMsg}
        />
      );
    } else if (activeStep === 4) {
      return (
        <ReviewSummaryCard
          shippingAddress={stripePayloadNormalizer(this.state)}
          billingAddress={this.state.billingAddress}
        />
      );
    } else if (activeStep === 5) {
      return (
        <PaymentForm
          handleSubmit={this.handleSubmit}
          createOptions={createOptions}
          cardholderName={cardholderName}
        />
      );
    }
  };

  render() {
    const { activeStep, option, name } = this.state;

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
              <small
                className={'plan-step ' + (activeStep === 1 ? 'active' : '')}
                onClick={() => this.handleStep(1, option)}
              >
                1. Choose your plan
              </small>
              <small
                className={'plan-step ' + (activeStep === 2 ? 'active' : 'disabled')}
                onClick={() => this.handleStep(2, option)}
              >
                2. Shipping
              </small>
              <small
                className={'plan-step ' + (activeStep === 3 ? 'active' : 'disabled')}
                onClick={() => this.handleStep(3, option)}
              >
                3. Payment
              </small>
              <small
                className={'plan-step ' + (activeStep === 4 ? 'active' : 'disabled')}
                onClick={() => this.handleStep(4, option)}
              >
                4. Review
              </small>
              <small
                className={'plan-step ' + (activeStep === 5 ? 'active' : 'disabled')}
                onClick={() => this.handleStep(5, option)}
              >
                5. Confirmation
              </small>
            </div>
          </div>
          <div className="columns">
            {this.getStepView()}

            {activeStep > 1 && (
              <div className="column is-2">
                <CheckoutSummaryCard plan={option} name={name} />
              </div>
            )}
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered">
              You choose your first option and next month you'll get the other option.
            </div>
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
