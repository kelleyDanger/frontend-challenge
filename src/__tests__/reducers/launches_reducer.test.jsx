import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import launchesReducer from '../../reducers/launch';
import Constants from '../../constants';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    const initialState = {
      data: [],
      fetching: false,
      error: null
    };

    expect(launchesReducer(undefined, action)).toEqual(initialState);
  });
});

// describe('LAUNCHES_FETCH', () => {
//   test('returns the correct state', () => {
//     const action = { type: LAUNCHES_FETCH };
//     const expectedState = { fetching: true };

//     expect(launchesReducer(undefined, action)).toEqual(expectedState);
//   });
// });

// describe('LAUNCHES_FETCH_ERROR', () => {
//   test('returns the correct state', () => {
//     const action = { type: LAUNCHES_FETCH_ERROR, error: "404" };
//     const expectedState = { fetching: false, error: "404" };

//     expect(launchesReducer(undefined, action)).toEqual(expectedState);
//   });
// });

// describe('LAUNCHES_FETCH_SUCCESS', () => {
//   test('returns the correct state', () => {
//     const action = { type: LAUNCHES_FETCH_SUCCESS, payload: {launches: [{launch: 1}, {launch: 2}]} };
//     const expectedState = { fetching: false, data: [{launch: 1}, {launch: 2}] };

//     expect(launchesReducer(undefined, action)).toEqual(expectedState);
//   });
// });