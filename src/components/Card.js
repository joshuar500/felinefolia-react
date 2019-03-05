import React from 'react';
import plant from '../img/felinefolia_homepage_houseplant.png'

export function SubscriptionCard(props) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-center">
            <img src={plant} className="card-img" alt="houseplant"/>
          </div>
        </div>
      </div>
      <div className="card-header">
        <p className="card-header-title is-centered">
          { props.title }
        </p>
      </div>
      <div className="card-subheader">
        <p className="card-header-subtitle is-centered">
          $30 &nbsp;<small>/ month</small>
        </p>
      </div>
      <div className="card-content">
        <ul>
          { props.items && props.items.map( item => (
            <li key={item}> {item} </li>
          ) ) }
        </ul>
      </div>
      <div className="card-content">
        <button className="button is-primary" onClick={props.handleNextStep}>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export function CheckoutSummaryCard(props) {
  return (
    <div className="card">
      {/* <div className="card-content">
        <div className="media">
          <div className="media-center">
            <img src={plant} className="card-img"/>
          </div>
        </div>
      </div> */}
      <div className="card-header">
        <p className="card-header-title is-centered">
          { props.plan }
        </p>
      </div>
      <div className="card-subheader">
        <p className="card-header-subtitle is-centered">
          $30 &nbsp;<small>/ month</small>
        </p>
      </div>
      <div className="card-content">
        <ul>
          { props.items && props.items.map( item => (
            <li key={item}> {item} </li>
          ) ) }
        </ul>
      </div>
    </div>
  )
}