import React from "react";
import {Button} from "react-bootstrap";

export default class KeyListElement extends React.Component{

    render(){
        return(
            <tr>
                <td>#{this.props.id}</td>
                <td>{this.props.tag}</td>
                <td>{this.props.description}</td>
                <td><Button type="button" onClick={this.props.deleteKey.bind(this,this.props.id)} bsSize="small" bsStyle="danger">Delete</Button>
                    <Button type="button" bsSize="small" bsStyle="warning">Update</Button></td>
            </tr>
        );
    }
}