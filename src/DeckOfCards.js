import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import data from "bootstrap/js/src/dom/data";

export default function Api() {
    const [deck, setDeck] = useState([])
    const [card, setCard] = useState([])
    const [cards, setCards] = useState([])
    const [drawNum, setdrawNum] = useState(0)
    const [error, setError] = useState([])

    const [herz, setHerz]=useState([])
    const [pik, setPik]=useState([])
    const [karo, setKaro]=useState([])
    const [kreuz, setKreuz]=useState([])

    const [disableGen, setDisableGen] = useState(false)
    const [disableDraw, setDisableDraw] = useState(true)


    const btHandler = () => {

        fetch(' https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then(response => response.json())
            .then(data => setDeck(data))
        setDisableDraw(false)
        setDisableGen(true)
    }
    const btHandlerDraw = () => {
        if (drawNum <= 51) {
            fetch(' https://deckofcardsapi.com/api/deck/' + deck.deck_id + '/draw/?count=1')
                .then(response => {
                    if (response.status===200){
                        response.json()
                            .then(data => {
                                let newCard=data.cards[0]
                                setCard(newCard)
                                if (newCard.suit==='HEARTS'){
                                    setHerz([...herz, data.cards[0]])
                                    console.log("Herz")
                                }
                                if (newCard.suit==='CLUBS'){
                                    setKreuz([...kreuz, data.cards[0]])
                                    console.log("Clubs")

                                }
                                if (newCard.suit==='SPADES'){
                                    setPik([...pik, data.cards[0]])
                                    console.log("Spades")

                                }
                                if (newCard.suit==='DIAMONDS'){
                                    setKaro([...karo, data.cards[0]])
                                    console.log("karo")

                                }
                                setdrawNum(drawNum + 1)
                                setDisableDraw(false)
                            })
                    }
                    else {
                        setDisableDraw(false)
                    }
                })
            setDisableDraw(true)
            karo.sort()
            kreuz.sort()
            herz.sort()
            pik.sort()

        } else {
            setError("Das Deck ist leer bitte neustarten")
        }
    }
    const reload = () => {
        window.location.reload()
    }


    return (
        <div>
            <Form>
                <h1>Deck Of Cards (DoC)</h1>
                <br/>
                Bitte Generier und dann Draw
                <br/>
                <Button disabled={disableGen} onClick={btHandler}>Generate</Button>
                <Button disabled={disableDraw} onClick={btHandlerDraw}>Draw</Button>
                <Button onClick={reload}>Reload</Button>
                <br/>
                {<img src={card.image}/>}
                <br/>
                {herz.map((card, idx) =>
                    <row key={idx}>{<img src={card.image }width="100px" length="auto"/>}</row>
                )
                }
                <br/>
                {pik.map((card, idx) =>
                    <row key={idx}>{<img src={card.image}width="100px" length="auto"/>}</row>
                )
                }
                <br/>
                {kreuz.map((card, idx) =>
                    <row key={idx}>{<img src={card.image}width="100px" length="auto"/>}</row>
                )
                }
                <br/>
                {karo.map((card, idx) =>
                    <row key={idx}>{<img src={card.image}width="100px" length="auto"/>}</row>
                )
                }
                <br/>
                <br/>
                {"Du hast bis jetzt gezogen: " + drawNum}
                <br/>

                <h3 color={"red"}>{error}</h3>

            </Form>
        </div>
    )
}