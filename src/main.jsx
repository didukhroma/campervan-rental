import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { fetchCampers } from './services/api';

const res = fetchCampers();
console.log(res);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
