import LaunchService from 'app/services/LaunchService';
import Constants from 'app/constants';

export const fetchLaunches = dispatch => {
  dispatch({type: Constants.LAUNCHES_FETCH});

  return(
    LaunchService.get()
      .then(response => {
        dispatch({
          type: Constants.LAUNCHES_FETCH_SUCCESS,
          payload: {
            launches: response.data
          }
        })
      })
      .catch(error => {
        dispatch({
          type: Constants.LAUNCHES_FETCH_ERROR,
          error: error
        })
      })
  );
};

const shouldFetchLaunches = launchCollection => !launchCollection || !launchCollection.get('fetching');

export const fetchLaunchesIfNeeded = ({ dispatch, launchCollection }) =>
  shouldFetchLaunches(launchCollection) && fetchLaunches(dispatch);
