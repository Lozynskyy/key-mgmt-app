import React from "react";
import EmployeeForm from "./EmployeeForm";
import {Button,Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {createEmployee} from "../actions/createEmployee";

class AddEmployee extends React.Component {

    constructor(){
        super();
        this.state={
            isShowModal:false
        };
        this.submit=this.submit.bind(this);
    }
    submit(values){
        this.props.createNewEmployee(values);
        this.setState({
            isShowModal:false
        });
        //TODO:redraw the table
    }
    render() {
        return (
            <div>
                <Button bsStyle="primary" bsSize="small" onClick={()=>this.setState({isShowModal:true})}>Add Employee</Button>
                <Modal show={this.state.isShowModal}>
                    <Modal.Header>
                        <Modal.Title>Create new employee</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <EmployeeForm onSubmit={this.submit} />

                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="button" bsSize="large" onClick={()=>this.setState({isShowModal:false})}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch){
    return {
        createNewEmployee(values){
            dispatch(createEmployee(values));
        }
    };
}

export default connect(mapDispatchToProps)(AddEmployee);