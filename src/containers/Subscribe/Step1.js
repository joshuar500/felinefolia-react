import React from 'react';

import { SubscriptionCard } from '../../components/Card';
import { subscriptionOptions } from '../../models/subscriptionOptions';

import option1img from '../../img/two_plants.png';
import option2img from '../../img/felinefolia_homepage_houseplant.png';

export function Step1(props) {
  return (
    <React.Fragment>
      <div className="column is-4 is-offset-2">
        <SubscriptionCard
          handleNextStep={() => props.handleStep(2, 1)}
          title="Plants First!"
          image={option1img}
          items={subscriptionOptions[0]}
        />
      </div>
      <div className="column is-4">
        <SubscriptionCard
          handleNextStep={() => props.handleStep(2, 2)}
          title="Other Stuff First!"
          image={option2img}
          items={subscriptionOptions[1]}
        />
      </div>
    </React.Fragment>
  );
}
