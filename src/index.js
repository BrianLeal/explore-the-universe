import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// LIBRARY IMPORTS
import {BrowserRouter as Router} from 'react-router-dom';
// CUSTOM IMPORTS
import SiteContextProvider from '../src/context/SiteData';

ReactDOM.render (
  <React.StrictMode>
    <Router>
      <SiteContextProvider>
        <App />
      </SiteContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
