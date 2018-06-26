import { combineReducers, createStore } from 'redux';

import pageState from '../state/page';

// Merges Reducers and injects them into redux store
export default function configureStore(state: any = {}) {
  const rootReducer = combineReducers({ pageState });

  const store = createStore(rootReducer);
  return store;
}
