import React from 'react';

import { Link } from '@reach/router';

import { HelloMonorepo } from 'common/components/helloMonorepo';

import logo from '../logo.svg';
import '../App.css';

export const GettingStarted = () => (
  <div>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <div>
        <Link to='/intro/' style={{ color: '#FFFFFF' }}>
          <HelloMonorepo />
        </Link>
      </div>
      <br />
      <p>
        Edit 
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React
      </a>
    </header>
  </div>
);
