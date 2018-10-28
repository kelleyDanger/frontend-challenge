import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const serviceUrl = `${SERVICES_URL}/rockets`;

const api = axios.create();

const getById = function(rocket_id) {
  api.get(serviceUrl + '/' + rocket_id);
};

export const ACTIONS = {
  REQUEST_ROCKET: 'REQUEST_ROCKET',
  RECEIVE_ROCKET: 'RECEIVE_ROCKET'
};

export const requestRocket = () => ({
  type: ACTIONS.REQUEST_ROCKET
});

const receiveRocket = response => ({
  type: ACTIONS.RECEIVE_ROCKET,
  payload: {
    rockets: { [response.data.rocket_id]: response.data }
  }
});

export const fetchRocket = args => {
  var dispatch = args.dispatch;
  var rocket_id = args.rocket_id;
  dispatch(requestRocket());
  return getById(rocket_id).then(response => dispatch(receiveRocket(response)));
};

const shouldFetchRocket = function(rocketCollection) {
  var shouldFetch = false;
  if (!rocketCollection) {
    shouldFetch = true;
  }
  if (!rocketCollection.fetching) {
    shouldFetch = true;
  }

  return shouldFetch;
};

export const fetchRocketIfNeeded = ({ dispatch, rocketCollection, rocket_id }) =>
  shouldFetchRocket({ rocketCollection, rocket_id }) && fetchRocket({ dispatch, rocket_id });
