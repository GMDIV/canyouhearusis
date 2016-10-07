// ==========================
// ./reducers/index.js
// ==========================

import { combineReducers } from 'redux';
import * as language from './language';

const appReducer = combineReducers(Object.assign({}, language));

const rootReducer = (state, action) => {
  // if (action.type === CLEAR_TO_DEFAULT) {
  //   // DANGER!  DANGER!  DANGER!
  //   return appReducer(undefined, action);
  //   // THIS CLEARS STATE TO DEFAULT.
  // } else {
    return appReducer(state, action);
  // }
};

export default rootReducer;
