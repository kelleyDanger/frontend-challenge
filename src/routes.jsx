import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Three from './views/Three';
import One from './views/One';
import Two from './views/Two';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={One}/>
      <Route path="/two" component={Two}/>
      <Route path="/three" component={Three}/>
    </div>
  </Router>
);

export default Routes;
