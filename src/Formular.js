import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";

export default function Formular(){
    const [vorname,setVorname]=useState('')
    const [name,setName]=useState('')

    return(
        <div>
            FORMULAR
            <Container>
                <br/>
                <Row>

                    <Col></Col>
                    <Col>
                        <input value={vorname} placeholder={"Max"}></input>
                    </Col>
                    <Col>
                        <input value={name} placeholder={"Mustermann"}></input>
                    </Col>
                    <Col></Col>
                </Row>
                <br/>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}