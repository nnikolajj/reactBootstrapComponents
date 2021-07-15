import {BrowserRouter, Link, Route, Switch} from "react-router-dom";


import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import App from "./App";
import Stationboard from "./Stationboard";
import Zug from "./Zug";

export default function Home(){

    return(
        <div>
           <h1>HOMEPAGE</h1>
        </div>
    )
}

function Homee() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>From ... To ...</h2>;
}

function Users() {
    return <h2>Stationboard</h2>;
}


