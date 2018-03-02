import React from "react";
import {Button} from "react-bootstrap";

export default class KeyListElement extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <tr>
                <td>#{this.props.id}</td>
                <td>{this.props.tag}</td>
                <td>{this.props.description}</td>
                <td><Button type="button" bsSize="small" bsStyle="danger">Delete</Button></td>
            </tr>
        );
    }
}