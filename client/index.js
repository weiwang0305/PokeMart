import React from 'react';
import App from './App.jsx';
import { render } from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import styles from './styles.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
