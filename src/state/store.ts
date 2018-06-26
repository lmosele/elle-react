import { combineReducers, createStore } from 'redux';

import reducers from '../state/page';

// Merges Reducers and injects them into redux store
export default function configureStore(state: any = {}) {
  const rootReducer = combineReducers({reducers});

  const store = createStore(rootReducer);

  return store;
}
