import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import thunk from 'redux-thunk';

import { demo } from './demo';

const reducers = combineReducers({
  demo,
});


export const getStore = (storage) => {
  const persistConfig = {
    key: 'root-store',
    storage,
    whitelist: ['demo'],
    stateReconciler: hardSet,
  };
  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
};
