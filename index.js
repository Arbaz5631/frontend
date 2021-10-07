import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import store from './redux/store';
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes component={Routes} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


