import {Button, Card, Col, Container, Dropdown, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useState} from "react";


export default function DropDownComponent() {
    const [teams, setTeams] = useState(["Team React", "Team Angular", "Team Spring"])
    const [kategorie, setKategorie] = useState(["LCD Bildschirme", "Computer", "Laptop"])
    const [tReact, setTReact] = useState(["Dölf Designer", "Serge Sequenzer", "Peter Prüfer", "Karin Kontroller", "Fritz Fischer"])
    const [tAngular, setTAngular] = useState(["Michale Marker", "Claudia Coder", "Teo Tester", "Florian Filter"])
    const [tSpring, setTSrping] = useState(["Samuel Scripter", "Dorotea Dokumenter", "Rolf Risser"])
    const gerate = [
        {
            name: "SamsungMonitor C27H800FCUX",
            description: "Gekrümmtes 27\"-Display (1800R) mit einer Auflösung von 1920 x 1080 px (entspiegelt)",
            purchasingPrice: "275",
            price: "349",
            image: "https://cdn.competec.ch/images/5/7/577902/null-H-002.xxl3.jpg"
        },
        {
            name: "Acer Monitor S277 Zeroframe",
            description: "UHD-Auflösung, 3840 x 2160 Pixel IPS-LED-Panel",
            purchasingPrice: "470",
            price: "599",
            image: "https://cdn.competec.ch/images/3/2/325854/acer-s277-27-ips-led-4k2k-zeroframe-001.xxl3.jpg"
        },
        {
            name: "Microsoft Surface Go 64GB (Business)",
            description: "Intel Pentium Gold 4415Y Prozessor mit 1,6 GHz, 4 GB RAM und 64 GB eMMC-Speicher",
            purchasingPrice: "420",
            price: "549",
            image: "https://cdn.competec.ch/images/7/9/799507/Microsoft-Surface-Go-64GB-H-003.xxl3.jpg"
        },
        {
            name: "Lenovo Notebook Yoga 530-14",
            description: "Intel Core i5-8250U Quad-Core-Prozessor mit 1,6 bis 3,4 GHz",
            purchasingPrice: "735",
            price: "849",
            image: "https://cdn.competec.ch/images/7/9/798850/null-H-002.xxl3.jpg"
        },
    ]

    const [value, setValue] = useState([]);
    const [valueT, setValueT] = useState([]);
    const [valueM, setValueM] = useState([]);
    const [valueG, setValueG] = useState([]);
    const [selectedE, setSelectedE] = useState([]);
    const [selectedP, setSelectedP] = useState([]);
    const [selectedI, setSelectedI] = useState([]);
    const [selectedB, setSelectedB] = useState([]);
    const [selectedN, setSelectedN] = useState([]);

    const handleSelect = (e) => {
        if (e === "Team React") {
            setValue([...tReact])
            setValueT("Team React")
        }
        if (e === "Team Angular") {
            setValue([...tAngular])
            setValueT("Team Angular")
        }

        if (e === "Team Spring") {
            setValue([...tSpring])
            setValueT("Team Spring")
        }


    }

    const handleSelectG = (e) => {
        console.log(gerate.map(gerat => gerat.name))
        if (e === "LCD Bildschirme") {
            setValueG([...gerate])

        }
        if (e === "Computer") {
            setValueG([])
        }

        if (e === "Laptop") {
            setValueG([])

        }


    }
    const handleSelectA = (e) => {
        setSelectedE(e.purchasingPrice)
        setSelectedP(e.price)
        setSelectedI(e.image)
        setSelectedB(e.description)
        setSelectedN(e.name)


    }

    const handleSelectM = (e) => {
        setValueM(e)


    }

    return (
        <div>
<Container>
    <Row>
        <Col>
            <Dropdown>
                <Dropdown.Toggle variant="Info" id="dropdown-basic">
                    Team
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {teams.map((team, index) =>
                        <Dropdown.Item
                            key={index} onSelect={handleSelect} eventKey={team}>{team}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
        </Col>
        <Col>
            <Dropdown>
                <Dropdown.Toggle variant="Info" id="dropdown-basic">
                   Mitarbeiter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {value.map((team, index) =>
                        <Dropdown.Item
                            key={index} onSelect={handleSelectM} eventKey={team}>{team}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
        </Col>
    </Row>
</Container>
            <br/>

            Team: {valueT}
            <br/>
            {valueM}
            <br/>
            <br/>
            <br/>
            <Container>
                <Row>
                    <Col>Kategorie</Col>
                    <Col>Gerät</Col>
                    <Col>Gerätedetails</Col>
                </Row>
                <Row>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="Info" id="dropdown-basic">
                                Kategorie
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {kategorie.map((team, index) =>
                                    <Dropdown.Item
                                        key={index} onSelect={handleSelectG} eventKey={team}>{team}</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        {valueG.map((valueGM, idx) =>
                            <ListGroup key={idx}>
                                <ListGroupItem onClick={()=>handleSelectA(valueGM)} >
                                    {valueGM.name}
                                </ListGroupItem>
                            </ListGroup>
                        )}

                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top"
                                      src={selectedI}/>
                            <Card.Body>
                                <Card.Title>{selectedN}</Card.Title>
                                <Card.Text>
                                    Einkaufspreis:
                                    <br/>
                                    {selectedE}
                                    <hr/>
                                    Verkaufspreis:
                                    <br/>
                                    {selectedP}
                                    <hr/>
                                    Beschreibung:
                                    <br/>
                                    {selectedB}

                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}