import React from 'react';
import { ReviewSummaryCard } from '../../components/Card';

export function Step4(props) {
  return (
    <ReviewSummaryCard
      shippingAddress={props.shippingAddress}
      billingAddress={props.billingAddress}
      image={props.image}
      items={props.items}
      handleSubmit={props.handleSubmit}
    />
  );
}
