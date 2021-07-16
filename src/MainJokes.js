import {Button, ButtonGroup, Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {Link, Route, Switch} from "react-router-dom";
import Stationboard from "./Stationboard";
import Zug from "./Zug";
import Jokes from "./Jokes";

export default function MainJokes() {

    const [text, setText] = useState([]);
    const [lang, setLang]=useState([])
    const [bl, setBl]=useState([])
    const [colorP, setColorP] = useState("link")
    const [colorM, setColorM] = useState("link")
    const [colorD, setColorD] = useState("link")
    const [colorPu, setColorPu] = useState("link")
    const [colorS, setColorS] = useState("link")
    const [colorC, setColorC] = useState("link")
    const [colorG, setColorG] = useState("link")
    const [colorBn, setColorBn] = useState("link")
    const [colorBr, setColorBr] = useState("link")
    const [colorBp, setColorBp] = useState("link")
    const [colorBra, setColorBra] = useState("link")
    const [colorBs, setColorBs] = useState("link")
    const [colorBe, setColorBe] = useState("link")


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
    function btHandlerBn() {

        if (bl.includes('nsfw')) {
            setBl(bl.filter(item => item !== 'nsfw'))
            setColorBn('link')
        } else {
            setBl([...bl,'nsfw'])
            setColorBn('primary')
        }
    }
    function btHandlerBr() {

        if (bl.includes('religious')) {
            setBl(bl.filter(item => item !== 'religious'))
            setColorBr('link')
        } else {
            setBl([...bl,'religious'])
            setColorBr('primary')
        }
    }
    function btHandlerBp() {

        if (bl.includes('political')) {
            setBl(bl.filter(item => item !== 'political'))
            setColorBp('link')
        } else {
            setBl([...bl,'political'])
            setColorBp('primary')
        }
    }
    function btHandlerBra() {

        if (bl.includes('racist')) {
            setBl(bl.filter(item => item !== 'racist'))
            setColorBra('link')
        } else {
            setBl([...bl,'racist'])
            setColorBra('primary')
        }
    }
    function btHandlerBs() {

        if (bl.includes('sexist')) {
            setBl(bl.filter(item => item !== 'sexist'))
            setColorBs('link')
        } else {
            setBl([...bl,'sexist'])
            setColorBs('primary')
        }
    }
    function btHandlerBe() {

        if (bl.includes('explicit')) {
            setBl(bl.filter(item => item !== 'explicit'))
            setColorBe('link')
        } else {
            setBl([...bl,'explicit'])
            setColorBe('primary')
        }
    }


    return (
        <div>
            <br/>
            <Container>
               <Row>
                   <Col/>
                   <Col>
                       Category
                       <hr/>
                   </Col>
                   <Col/>
               </Row>
            </Container>
            <ButtonGroup>
            <Button type="button" variant={colorP} onClick={btHandlerP}>Programming</Button>
            <Button type="button" variant={colorM} onClick={btHandlerM}>Misc</Button>
            <Button type="button" variant={colorD} onClick={btHandlerD}>Dark</Button>
            <Button type="button" variant={colorPu} onClick={btHandlerPu}>Pun</Button>
            <Button type="button" variant={colorS} onClick={btHandlerS}>Spooky</Button>
            <Button type="button" variant={colorC} onClick={btHandlerC}>Christmas</Button>

            </ButtonGroup>
            <br/>
            <br/>
            <br/>
            <Container>
                <Row>
                    <Col/>
                    <Col>
                        Blacklist
                        <hr/>
                    </Col>
                    <Col/>
                </Row>
            </Container>
            <ButtonGroup>
                <Button type="button" variant={colorBn} onClick={btHandlerBn}>nsfw</Button>
                <Button type="button" variant={colorBr} onClick={btHandlerBr}>religious</Button>
                <Button type="button" variant={colorBp} onClick={btHandlerBp}>political</Button>
                <Button type="button" variant={colorBra} onClick={btHandlerBra}>racist</Button>
                <Button type="button" variant={colorBs} onClick={btHandlerBs}>sexist</Button>
                <Button type="button" variant={colorBe} onClick={btHandlerBe}>explicit</Button>
            </ButtonGroup>
            <br/>
            <br/>
            <br/>
            <Container>
                <Row>
                    <Col/>
                    <Col>
                        Category
                        <hr/>
                    </Col>
                    <Col/>
                </Row>
            </Container>
            <ButtonGroup>
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
                    <Jokes atext={text} lang={lang} bl={bl}/>

                    </Container>

                )}/>

            </Switch>
        </div>
    )
}