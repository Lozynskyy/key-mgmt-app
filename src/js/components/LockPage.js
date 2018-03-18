import React from "react";
import {connect} from "react-redux";
import {getLockKeys} from "../actions/getLockKeys";
import { Button, Modal } from "react-bootstrap";
import {deleteLockKey} from "../actions/deleteLockKey";

class LockPage extends React.Component{
    constructor(){
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.removeKey = this.removeKey.bind(this);
        
        this.state = {
            show: false,
            id: ""
        };
    }
    
    handleClose() {
        this.setState({ show: false });
    }

    handleShow(data) {
        console.log(data.key.id);
        this.setState({ show: true, id: data.key.id });
    }
    
    removeKey() {
        this.setState({ show: false });
        this.props.deleteLockKey(this.props.match.params.id, this.state.id);
    }

    componentDidMount(){
        this.props.fetchLockKeys(this.props.match.params.id);
    }

    render(){

        return (
            <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th className="id-column">ID</th>
                                <th>Tag</th>
                                <th>Description</th>
                                <th>Employee</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.keys.map((item) => {
                                return <tr key={item.id}><td>#{item.key.id}</td><td>{item.key.tag}</td><td>{item.key.description}</td><td>{item.key.employee}</td>
                                    <td className="action-column">
                                        <Button bsStyle="danger" key={item.id} onClick={() => this.handleShow(item)}>Delete</Button>
                                    </td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm action</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Do you really want to delete this key?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                            <Button bsStyle="danger" onClick={this.removeKey}>Delete</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        keys:state.lockKeys.keys
    };
}
function mapDispatchToProps(dispatch) {
    return{
        deleteLockKey(id, idKey){
            dispatch(deleteLockKey(id, idKey));
        },
        fetchLockKeys(id){
            dispatch(getLockKeys(id));
        },
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(LockPage);