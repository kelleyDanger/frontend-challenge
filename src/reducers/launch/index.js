import Constants from 'app/constants';
import {fromJS} from 'immutable';

const initialState = fromJS({
  data: [],
  fetching: false,
  error: null
});

export default (state = initialState, action={}) => {
  switch (action.type) {

    case Constants.LAUNCHES_FETCH:
      return state.merge({ 
        fetching: true
      });

    case Constants.LAUNCHES_FETCH_SUCCESS:
      return state.merge({
        fetching: false,
        data: fromJS(action.payload.launches)
      });

    case Constants.LAUNCHES_FETCH_ERROR: 
      return state.merge({ 
        fetching: false,
        error: action.error
      });

    default:
      return state;
  }
};

