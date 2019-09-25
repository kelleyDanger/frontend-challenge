import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/launch";
import LaunchCard from 'app/components/LaunchCard';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launches } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launches });
  }

  getContent() {
    const {launches, launchShow, dispatch} = this.props;

    if (!launches || launches.get('fetching')) {
      return <div> LOADING </div>;
    }

    if (!launches.get('data').count === 0) {
      return <div> NO DATA </div>;
    }


    let launchesList = launches.get('data').map(launch => {
      return (
        <Grid item lg={3} xs={12}>
          <LaunchCard
            dispatch={dispatch}
            key={launch.get('launch_id')}
            launch={launch}
            launchShow={launchShow}
          />
        </Grid>
      );
    })

    return launchesList;
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        <Grid container spacing={4}>
          {this.getContent()}
        </Grid>
        
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
