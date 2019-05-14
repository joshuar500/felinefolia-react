import React, { Component } from 'react';

import { Hero } from '../../components/Hero';
import { CheckoutSummaryCard } from '../../components/Card';
import { injectStripe } from 'react-stripe-elements';

import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';

import { subscribe } from '../../api/billing';
import { subscriptionOptions } from '../../models/subscriptionOptions';
import { stripePayloadNormalizer } from '../../helpers/stripeNormalizer';

import option1img from '../../img/two_plants.png';
import option2img from '../../img/felinefolia_homepage_houseplant.png';

import '../../styles/containers/Subscribe.css';
import SiteContainer from '../SiteContainer';

const breadcrumbTitles = ['1. Choose your plan', '2. Shipping', '3. Payment', '4. Confirmation'];
const optionImage = [option1img, option2img];

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
  };

  handleStep = (activeStep, option) => {
    this.setState({ activeStep, option: option ? option : this.state.option });
  };

  handleSubmit = () => {
    let billingAddress = this.state.billingAddress;
    if (!Object.keys(billingAddress).length) {
      billingAddress = this.state;
    }
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
          subscribe(payload.token)
            .then(resp => {
              console.log('resp', resp);
              if (resp.status !== 200) {
                this.setState({
                  error: true,
                  errorMsg: resp.statusText
                });
              } else {
                this.handleStep(4);
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
      return <Step1 handleStep={this.handleStep} />;
    } else if (activeStep === 2) {
      return <Step2 handleStep={this.handleStep} handleStateChange={this.handleStateChange} />;
    } else if (activeStep === 3) {
      return (
        <Step3
          handleStep={this.handleStep}
          handleSubmit={this.handleSubmit}
          handleStateChange={this.handleStateChange}
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
        <Step4
          shippingAddress={stripePayloadNormalizer(this.state)}
          billingAddress={this.state.billingAddress}
          image={optionImage[this.state.option - 1]}
          items={subscriptionOptions[this.state.option - 1]}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };

  render() {
    const { activeStep, option, name } = this.state;

    return (
      <SiteContainer isLoggedIn={this.props.isLoggedIn}>
        <Hero
          title="Choose the right plan for you and your pets"
          subtitle="We have two options this month that we think you'll love"
        />
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-2">
              {breadcrumbTitles.map((title, index) => (
                <small
                  key={title + index}
                  className={'plan-step ' + (activeStep === index + 1 ? 'active' : '')}
                  onClick={() => this.handleStep(index + 1, option)}
                >
                  {title}
                </small>
              ))}
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
      </SiteContainer>
    );
  }
}

export default injectStripe(Subscribe);
