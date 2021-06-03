import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

function App() {
    const [counter, setCounter]=useState(0)
    const [fieldValue, setFieldValue]=useState(0)
    const [valueR, setValueR]=useState(' ')

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

  return (
    <div className="App">
      hello World
        <br />
        { counter }
        <br />
        <input value={fieldValue} onChange={e => changeHandler(e)}/>
        <br/>
        <button onClick={clickHandlerup}>click me to up</button>
        <button onClick={clickHandlerdown}>click me to down</button>
        <br/>
        <br/>
        <button onClick={clickHandlerdown}>click me to set</button>
        <br/>
        <br/>
        <button onClick={clickHandlerreset}>click me to zero</button>
        <button onClick={clickHandlernumber}>click me to 420</button>
        <br/>
        <br/>
        <button onClick={clickHandlerrdm}>click me to random</button>
        <br/>
        <br/>
        <br/>
        <br/>
        BODY MASS INDEX
        <br/>
        <br/>
        Ihr Geschlecht
        <button onClick={m}>m</button>
        <button onClick={w}>w</button>
        <br/>
        Ihr Gewicht(kg)
        <input ref={fieldkgValue}/>
        <br/>
        Ihre Grösse(cm)
        <input ref={fieldcmValue}/>
        <br/>
        <button onClick={bmiRechner}>SENDEN</button>
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
        <button onClick={selectLog}>SENDEN</button>
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
        <button onClick={radioSave}>SENDEN</button>
        <br/>
        {valueR}


    </div>
  );
}

export default App;
