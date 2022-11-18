import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Uc1 from './Uc1';
//import Uc2 from './Uc2';
//import Uc3 from './Uc3';
//import Uc4 from './Uc4';
//import Uc5 from './Uc5';
//import Uc6 from './Uc6';
//import Uc7 from './Uc7';
import App from './App';


import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
