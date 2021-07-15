import {Jumbotron} from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function JumbotronComponent(){


    return(

            <div>
                <Jumbotron>
                    <h1>Jumbotron</h1>
                    <p>
                       Jumbotron ist eignetlich ein Kasten der etwas hervorhebt
                        Er ist grau und abgerundet
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
        </div>

    )
}