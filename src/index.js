import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Store } from './store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
, document.getElementById('root'));

registerServiceWorker();