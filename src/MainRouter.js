import {Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import DeckOfCards from "./DeckOfCards.js"
import {BrowserRouter, Link, Route, Switch, useHistory} from "react-router-dom";
import App from "./App";
import Main from "./Main"
import Stationboard from "./Stationboard";
import Zug from "./Zug";
import {useRouteMatch} from "react-router-dom";
import Home from "./Home";
import Router from "./Router";
import Array from "./Array";
import ArrayMoto from "./ArrayMoto";
import Bootstrap from "./Bootstrap";
import Diagram from "./Diagram";
import DropDownComponent from "./DropDownComponent";
import Formular from "./Formular";
import JumbotronComponent from "./JumbotronComponent";
import Likee from "./Likee";
import MainJokes from "./MainJokes";
import Jokes from "./Jokes";
import RouterComponents from "./RouterComponents";
import DayPickerComponent from "./DayPickerComponent";
import ReactDOM from "react-dom";
import RouterJokes from "./RouterJokes";
import SearchFieldComponent from "./SearchFieldComponent";
import RouterKontext from "./RouterKontext";

export default function MainRouter() {

    let history = useHistory()

    function handleBack() {
        history.goBack()// to where I came from}
    }

    const match = useRouteMatch({path: "/blog/:param1/", strict: true, sensitive: true})
    console.log("match:")
    console.log(match)
    if (match) {
        console.log("is exact: " + match.isExact)
        console.log("path: " + match.path)
        console.log("url     : " + match.url)
        console.log(match.params)
    }

    return (
        <div>
            <Route path="/home" component={Home}/>
            <Form>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <Link to={"/maintrain"}>Train</Link></Col>
                        <Col>
                            <Link to={"components"}>Components</Link>
                        </Col>
                        <Col>
                            <Link to={"/array"}>Array</Link></Col>
                        <Col>
                            <Link to={"/arraymoto"}>ArrayMoto</Link></Col>
                        <Col>
                            <Link to={"/deckofcards"}>DeckOfCards</Link></Col>
                        <Col>
                            <Link to={"/formular"}>Formular</Link></Col>
                        <Col>
                            <Link to={"/jumbotron"}>Jumbotron</Link></Col>
                        <Col>
                            <Link to={"/routerkontext"}>Router Kontext</Link>
                        </Col>
                        <Col>
                            <Link to={"/jokesrouter"}>Jokes</Link>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <Button type="button" variant={"link"} color={"red"} onClick={handleBack}>Go back</Button>
                <br/>
                <hr/>
                <br/>
            </Form>
            <Switch>
                <Route path="/maintrain" component={Router}/>
                <Route path="/array" component={Array}/>
                <Route path="/app" component={App}/>
                <Route path="/arraymoto" component={ArrayMoto}/>
                <Route path="/bootstrap" component={Bootstrap}/>
                <Route path="/deckofcards" component={DeckOfCards}/>
                <Route path="/diagram" component={Diagram}/>
                <Route path="/dropdown" component={DropDownComponent}/>
                <Route path="/formular" component={Formular}/>
                <Route path="/jumbotron" component={JumbotronComponent}/>
                <Route path="/stationboard" component={Stationboard}/>
                <Route path="/train" component={Zug}/>
                <Route path="/components" component={RouterComponents}/>
                <Route path="/daypicker" component={DayPickerComponent}/>
                <Route path="/jokesrouter" component={RouterJokes}/>
                <Route path="/searchfield" component={SearchFieldComponent}/>
                <Route path="/routerkontext" component={RouterKontext}/>
            </Switch>
        </div>


    )
}