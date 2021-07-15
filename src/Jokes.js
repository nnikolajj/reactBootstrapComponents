import {useRef, useState} from "react";
import {Form, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Jokes({atext, lang}) {
    const [joke, setJoke] = useState([])
    const [spinnerVisible, setSpinnerVisible] = useState(false)
    const [enable, setEnable] = useState(false)
    let text = ""
    let one = true

    const btHandler = () => {
        setSpinnerVisible(true)
        setEnable(true)
        let search = 'https://v2.jokeapi.dev/joke/'

        if (one) {
            for (let i = 0; i < atext.length; i++) {
                console.log(atext)

                if (i < (atext.length - 1)) {
                    console.log(atext[i])
                    text = (text + atext[i] + ',')
                    console.log(text)
                } else {

                    text = (text + atext[i])
                }
            }
            one = false
        }
        if (text === "") {
            search = 'https://v2.jokeapi.dev/joke/Any'
        } else {
            search = 'https://v2.jokeapi.dev/joke/' + text

        }
        console.log(lang)
        if (lang === "de") {
            search += "?lang=de"
        }
        console.log(search)


        spleep(1500,() => fetch(search)
            .then(response => response.json())
            .then(data => {
                setJoke(data)
                setSpinnerVisible(false)
                setEnable(false)
            })
            .catch(error => console.log('error', error))


    );}

    function handler(e) {
        let value = e.target.value;
    }

    return (
        <div>
            <Form>
                <br/>
                <br/>
                <Button onClick={btHandler} disabled={enable}>
                    {
                        spinnerVisible &&  <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                    }

                    New Joke</Button>
                <br/>
                <br/>
                <br/>
                {joke.setup}{joke.joke}
                <br/>
                <br/>
                {joke.delivery}
                <br/>
                <br/>
                <hr/>
                Category:
                <br/>
                {joke.category}
                <br/>
                Language:
                <br/>
                {joke.lang}
                <br/>
                {joke.nsfw}

            </Form>
        </div>
    )
}
function spleep(ms, func){
    setTimeout(func,ms)
}