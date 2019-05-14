import React from 'react';
import { PaymentForm } from '../../components/Forms';

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

export function Step3(props) {
  return (
    <PaymentForm
      handlePrevStep={() => props.handleStep(2)}
      handleNextStep={() => props.handleStep(4)}
      handleSubmit={props.handleSubmit}
      handleStateChange={props.handleStateChange}
      createOptions={createOptions}
      cardholderName={props.cardholderName}
      shippingAddress={props.shippingAddress}
      phone={props.phone}
      billingAddress={props.billingAddress}
      billingSameAsShipping={props.billingSameAsShipping}
      error={props.error}
      errorMsg={props.errorMsg}
    />
  );
}
