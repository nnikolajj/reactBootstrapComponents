import './Bootstrap.css';

import Button from 'react-bootstrap/Button'
import {Col, Container, Row} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert'
import {useRef, useState} from "react";
import ArrayMoto from "./ArrayMoto";

export default function Bootstrap(){

    const [warning,setWarning]=useState('')
    const [counter, setCounter]=useState(0)
    const [fieldValue, setFieldValue]=useState(0)
    const [valueR, setValueR]=useState(' ')
    const [valueCB, setValueCB]=useState(' ')

    const fieldkgValue=useRef(0)
    const fieldcmValue=useRef(0)
    const [bmi, setBMI]=useState(0)

    const fieldNameValue=useRef(0)
    const fieldMessageValue=useRef(0)

    const fieldSelectValue=useRef(0)

    const [anzeige, setAnzeige]=useState(0)


    let nicknames=[" - ","Banana","Juicy","Smasher","Nerd","Fish","Smoke","Hunter","AshenOne","Steve","Gerald","Frieda","Dose","Hose",
        "Lord","Gras","Saga","Cinder","Sport","Diggah","Cool","Lost","HEHE","Death","Monster","Tron"]

    let geschlecht = false;

    let selectAnzeige=0;

    function clickHandlerup(){
        setCounter(counter+1)
    }
    function clickHandlerdown(){
        setCounter(counter-1)
    } function clickHandlerrdm(){
        setCounter(Math.floor(Math.random()*1000))
    }
    function clickHandlerreset(){
        setCounter(0)
    }
    function clickHandlernumber(){
        setCounter(420)
    }
    function changeHandler(e) {
        let value=e.target.value
        if (!isNaN(value)) {
            setFieldValue(value)
            setCounter(parseInt(value))
        }
        return 'isNAN';
    }

    /**
     * BMI
     */
    function bmiRechner(){
        let a=fieldcmValue.current.value*fieldcmValue.current.value
        setBMI(Math.floor(fieldkgValue.current.value/a))
    }
    function m(){
        geschlecht=false;
    }
    function w(){
        geschlecht=true;
    }


    /**
     * Select
     */
    function selectLog(){
        let rdm=Math.floor(Math.random()*24+1)
        console.log(selectAnzeige)
        let select=" "
        let n=fieldNameValue.current.value
        let m=fieldMessageValue.current.value
        if (fieldSelectValue.current.value==="Nickname anzeigen"){
            select=n+nicknames[rdm]+"420"
        }
        if (fieldSelectValue.current.value==="Nichts anzeigen"){
            select=" "
        }
        if (fieldSelectValue.current.value==="Email anzeigen"){
            select=n+"@nikoMail.420"
        }
        setAnzeige(n+" / "+m +" / "+ select)
    }
    function emailanzeige(){
    }
    function nickanzeige(){
    }
    function nichtsanzeige(){
    }

    /**
     * RadioButtons
     */
    function radioSave(){
        console.log(valueR)
    }

    return(
        <div className={ArrayMoto}>
            <Alert variant={warning}>ALERT ALERT ARMIN ALERT</Alert>
            <Container>
                <Row>
                    <Col>Row 1, Column 1</Col>
                    <Col>Row 1, Column 2</Col>
                </Row>
                <Row>
                    <Col>Row 2, Column 1(large)</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
            <br />
            <Container>
                <Row>
                    <Col></Col>
                    <Col>{ counter }</Col>
                    <Col></Col>

                </Row>
            <br />
                <Row>
                    <Col></Col>
                    <Col>
            <input value={fieldValue} onChange={e => changeHandler(e)}/>
                    </Col>
                    <Col></Col>
                </Row>
            <br/>

                <Row>
                    <Col></Col>
                    <Col>
            <Button onClick={clickHandlerup} class="btn btn-outline-success">click me to up</Button>
            <Button onClick={clickHandlerdown} class="btn btn-outline-danger">click me to down</Button>
                    </Col>
                    <Col></Col>
                </Row>

            <br/>
            <br/>
                <Row>
                    <Col></Col>
                    <Col><Button onClick={clickHandlerreset} class="btn btn-outline-primary">click me to zero</Button>
                        <Button onClick={clickHandlernumber} class="btn btn-outline-warning">click me to 420</Button></Col>
                    <Col></Col>

                </Row>
            <br/>
            <br/>
                <Row>
                    <Col></Col>
                    <Col><Button onClick={clickHandlerrdm} class="btn btn-outline-info">click me to random</Button></Col>
                    <Col></Col>

                </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            BODY MASS INDEX
            <br/>
            <br/>
            Ihr Geschlecht
            <Button onClick={m} class="btn btn-outline-dark">m</Button>
            <Button onClick={w}>w</Button>
            <br/>
            Ihr Gewicht(kg)
            <input ref={fieldkgValue}/>
            <br/>
            Ihre Grösse(cm)
            <input ref={fieldcmValue}/>
            <br/>
            <Button onClick={bmiRechner}>SENDEN</Button>
            <br/>
            { bmi }
            <br/>
            <br/>
            <br/>
            <br/>
            SELECT
            <br/>
            <br/>
            Name:
            <br/>
            <input ref={fieldNameValue}/>
            <br/>
            Message:
            <br/>
            <textarea ref={fieldMessageValue}></textarea>
            <br/>
            <select ref={fieldSelectValue}>
                <option value={emailanzeige()}>Email anzeigen</option>
                <option value={nickanzeige()}>Nickname anzeigen</option>
                <option value={nichtsanzeige()}>Nichts anzeigen</option>
            </select>
            <br/>
            <br/>
            <Button onClick={selectLog}>SENDEN</Button>
            <br/>
            <br/>
            {anzeige}
            <br/>
            <br/>
            <br/>
            <br/>
            RADIO BUTTONS
            <br/>
            <input onChange={e=>setValueR(e.target.value)} type="radio" id="one" name="radioOptions" value="1"/>
            <label htmlFor="one">Option 1</label>
            <br/>
            <input onChange={e=>setValueR(e.target.value)} type="radio" id="two" name="radioOptions" value="2"/>
            <label htmlFor="two">Option 2</label>
            <br/>
            <input onChange={e=>setValueR(e.target.value)} type="radio" id="three" name="radioOptions" value="3"/>
            <label htmlFor="three">Option 3</label>
            <br/>
            <Button onClick={radioSave}>SENDEN</Button>
            <br/>
            {valueR}
            <br/>
            <br/>
            <br/>
            <br/>
            CHECKBOX
            <br/>
            <input onChange={e=>setValueCB(e.currentTarget.value)} type="checkbox" id="one" name="checkBox" value="1"/>
            <label htmlFor="one">Option 1</label>
            <br/>
            <input onChange={e=>setValueCB(e.currentTarget.value)} type="checkbox" id="two" name="checkBox" value="2"/>
            <label htmlFor="two">Option 2</label>
            <br/>
            <input onChange={e=>setValueCB(e.currentTarget.value)} type="checkbox" id="three" name="checkBox" value="3"/>
            <label htmlFor="three">Option 3</label>
            <br/>
            <Button onClick={radioSave}>SENDEN</Button>
            <br/>
            {valueCB}
        </Container>
        </div>
    )
};
