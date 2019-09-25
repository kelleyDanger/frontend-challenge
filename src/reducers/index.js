import { combineReducers } from 'redux';
import launches from 'app/reducers/launch';
import launchShow from 'app/reducers/launch/show';

export default combineReducers({
  launches,
  launchShow
});
