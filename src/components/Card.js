import React from 'react';
import { stripePayloadNormalizer } from '../helpers/stripeNormalizer';

export function SubscriptionCard(props) {
  return (
    <div className="card summary">
      <div className="card-content">
        <div className="media">
          <div className="media-center">
            <img src={props.image} className="card-img" alt="houseplant" />
          </div>
        </div>
      </div>
      <div className="card-header">
        <p className="card-header-title is-centered">{props.title}</p>
      </div>
      <div className="card-subheader">
        <p className="card-header-subtitle is-centered">
          $30 &nbsp;<small>/ month</small>
        </p>
      </div>
      <div className="card-content">
        <ul>{props.items && props.items.map(item => <li key={item}> {item} </li>)}</ul>
      </div>
      <div className="card-content">
        <button className="button is-primary" onClick={props.handleNextStep}>
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export function ReviewSummaryCard(props) {
  let { shippingAddress, billingAddress } = props;
  if (!Object.keys(billingAddress).length) {
    billingAddress = shippingAddress;
  } else {
    billingAddress = stripePayloadNormalizer(billingAddress);
  }
  return (
    <div className="column is-6 is-offset-2">
      <div className="card summary">
        <div className="card-content">
          <div className="media">
            <div className="media-center">
              <img src={props.image} className="card-img" alt="houseplant" />
            </div>
          </div>
          <ul>{props.items && props.items.map(item => <li key={item}> {item} </li>)}</ul>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">
            <div className="card-content">
              <div className="content">
                Shipping Address: <br />
                <small>{shippingAddress.address_line1}</small>
                <br />
                <small>{shippingAddress.address_line2}</small>
                <br />
                <small>
                  {shippingAddress.address_city} {shippingAddress.address_state},{' '}
                  {shippingAddress.address_zip}
                </small>
                <br />
              </div>
            </div>
          </div>
          <div className="card-footer-item">
            <div className="card-content">
              Billing Address: <br />
              <div className="content">
                <small>{billingAddress.address_line1}</small>
                <br />
                <small>{billingAddress.address_line2}</small>
                <br />
                <small>
                  {billingAddress.address_city} {billingAddress.address_state},{' '}
                  {billingAddress.address_zip}
                </small>
                <br />
              </div>
            </div>
          </div>
        </footer>
      </div>
      <button
        className="button is-primary"
        style={{ marginTop: '0.75rem' }}
        type="button"
        onClick={props.handleSubmit}
      >
        PURCHASE
      </button>
    </div>
  );
}

export function CheckoutSummaryCard(props) {
  return (
    <div className="card summary">
      {/* <div className="card-content">
        <div className="media">
          <div className="media-center">
            <img src={plant} className="card-img"/>
          </div>
        </div>
      </div> */}
      <div className="card-header">
        <p className="card-header-title is-centered">Option: {props.plan}</p>
      </div>
      <div className="card-subheader">
        <p className="card-header-subtitle is-centered">
          Total: $30 &nbsp;<small>/ month</small>
        </p>
      </div>
      <div className="card-content">
        <ul>{props.items && props.items.map(item => <li key={item}> {item} </li>)}</ul>
      </div>
    </div>
  );
}
