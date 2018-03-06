import React from "react";
import {Button,Modal} from "react-bootstrap";
import EmployeeForm from "./EmployeeForm";
export default class EmployeePopUp extends React.Component{
    constructor(){
        super();
        this.state={
            isShowModal:false
        };
    }
    componentDidMount(){
        this.setState({
            isShowModal:this.props.show
        });
        console.log(this.state.isShowModal)
    }
    render(){
        return(
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
        )
    }
}