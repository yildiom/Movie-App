import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from '../reducers/index';

export const store = createStore(
  combineReducers(reducer),
  composeWithDevTools(applyMiddleware(thunk, logger))
);
