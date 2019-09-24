import React, { Component } from 'react';
import Falcon1 from './styles/img/falcon1.svg';
import Falcon9 from './styles/img/falcon9.svg';
import FalconHeavy from './styles/img/falconheavy.svg';

class RocketCard extends Component {

  render() {

    let rocket = this.props.rocket;

    return (
      <li>
        <h2> { rocket.rocket_name } </h2>
        <div> { launch.rocket.rocket_name } </div>
        <div > { launch.rocket.rocket_id } </div>
        <Falcon9 height={100} width={100} />
      </li>
    );
  }
}

export default Launch;