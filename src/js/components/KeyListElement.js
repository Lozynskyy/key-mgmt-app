import React from "react";
import {Button} from "react-bootstrap";

export default class KeyListElement extends React.Component{

    render(){
        const key={
            id:this.props.data.rkey.id,
            description:this.props.data.description
        };
        return(
            <tr>
                <td className="id-column">#{this.props.data.rkey.id}</td>
                <td>{this.props.data.rkey.tag}</td>
                <td>{this.props.data.description}</td>
                <td className="actions-column">
                    <Button type="button" onClick={this.props.deleteKey.bind(this,key.id)} bsSize="small" bsStyle="danger">Delete</Button>
                    <Button type="button" bsSize="small" bsStyle="warning" onClick={this.props.updateKey.bind(this, key)}>Update</Button>
                </td>
            </tr>
        );
    }
}