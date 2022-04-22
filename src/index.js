import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/index';




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


