import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';


const colors = [
  {name: 'red', color: 'rgb(255,0,0)'}, 
  {name: 'green', color: 'rgb(0,255,0)'}, 
  {name: 'blue', color: 'rgb(0,0,255)'}
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App colors={colors}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
