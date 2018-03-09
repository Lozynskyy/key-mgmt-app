import React from "react";
import { Button, Modal } from "react-bootstrap";
import {connect} from "react-redux";
import {getLockKeys} from "../actions/getLockKeys";

class LockPage extends React.Component{
    constructor(){
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deleteKey = this.deleteKey.bind(this);
        
        this.state = {
            show: false,
            id: ""
        };
    }
    
    handleClose() {
        this.setState({ show: false });
    }

    handleShow(id) {
        this.setState({ show: true, id });
    }
    
    deleteKey(id) {
        this.setState({
            /*data: this.state.data.filter(item => item.id !== id),*/
            show: false
        });
        console.log(id);
    }

    componentDidMount(){
        console.log(this.props.match);
        this.props.fetchLockKeys(this.props.match.params.id);
    }

    render(){
        
        return (
            <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tag</th>
                                <th>Description</th>
                                <th>Employee</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.keys.map((key) => {
                                return <tr key={key.id}><td>{key.id}</td><td>{key.tag}</td><td>{key.description}</td><td>{key.employee}</td>
                                    <td>
                                        <Button bsStyle="danger" key={key.id} onClick={() => this.handleShow(key.id)}>Delete</Button>
                                        <Button bsStyle="warning">Update</Button>
                                    </td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm the action</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to delete the key?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="success" onClick={()=>{this.deleteKey(this.state.id);}}>Yes</Button>
                            <Button bsStyle="danger" onClick={this.handleClose}>No</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        keys:state.lockKeys.data
    };
}
function mapDispatchToProps(dispatch) {
    return{
        fetchLockKeys(id){
            dispatch(getLockKeys(id));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(LockPage);
