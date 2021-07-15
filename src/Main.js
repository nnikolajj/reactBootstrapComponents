import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import DeckOfCards from "./DeckOfCards.js"
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Main from "./Main"

export default function Api(){


    return(
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/app" component={App}/>

        </Switch>
    )
}