import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/App.css'; // 引入全局样式

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
