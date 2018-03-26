import React from "react";
import { Field, reduxForm } from "redux-form";
import {Button} from "react-bootstrap";

const required = value => value ? undefined : "Required";
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const max_length = maxLength(25);



const renderField = (field) => (
    <div>
        <label>{field.label}</label>
        <div>
            <input className="form-control" {...field.input} placeholder={field.label} type={field.type} value={field.defValue} onChange={(e) => {
                field.onChangeAction(e.target.value);
                field.input.onChange(e);
            }} />
            {field.touched && ((field.error && <span className="vvp-input__error-msg">{field.error}</span>) || (field.warning && <span className="vvp-input__warning-msg">{field.warning}</span>))}
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
        this.updateValue=this.updateValue.bind(this);
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

    updateValue(e) {
        if( this.props.onChangeAction!==undefined )
            this.props.onChangeAction(e.target.value);

        this.props.input.onChange(e);
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field name="lock_name" type="text"
                    defValue={this.props.lock.lock_name}
                    // changeValue={this.changeName}
                       onChangeAction={this.props.onChangeAction}
                    component={renderField} label="Name"
                    validate={[ required, max_length ]}
                />
                <Field name="lock_pass" type="text"
                    defValue={this.props.lock.lock_pass}
                    //changeValue={this.changePass}
                       onChangeAction={this.props.onChangeAction}
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