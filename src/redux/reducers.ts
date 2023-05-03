import { combineReducers } from 'redux';

// import your reducers here
import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  // add more reducers here
});

export default rootReducer;
