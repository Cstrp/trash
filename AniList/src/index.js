import React from 'react';
import ReactDOM from 'react-dom/client';
import './views/styles/index.scss';
import App from './views/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
