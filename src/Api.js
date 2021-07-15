import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";

export default function Api(){
    const [inputWord, setInputWord] = useState('');
    const [words, setWords] = useState([])


    const btHandler = () => {
        fetch('https://api.datamuse.com/words?rel_rhy='+inputWord)
            .then(response => response.json())
            .then(data => setWords(data))
    }

    function handler(e){
        let value=e.target.value;
            setInputWord(value)
    }

    return(
        <div>
            <Form>
            <input type="text" value={inputWord} onChange={e => handler(e)}/>
            <Button onClick={btHandler} >Set</Button>
            <ul>{words.map((word, idx) =>
                <li key={idx}>{word.word}</li>)
                }
            </ul>
            </Form>
        </div>
    )
}