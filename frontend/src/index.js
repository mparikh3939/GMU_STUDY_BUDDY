import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import App from './App';
<<<<<<< HEAD
import './index.css';
=======
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
>>>>>>> 83ea817 (Implemented a simple header)
=======

import App from './App';
<<<<<<< HEAD

import './index.css';
<<<<<<< HEAD
>>>>>>> d2c69de (Formatted a couple of things)
=======
>>>>>>> 0c2edba (Implemented a simple header)
=======

import App from './App';

import './index.css';
>>>>>>> a670316 (Formatted a couple of things)
=======
=======
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 0c2edba (Implemented a simple header)
>>>>>>> 262226a (Implemented a simple header)

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="YOUR_DOMAIN"
      clientId="YOUR_CLIENT_ID"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
);

=======
);
>>>>>>> d2c69de (Formatted a couple of things)
=======
);
>>>>>>> a670316 (Formatted a couple of things)
