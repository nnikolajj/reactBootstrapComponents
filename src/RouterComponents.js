import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import DeckOfCards from "./DeckOfCards.js"
import {Link, Route, Switch, useHistory} from "react-router-dom";
import App from "./App";
import Main from "./Main"
import Stationboard from "./Stationboard";
import Zug from "./Zug";
import { useRouteMatch} from "react-router-dom";
import Home from "./Home";

export default function RouterComponents(){

    const match = useRouteMatch({path: "/blog/:param1/",strict: true,sensitive: true})
    console.log("match:")
    console.log(match)
    if (match) {console.log("is exact: " + match.isExact)
        console.log("path: " + match.path)
        console.log("url     : " + match.url)
        console.log(match.params)}

    return(
        <div>
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <Link color={"red"} to={"/app"}>App</Link>
                        </Col>
                        <Col>
                            <Link color={"red"} to={"/bootstrap"}>Bootstrap</Link>
                        </Col>
                        <Col>
                            <Link color={"red"} to={"/diagram"}>Diagram</Link>
                        </Col>
                        <Col>
                            <Link color={"red"} to={"/dropdown"}>Drop Down</Link>

                        </Col>
                        <Col>
                            <Link color={"red"} to={"/daypicker"}>Day Picker</Link>

                        </Col>
                        <Col>
                            <Link color={"red"} to={"/searchfield"}>Search Field</Link>

                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>


    )
}