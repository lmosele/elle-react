import { combineReducers, createStore } from 'redux';

import reducers from '../state/page';

export default function configureStore(state: any = {}) {
  const rootReducer = combineReducers({reducers});

  const store = createStore(rootReducer);

  return store;
}
