import Constants from 'app/constants';
import {fromJS} from 'immutable';

const initialState = fromJS({
  data: {},
  fetching: false,
  error: null
});

export default (state = initialState, action={}) => {
  switch (action.type) {
    case Constants.LAUNCH_FETCH: 
      return state.merge({ 
        fetching: true,
        error: null
      });

    case Constants.LAUNCH_FETCH_SUCCESS: 
      return state.merge({
        fetching: false,
        data: fromJS(action.payload.launch)
      });

    case Constants.LAUNCH_FETCH_ERROR: 
      return state.merge({ 
        fetching: false,
        error: action.error
      });

    case Constants.LAUNCH_RESET:
      return initialState

    default:
      return state;
  }
};

