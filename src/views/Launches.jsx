import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';
import {fetchRocketIfNeeded} from "../actions/Rocket";

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  fetchRocket(rocket_id) {
    console.log('fetch rocket ' + rocket_id);
    const { dispatch, rocketCollection } = this.props;
    fetchRocketIfNeeded({ dispatch, rocketCollection, rocket_id });
  }

  getContent() {
    const { launchCollection, rocketCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    let launches = [];

    for (let i = 0; i < launches.length; i++) {
      const launch = launchCollection.launches[i];
      const rocket = rocketCollection.rockets[launch.rocket.rocket_id];

      launches.push(
        <Launch {...{
          launch,
          rocket,
          fetchRocket: () => this.fetchRocket(launch.rocket.rocket_id)
        }} />

      )
    }

    return launches;
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        <ul>
          {this.getContent()}
        </ul>
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
