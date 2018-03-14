import React from "react";
import { Field, reduxForm } from "redux-form";
import {Button} from "react-bootstrap";

const required = value => value ? undefined : "Required";
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const max_length = maxLength(25);



const renderField = ({ input, label, defValue, changeValue, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input className="form-control" {...input} placeholder={label} type={type} value={defValue} onChange={changeValue}/>
            {touched && ((error && <span className="vvp-input__error-msg">{error}</span>) || (warning && <span className="vvp-input__warning-msg">{warning}</span>))}
        </div>
    </div>
);

class LockForm extends React.Component{
    constructor(){
        super();
        this.state={
            lock_name: "",
            lock_pass: ""
        };
        this.changeName=this.changeName.bind(this);
        this.changePass=this.changePass.bind(this);
    }
    componentDidMount(){
        if(this.props.lock){
            this.setState({
                lock_name:this.props.lock.lock_name,
                lock_pass:this.props.lock.lock_pass,
            });
        }
    }
    changeName(e){
        this.setState({lock_name:e.target.value});
    }
    changePass(e){
        this.setState({lock_pass:e.target.value});
    }
    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field name="lock_name" type="text"
                    defValue={this.state.lock_name}
                    changeValue={this.changeName}
                    component={renderField} label="Name"
                    validate={[ required, max_length ]}
                />
                <Field name="lock_pass" type="text"
                    defValue={this.state.lock_pass}
                    changeValue={this.changePass}
                    component={renderField} label="Pass"
                    validate={[required,max_length]}
                />

                <div>
                    <Button bsStyle="success" bsSize="small" type="submit" disabled={this.props.submitting}>Submit</Button>
                    <Button bsSize="small" type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>Clear Values</Button>
                </div>
            </form>
        );}
}
export default reduxForm({
    form: "Add_lock"
})(LockForm);