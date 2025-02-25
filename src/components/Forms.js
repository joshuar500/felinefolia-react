import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement
} from 'react-stripe-elements';
import classnames from 'classnames';
import isEmpty from 'lodash-es/isEmpty';
import { stateAbbrs } from '../helpers/forms';
import { ShippingSchema } from '../helpers/validationSchema';

export function RegisterForm(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <form onSubmit={props.handleSubmit}>
            <div className="field">
              <label className="label is-medium">Email</label>
              <div className="control">
                <input
                  name="email"
                  className="input is-medium"
                  type="email"
                  placeholder="yourname@email.com"
                  value={props.email}
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Password</label>
              <div className="control">
                <input
                  name="password"
                  className="input is-medium"
                  type="password"
                  value={props.password}
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Confirm Password</label>
              <div className="control">
                <input
                  name="passwordConfirm"
                  className="input is-medium"
                  type="password"
                  value={props.passwordConfirm}
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function LoginForm(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <form onSubmit={props.handleSubmit}>
            <div className="field">
              <label className="label is-medium">Email</label>
              <div className="control">
                <input
                  name="email"
                  onBlur={props.handleBlur('email')}
                  className={classnames(
                    { 'is-danger': props.shouldMarkError('email') },
                    'input is-medium'
                  )}
                  type="email"
                  placeholder="yourname@email.com"
                  value={props.email}
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Password</label>
              <div className="control">
                <input
                  type="password"
                  name="password"
                  onBlur={props.handleBlur('password')}
                  className={classnames(
                    { 'is-danger': props.shouldMarkError('password') },
                    'input is-medium'
                  )}
                  value={props.password}
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <div className="field has-text-centered">
              <Link to="/resetpassword">Reset Password</Link>
            </div>
            {props.errorMsg ? <div className="has-text-danger">{props.errorMsg}</div> : null}
            <button disabled={!props.isEnabled} className="button is-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function ResetPasswordForm(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <form onSubmit={props.handleSubmit}>
            <div className="field">
              <label className="label is-medium">Email</label>
              <div className="control">
                <input
                  name="email"
                  className="input is-medium"
                  type="email"
                  placeholder="yourname@email.com"
                  value={props.email}
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function ShippingForm(props) {
  return (
    <div className="column is-6 is-offset-2">
      <Formik
        initialValues={{
          name: '',
          address1: '',
          address2: '',
          city: '',
          zip: '',
          phone: ''
        }}
        onSubmit={values => {
          props.handleStateChange(values);
          props.handleNextStep();
        }}
        validationSchema={ShippingSchema}
        render={({ errors, status, touched, isSubmitting, dirty }) => (
          <Form>
            <div className="field">
              <label className="label is-medium">First and Last Name</label>
              <div className="control">
                <Field name="name" className="input" type="text" placeholder="Jan Doe" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Street Address</label>
              <div className="control">
                <Field name="address1" className="input" type="text" placeholder="123 Your St" />
                <ErrorMessage name="address1" component="div" />
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Street Address 2</label>
              <div className="control">
                <Field name="address2" className="input" type="text" placeholder="Apt 5" />
              </div>
            </div>
            <div className="field-body">
              <div className="field">
                <label className="label is-medium">City</label>
                <div className="control is-expanded">
                  <Field name="city" className="input" type="text" placeholder="My City" />
                  <ErrorMessage name="city" component="div" />
                </div>
              </div>
              <div className="field">
                <label className="label is-medium">State</label>
                <div className="control">
                  <div className="select">
                    <Field component="select" name="optionState">
                      {stateAbbrs.map(state => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label is-medium">ZIP Code</label>
                <div className="control is-expanded">
                  <Field name="zip" className="input" type="text" placeholder="54321" />
                  <ErrorMessage name="zip" component="div" />
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Phone Number</label>
              <div className="control">
                <Field name="phone" className="input" type="text" placeholder="(123) 444-5555" />
              </div>
            </div>
            {props.error && (
              <div className="column notification is-danger has-text-centered">
                {props.errorMsg}
              </div>
            )}
            <button onClick={props.handlePrevStep} className="button is-secondary">
              Previous
            </button>{' '}
            <button
              type="submit"
              className="button is-primary"
              disabled={isSubmitting || !isEmpty(errors) || !dirty}
            >
              Next
            </button>
          </Form>
        )}
      />
    </div>
  );
}

export function BillingForm(props) {
  return (
    <React.Fragment>
      <div className="field">
        <label className="label is-medium">First and Last Name</label>
        <div className="control">
          <Field name="name" className="input" type="text" placeholder="Jan Doe" />
        </div>
      </div>
      <div className="field">
        <label className="label is-medium">Street Address</label>
        <div className="control">
          <Field name="address1" className="input" type="text" placeholder="Jan Doe" />
        </div>
      </div>
      <div className="field">
        <label className="label is-medium">Street Address 2</label>
        <div className="control">
          <Field name="address2" className="input" type="text" placeholder="Jan Doe" />
        </div>
      </div>
      <div className="field-body">
        <div className="field">
          <label className="label is-medium">City</label>
          <div className="control is-expanded">
            <Field name="city" className="input" type="text" placeholder="Jan Doe" />
          </div>
        </div>
        <div className="field">
          <label className="label is-medium">State</label>
          <div className="control">
            <div className="select">
              <Field component="select" name="optionState">
                {stateAbbrs.map(state => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Field>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label is-medium">ZIP Code</label>
          <div className="control is-expanded">
            <Field
              name="zip"
              className="input"
              type="text"
              placeholder="Jan Doe"
              value={props.zip}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label is-medium">Phone Number</label>
        <div className="control">
          <Field
            name="phone"
            className="input"
            type="text"
            placeholder="Jan Doe"
            value={props.phone}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export function PaymentForm(props) {
  return (
    <div className="column is-6 is-offset-2">
      <Formik
        initialValues={{
          cardholderName: props.cardholderName,
          name: props.shippingAddress.name,
          address1: props.shippingAddress.address_line1,
          address2: props.shippingAddress.address_line2,
          city: props.shippingAddress.address_city,
          zip: props.shippingAddress.address_zip,
          phone: props.phone,
          billingSameAsShipping: true
        }}
        onSubmit={values => {
          props.handleStateChange(values);
          props.handleSubmit();
        }}
        render={({ values }) => (
          <Form>
            <div className="field">
              <label className="label is-medium">Name on Card</label>
              <div className="control">
                <Field name="cardholderName" className="input" type="text" placeholder="Jan Doe" />
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Card Number</label>
              <div className="control">
                <CardNumberElement
                  {...props.createOptions(props.fontSize)}
                  // onBlur={ () => isValid.card = true }
                />
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Expiration Date</label>
              <div className="control">
                <CardExpiryElement
                  {...props.createOptions(props.fontSize)}
                  // onBlur={ () => isValid.exp = true }
                />
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">CVC</label>
              <div className="control">
                <CardCVCElement
                  {...props.createOptions(props.fontSize)}
                  // onBlur={ () => isValid.cvc = true }
                />
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Postal Code</label>
              <div className="control">
                <PostalCodeElement
                  {...props.createOptions(props.fontSize)}
                  // onBlur={ () => isValid.zip= true }
                />
              </div>
            </div>
            <div className="field">
              <label className="checkbox">
                <Field
                  type="checkbox"
                  name="billingSameAsShipping"
                  checked={values.billingSameAsShipping}
                />
                &nbsp; Billing same as Shipping
              </label>
            </div>
            {!values.billingSameAsShipping && (
              <BillingForm
              // handleChange={props.handleChange}
              // name={props.billingAddress.name}
              // address1={props.billingAddress.address1}
              // address2={props.billingAddress.address2}
              // city={props.billingAddress.city}
              // optionState={props.billingAddress.optionState}
              // zip={props.billingAddress.zip}
              // phone={props.billingAddress.phone}
              />
            )}
            {props.error && (
              <div className="column notification is-danger has-text-centered">
                {props.errorMsg}
              </div>
            )}
            <button onClick={props.handlePrevStep} className="button is-secondary">
              Previous
            </button>{' '}
            <button type="submit" className="button is-primary">
              PAY NOW
            </button>
          </Form>
        )}
      />
    </div>
  );
}
