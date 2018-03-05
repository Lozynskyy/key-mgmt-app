import React from "react";
import {Button} from "react-bootstrap";


class LocksListElement extends React.Component{
    render()
    {
        const lock=this.props.lock;
        return(
            <tr key={lock.id}>
                <td>#{lock.id}</td>
                <td>{lock.lock_name}</td>
                <td>
                    <Button type="button" onClick={this.props.deleteLock.bind(this,lock.id)} bsSize="small" bsStyle="danger">Delete</Button>
                    <Button type="button" bsSize="small" bsStyle="warning">Update</Button>
                </td>
            </tr>
        );
    }
}

export default LocksListElement;