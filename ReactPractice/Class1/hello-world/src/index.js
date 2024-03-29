import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Basicdetails from './Components/BasicDetails'
//import { Skills, DummyText } from './Components/Skills'
import Skills from './Components/Skills.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Basicdetails></Basicdetails>
    <Skills></Skills>
  </div>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
