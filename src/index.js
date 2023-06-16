import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Homepage from './Components/Homepage/Homepage';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Homepage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
