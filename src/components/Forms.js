import React from 'react';

export function RegisterForm(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <form onSubmit={props.handleSubmit}>
          <div className="field">
              <label className="label is-medium">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input name="email" className="input is-medium" type="email" placeholder="yourname@email.com" value={props.email} onChange={props.handleChange} />
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">What would you like to see in your packages? (optional)</label>
              <div className="control has-icons-left has-icons-right">
                <textarea name="optional" className="input is-medium" value={props.optional} onChange={props.handleChange} />
              </div>
            </div>
            <div className="field">
              <label className="checkbox">
                <input type="checkbox" name="hasBusiness" checked={props.hasBusiness} onChange={props.handleChange} />
                &nbsp; I own a business, boutique or LOVE plants so much I can prove it.
              </label>
            </div>
            { props.hasBusiness &&
            <div>
              <p>
                Awesome! Let's get in touch and speak more. We'll email you with more information about how we want to help yours and other small businesses.
              </p>
              <br />
            </div>
            }
            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
