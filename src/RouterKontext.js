import React, {useContext, useState} from 'react';
import './App.css';
import {colorPalette} from "./colorPalette";
const MyContext = React.createContext({});

export default function RouterKontext() {
    const [counter, setCounter] = useState(55);

    function ComponentA() {
        const {counter} = useContext(MyContext);
        return (
            <div style={colorPalette.color2}>
                <p>
                    Component - A<br/>
                    <small>uses counter with useContext</small>
                </p>
                counter: {counter}
                <br/>
                <ComponentA1/>
            </div>
        )
    }
    function ComponentB() {
        return (
            <MyContext.Consumer>
                {(contextCounter) => (
                    <div style={colorPalette.color3}>
                        <p>
                            Component - B<br/>
                            <small>uses counter with consumer</small>
                        </p>
                        counter: {contextCounter.counter}
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
    function ComponentA1() {
        const {counter, setCounter} = useContext(MyContext);
        return (
            <div style={colorPalette.color4}>
                <p>Component - A1</p>
                {counter}
                <br/>
                <input type="button" onClick={() => setCounter(0)} value="clear"
                       className="btn btn-sm btn-outline-light"/>
            </div>
        )
    }
    return (
        <MyContext.Provider value={{counter, setCounter}}>
            <div style={colorPalette.color1}>
                <p>Top-Component</p>
                <input type="button" onClick={() => setCounter(counter + 1)}
                       value="plus 1"
                       className="btn btn-sm btn-outline-light"/>
                <br/>counter: {counter}<br/>
                <input type="button" onClick={() => setCounter(counter - 1)}
                       value="minus 1"
                       className="btn btn-sm btn-outline-light"/>
            </div>
            <ComponentA/>
            <ComponentB/>
        </MyContext.Provider>
    );
}
