import React from "react";
import {Button,Modal,FormGroup,FormControl,ControlLabel} from "react-bootstrap";
import {connect} from "react-redux";
import {createEmployee} from "../actions/createEmployee";


class AddEmployee extends React.Component{
    constructor(){
        super();
        this.state={
            isShownModal:false,
            age:0,
            surname:"",
            name:"",
            disableSubmit:true
        };
        this.ageValidation=this.ageValidation.bind(this);
        this.surnameValidation=this.surnameValidation.bind(this);
        this.nameValidation=this.nameValidation.bind(this);
        this.validateAll=this.validateAll.bind(this);

        this.handleSurname=this.handleSurname.bind(this);
        this.handleName=this.handleName.bind(this);
        this.handleAge=this.handleAge.bind(this);

        this.submitForm=this.submitForm.bind(this);
        this.closeForm=this.closeForm.bind(this);
    }

    handleSurname(e){
        this.setState({ surname: e.target.value });
    }

    handleName(e){
        this.setState({ name: e.target.value });
    }

    handleAge(e){
        if(!isNaN(e.target.value)) {
            let age = +e.target.value;
            this.setState({age: age});
        }
    }


    surnameValidation(){
        let surnameLength=this.state.surname.length;
        if(surnameLength>=2 && surnameLength <=50) return "success";
        else if(surnameLength>=2 && surnameLength <=70) return "warning";
        else if(surnameLength>70) return "error";
        return null;
    }

    nameValidation(){
        let nameLength=this.state.name.length;
        if(nameLength>=2 && nameLength <=50) return "success";
        else if(nameLength>=2 && nameLength <=70) return "warning";
        else if(nameLength>70) return "error";
        return null;
    }
    ageValidation(){
        if(this.state.age===0 || this.state.age<0 || this.state.age>120) return "error";
        else if(Number.isInteger(this.state.age)) return "success";
        return null;
    }
    validateAll(){
        const name=this.nameValidation();
        const surname=this.surnameValidation();
        const age=this.ageValidation();
        if(name==="success" && name!==null && surname==="success" && surname!==null && age==="success" && age!==null){
            this.setState({disableSubmit:false});
        }

    }


    submitForm(){
        const token=localStorage.getItem('token');
        if(this.state.name.length!==0 && this.state.surname.length!==0 && this.state.age>0 && this.state.age<120) {
            this.props.createNewEmployee(token, this.state.surname, this.state.name, this.state.age);
            this.setState({
                age: 0,
                surname: "",
                name: "",
                isShownModal: false
            });
        }
    }

    closeForm(){
        this.setState({
            age: 0,
            surname: "",
            name: "",
            isShownModal: false
        });
    }

    render(){
        //TODO: Problems with disabled submit button. When button becomes enabled data don't post
        /* if(this.state.isShownModal){
            {this.validateAll()}
        }*/
        return(
            <div>
                <Button bsStyle="primary" bsSize="small" onClick={()=>this.setState({isShownModal:true})}>Add Employee</Button>
                <Modal show={this.state.isShownModal}>
                    <Modal.Header>
                        <Modal.Title>Create new employee</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.surnameValidation()}>
                                <ControlLabel>Surname:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.surname}
                                    placeholder="Enter Surname"
                                    onChange={this.handleSurname}
                                />
                                <FormControl.Feedback />
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.nameValidation()}>
                                <ControlLabel>Name:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.name}
                                    placeholder="Enter Name"
                                    onChange={this.handleName}
                                />
                                <FormControl.Feedback />
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.ageValidation()}>
                                <ControlLabel>Age:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.age}
                                    placeholder="Enter age"
                                    onChange={this.handleAge}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeForm}>Close</Button>
                        <Button bsStyle="primary"  id="submitBtn" onClick={this.submitForm}>Create new employee</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        response:state.createNewEmployee
    };
}

function mapDispatchToProps(dispatch){
    return {
        createNewEmployee(token, surname,name,age){
            dispatch(createEmployee(token,surname,name,age));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(AddEmployee);