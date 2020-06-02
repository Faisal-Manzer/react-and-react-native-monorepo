import React, { useEffect } from 'react';
import './App.css';

import { Router } from '@reach/router';
import { Provider, useDispatch } from 'react-redux';

import { store } from 'common/reducers';
import { sessionStarted } from 'common/actions/demo';

import { GettingStarted } from 'components/GettingStarted';
import { MonorepoIntro } from 'components/MonorepoIntro';

const Initial = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sessionStarted());
  }, [dispatch]);

  return null;
};

const App = () => (
  <Provider store={store}>
    <Initial />
    <Router>
      <GettingStarted path='/' />
      <MonorepoIntro path='/intro/' />
    </Router>
  </Provider>
);

export default App;
