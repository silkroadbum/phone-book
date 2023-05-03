import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { sortingList } from './store/data/dataSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(sortingList(0));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
