import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, Loader } from './components';
import './index.css';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { persistor, store } from './reduxState/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <HashRouter basename="/campervan-rental">
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
