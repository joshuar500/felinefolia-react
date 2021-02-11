import React from 'react';
import { ShippingForm } from '../../components/Forms';

export function Step2(props) {
  return (
    <ShippingForm
      handleNextStep={() => props.handleStep(3)}
      handlePrevStep={() => props.handleStep(1)}
      handleStateChange={props.handleStateChange}
    />
  );
}
