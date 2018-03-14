import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


class LocksListElement extends React.Component{
    render()
    {
        const lock=this.props.lock;
        return(
            <tr key={lock.id}>
                <td><Link to={"/lock/"+lock.id}>#{lock.id}</Link></td>
                <td><Link to={"/lock/"+lock.id}>{lock.lock_name}</Link></td>
                <td>
                    <Button type="button" onClick={this.props.deleteLock.bind(this,lock.id)} bsSize="small" bsStyle="danger">Delete</Button>
                    <Button type="button" onClick={this.props.updateLock.bind(this,lock.id)} bsSize="small" bsStyle="warning">Update</Button>
                </td>
            </tr>
        );
    }
}

export default LocksListElement;