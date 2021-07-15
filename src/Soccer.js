import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";

export default function Soccer(){

    const [weapons, setWeapons] = useState([])

    fetch("https://jgalat.github.io/ds-weapons-api/weapon/2/name")
        .then(response => response.json())
        .then(data => setWeapons(data))
        .catch(error => console.log('error', error));
    return(
        <div>
            hallo
            <Form>
                {weapons.map((wep, idx) =>
                    <ul key={idx}>{wep.name}</ul>
                )
                }
            </Form>
        </div>
    )
}