import {Button, ButtonGroup, Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {Link, Route, Switch} from "react-router-dom";
import Stationboard from "./Stationboard";
import Zug from "./Zug";
import Jokes from "./Jokes";

export default function MainJokes() {
    const [text, setText] = useState([]);
    const [lang, setLang]=useState([])
    const [colorP, setColorP] = useState("link")
    const [colorM, setColorM] = useState("link")
    const [colorD, setColorD] = useState("link")
    const [colorPu, setColorPu] = useState("link")
    const [colorS, setColorS] = useState("link")
    const [colorC, setColorC] = useState("link")
    const [colorG, setColorG] = useState("link")


    function btHandlerP() {

        if (text.includes('Programming')) {
            setText(text.filter(item => item !== 'Programming'))

            setColorP('link')
        } else {
            setText([...text,'Programming'])
            setColorP('primary')

        }

        console.log(text)
    }

    function btHandlerM() {

        if (text.includes('Miscellaneous')) {
            setText(text.filter(item => item !== 'Miscellaneous'))

            setColorM('link')
        } else {
            setText([...text,'Miscellaneous'])
            setColorM('primary')

        }
        console.log(text)

    }

    function btHandlerD() {

        if (text.includes('Dark')) {
            setText(text.filter(item => item !== 'Dark'))
            setColorD('link')
        } else {
            setText([...text,'Dark'])
            setColorD('primary')

        }
        console.log(text)

    }

    function btHandlerPu() {

        if (text.includes('Pun')) {
            setText(text.filter(item => item !== 'Pun'))

            setColorPu('link')
        } else {
            setText([...text,'Pun'])
            setColorPu('primary')

        }
        console.log(text)

    }

    function btHandlerS() {
        if (text.includes('Spooky')) {
            setText(text.filter(item => item !== 'Spooky'))

            setColorS('link')
        } else {
            setText([...text,'Spooky'])
            setColorS('primary')

        }
        console.log(text)

    }

    function btHandlerC() {

        if (text.includes('Christmas')) {
            setText(text.filter(item => item !== 'Christmas'))

            setColorC('link')
        } else {
            setText([...text,'Christmas'])
            setColorC('primary')

        }

        console.log(text)

    }
    function btHandlerG() {

        if (lang==="de") {
            setLang("")
            setColorG('link')
        } else {
            setLang("de")
            setColorG('primary')
        }

         console.log(lang)

    }


    return (
        <div>
            <br/>
            <ButtonGroup>
            <Button type="button" variant={colorP} onClick={btHandlerP}>Programming</Button>
            <Button type="button" variant={colorM} onClick={btHandlerM}>Misc</Button>
            <Button type="button" variant={colorD} onClick={btHandlerD}>Dark</Button>
            <Button type="button" variant={colorPu} onClick={btHandlerPu}>Pun</Button>
            <Button type="button" variant={colorS} onClick={btHandlerS}>Spooky</Button>
            <Button type="button" variant={colorC} onClick={btHandlerC}>Christmas</Button>
            <Button type="button" variant={colorG} onClick={btHandlerG}>German</Button>
            </ButtonGroup>
            <br/>
            <br/>
            <br/>


            <Link color={"red"} to={"/jokes"}>Send</Link>
            <br/>



            <Switch>
                <Route path="/jokes" component={() => (
                    <Container>
                    <Jokes atext={text} lang={lang}/>

                    </Container>

                )}/>

            </Switch>
        </div>
    )
}