import {Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import DeckOfCards from "./DeckOfCards.js"
import {BrowserRouter, Link, Route, Switch, useHistory} from "react-router-dom";
import App from "./App";
import Main from "./Main"
import Stationboard from "./Stationboard";
import Zug from "./Zug";
import { useRouteMatch} from "react-router-dom";
import Home from "./Home";
import MainJokes from "./MainJokes";

export default function RouterJokes(){

    let history = useHistory()

    const match = useRouteMatch({path: "/blog/:param1/",strict: true,sensitive: true})
    console.log("match:")
    console.log(match)
    if (match) {console.log("is exact: " + match.isExact)
        console.log("path: " + match.path)
        console.log("url     : " + match.url)
        console.log(match.params)}

    return(
        <div>
            <Route path="/home" component={Home}/>
            <Form>

                <React.StrictMode>
                    <BrowserRouter>
                        <MainJokes />
                    </BrowserRouter>
                </React.StrictMode>



            </Form>

        </div>


    )
}