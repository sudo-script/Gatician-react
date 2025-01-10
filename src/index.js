// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './index.css';
import App from './App';

// React 18: use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root')); // Creates a root for rendering
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
