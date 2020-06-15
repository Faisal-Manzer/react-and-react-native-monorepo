import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import storage from 'localforage';
import { PersistGate } from 'redux-persist/integration/react';

import { getStore } from 'common/reducers';

import { GettingStarted } from 'components/GettingStarted';
import { MonorepoIntro } from 'components/MonorepoIntro';
import { Initial } from 'components/Initial';

const { store, persistor } = getStore(storage);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <>
        <Initial />
        <Router>
          <GettingStarted path='/' />
          <MonorepoIntro path='/intro/' />
        </Router>
      </>
    </PersistGate>
  </Provider>
);

export default App;
