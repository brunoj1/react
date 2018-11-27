import { clickReducer } from './clickReducer';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

export const Reducers = combineReducers({
  clickState: clickReducer,
  todos,
  visibilityFilter, 
  form: formReducer
});