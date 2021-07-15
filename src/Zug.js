import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Stationboard from "./Stationboard";
import App from "./App";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import { useHistory } from "react-router-dom"
import Main from "./Main";
import Home from "./Home";

export default function Zug() {
    const [toStation, setToStation] = useState('');
    const [fromStation, setFromStation] = useState('');
    const [connections, setConnections] = useState([])


    const btHandler = () => {
        fetch('http://transport.opendata.ch/v1/connections?from=' + fromStation + '&to=' + toStation)
            .then(response => response.json())
            .then(data => setConnections(data.connections))
    }

    function handlerTo(e) {
        let value = e.target.value;
        setToStation(value)
    }

    function handlerFrom(e) {
        let value = e.target.value;
        setFromStation(value)
    }

    function wechseln() {
        let tS = toStation
        setToStation(fromStation)
        setFromStation(tS)
    }

    function formatTime(date) {
        if (date.getMinutes() <= 10) {
            return date.getHours() + ":0" + date.getMinutes();
        } else {
            return date.getHours() + ":" + date.getMinutes();
        }
    }





        return (
            <div>
                <Form>
                    <h1>Zug Verkehr</h1>
                    <br/>

                    <br/>
                    <br/>
                    <input type="text" value={fromStation} onChange={e => handlerFrom(e)} placeholder={"Abfahrtsort"}/>
                    <br/>
                    <br/>
                    <Button onClick={wechseln}>↑↓</Button>
                    <br/>
                    <br/>
                    <input type="text" value={toStation} onChange={e => handlerTo(e)} placeholder={"Zielort"}/>
                    <br/>
                    <br/>
                    <Button onClick={btHandler}>Search</Button>
                    <br/>
                    <br/>
                    <ul>{connections.map((con, idx) =>
                        <ListGroup key={idx}>

                            <ListGroupItem>
                                <h3>Abfahrtsort:</h3>
                                {con.from.station.name}
                                <br/>
                                <br/>
                                <h5> Abfahrtszeit:</h5>
                                {formatTime(new Date(con.from.departure))}
                                <br/>
                                <br/>
                                <h5>Abfahrtsgleis:</h5>
                                {con.from.platform}
                                <br/>
                                <hr/>

                                <h3>Zielort:</h3>
                                {con.to.station.name}
                                <br/>
                                <br/>
                                <h5>Ankunftszeit:</h5>
                                {formatTime(new Date(con.to.arrival))}
                                <br/>
                                <h5>Ankunftsgleis:</h5>
                                {con.to.platform}
                                <br/>
                                <br/>
                            </ListGroupItem>
                            <ListGroupItem>
                                ^
                                <br/>
                                |
                                <br/>
                                |
                                <br/>
                                |
                                <br/>
                                |
                                <br/>
                                |
                                <br/>
                                v
                                <br/>
                            </ListGroupItem>

                        </ListGroup>)
                    }
                    </ul>
                </Form>
            </div>
        )
}