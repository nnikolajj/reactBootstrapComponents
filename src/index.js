import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Array from "./Array";
import ArrayMoto from "./ArrayMoto";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Bootstrap from "./Bootstrap";
import Formular from "./Formular";
import Api from "./Api";
import DeckOfCards from "./DeckOfCards";
import Zug from "./Zug";
import Router from "./Router"
import Stationboard from "./Stationboard"
import Home from "./Home";
import{BrowserRouter, Switch,Route,NavLink,Link}from'react-router-dom';
import Like from "./Likee";
import Soccer from "./Soccer";
import Jokes from "./Jokes";
import MainJokes from "./MainJokes";
import AlertComponent from "./AlertComponent";
import JumbotronComponent from "./JumbotronComponent";
import DropDownComponent from "./DropDownComponent";
import Diagram from "./Diagram";
import MainRouter from "./MainRouter";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <MainRouter />
      </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
