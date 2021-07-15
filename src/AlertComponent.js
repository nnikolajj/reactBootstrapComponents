import {useState} from "react";
import Button from "react-bootstrap/Button";
import {render} from "react-dom";

export default function AlertComponent() {
    const [show, setShow] = useState(true);

    return (
        <>
            <AlertComponent show={show} variant="success">
                <AlertComponent.Heading>Afghjk</AlertComponent.Heading>
                <p>
                    hallo
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close me y'axcll!
                    </Button>
                </div>
            </AlertComponent>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}

