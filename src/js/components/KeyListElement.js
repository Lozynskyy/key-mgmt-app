import React from "react";
import {Button} from "react-bootstrap";

export default class KeyListElement extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <tr>
                <td>#1</td>
                <td>tag</td>
                <td>desc</td>
                <td><Button type="button" bsSize="small" bsStyle="danger">Delete</Button></td>
            </tr>
        );
    }
}