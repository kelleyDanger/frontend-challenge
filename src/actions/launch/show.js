import LaunchService from 'app/services/LaunchService';
import Constants from 'app/constants';

export const fetchLaunch = (dispatch, flightNumber) => {
  dispatch({type: Constants.LAUNCH_FETCH});

  return(
    LaunchService.getByFlightNumber(flightNumber)
      .then(response => {
        dispatch({
          type: Constants.LAUNCH_FETCH_SUCCESS,
          payload: {
            launch: response.data
          }
        })
      })
      .catch(error => {
        dispatch({
          type: Constants.LAUNCH_FETCH_ERROR,
          error: error
        })
      })
  );
};

export const resetLaunch = (dispatch) => {
  dispatch({
    type: Constants.LAUNCH_RESET
  });
};

const shouldFetchLaunch = launchShow => !launchShow || !launchShow.get('fetching');

export const fetchLaunchIfNeeded = (dispatch, launchShow, launchId) =>
  shouldFetchLaunch(launchShow) && fetchLaunch(dispatch, launchId);
