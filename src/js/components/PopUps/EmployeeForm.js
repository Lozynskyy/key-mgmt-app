import React from "react";
import { Field, reduxForm } from "redux-form";
import {Button,Alert} from "react-bootstrap";

const required = value => value ? undefined : "Required";
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const max_length = maxLength(30);
const number = value => value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
const minAge = minValue(18);
const tooOld = value =>
    value && value > 80 ? "You might be too old for this" : undefined;

const renderField = ({ input, label, type,data,changeData, meta: { touched, error, warning } }) => (
    <div  className="vvp-input">
        <label>{label}</label>
        <div>
            <input className="form-control" {...input} placeholder={label} type={type} value={data||""} onChange={changeData}/>
            {touched && ((error && <Alert bsStyle="danger" className="vvp-input__error-msg">{error}</Alert>) || (warning && <Alert bsStyle="warning" className="vvp-input__warning-msg">{warning}</Alert>))}
        </div>
    </div>
);


class EmployeeForm extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            surname:"",
            age:null
        };
        this.changeName=this.changeName.bind(this);
        this.changeAge=this.changeAge.bind(this);
        this.changeSurname=this.changeSurname.bind(this);
    }
    componentDidMount(){
        if(this.props.employee){
            this.setState({
                name:this.props.employee.name,
                surname:this.props.employee.surname,
                age:this.props.employee.age
            });
        }
    }
    changeName(e){
        this.setState({name:e.target.value});
    }
    changeSurname(e){
        this.setState({surname:e.target.value});
    }
    changeAge(e){
        this.setState({age:e.target.value});
    }
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>

                <Field name="name" type="text"
                    component={renderField} label="Name"
                    data={this.state.name}
                    changeData={this.changeName}
                    validate={[ required, max_length ]}
                />
                <Field name="surname" type="text"
                    component={renderField} label="Surname"
                    data={this.state.surname}
                    changeData={this.changeSurname}
                    validate={[required,max_length]}
                />
                <Field name="age" type="number"
                    component={renderField} label="Age"
                    data={this.state.age}
                    changeData={this.changeAge}
                    validate={[ required, number,tooOld, minAge ]}

                />
                <div>
                    <Button bsStyle="success" bsSize="small" type="submit" disabled={this.props.submitting}>Submit</Button>
                    <Button bsSize="small" type="button" disabled={this.props.pristine || this.props.submitting} onClick={()=>this.setState({name:"",surname:"",age:null})}>Clear Values</Button>
                </div>
            </form>

        );
    }
}
export default reduxForm({
    form: "Add_employee"
})(EmployeeForm);