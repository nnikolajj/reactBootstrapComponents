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

export default function Router(){

    let history = useHistory()

    function handleHome() {
        history.push("/home")
    }
    function handleStationboard() {
        history.push("/stationboard")
    }
    function handleZug() {
        history.push("/train")
    }

    function handleBack() {
        history.goBack()// to where I came from}
    }


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
                <Container>
                    <Row>
                        <Col>
                            <Link color={"red"} to={"/stationboard"}>Go to Stationboard</Link>
                        </Col>
                        <Col>
                            <Link color={"red"} to={"/train"}>Go to Train</Link>
                        </Col>
                    </Row>
                </Container>

                
            </Form>
            <Switch>
                <Route path="/stationboard" component={Stationboard}/>
                <Route path="/train" component={Zug}/>
            </Switch>
        </div>


    )
}