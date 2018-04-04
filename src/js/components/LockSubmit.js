import React from "react";
import LockForm from "./LockForm";
import {Button,Modal,Navbar} from "react-bootstrap";
import {connect} from "react-redux";
import {createLock} from "../actions/lock";

class AddLock extends React.Component {

    constructor(){
        super();
        this.state={
            isShowModal:false
        };
        this.submit=this.submit.bind(this);
    }
    submit(values){
        this.props.createNewLock(values);
        this.setState({
            isShowModal:false
        });
    }
    render() {
        return (
            <Navbar.Header>
                <Button bsStyle="primary" onClick={()=>this.setState({isShowModal:true})}><i className="glyphicon glyphicon-plus" /> Add Lock</Button>
                <Modal show={this.state.isShowModal}>
                    <Modal.Header>
                        <Modal.Title>Create new lock</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <LockForm onSubmit={this.submit} />

                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="button" bsSize="large" onClick={()=>this.setState({isShowModal:false})}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Navbar.Header>
        );
    }
}

function mapStateToProps(){
    return {

    };
}

function mapDispatchToProps(dispatch){
    return {
        createNewLock(values){
            dispatch(createLock(values));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddLock);