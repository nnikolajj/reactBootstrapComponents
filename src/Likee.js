import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";

export default function Likee(){

    function Like(props){
        return{
            props
        }
    }



    return(
        <div>
            <Form>

                <p>Blog Eintrag 1</p>
                <Like onChange={(v) => console.log(v) } checked={false}/>Hlao
            </Form>
        </div>
    )
}