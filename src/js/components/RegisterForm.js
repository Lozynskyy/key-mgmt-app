import React from "react";
import {reduxForm,Field} from "redux-form";
import {Button} from "react-bootstrap";

const required = value => value ? undefined : "Required";
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const max_length = maxLength(20);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div  className="vvp-input">
        <label>{label}</label>
        <div>
            <input className="form-control" {...input} placeholder={label} type={type}/>
            {touched && ((error && <span className="vvp-input__error-msg">{error}</span>) || (warning && <span className="vvp-input__warning-msg">{warning}</span>))}
        </div>
    </div>
);


class RegisterForm extends React.Component{

    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>

                <Field name="username" type="text"
                    component={renderField} label="Username"
                    validate={[ required, max_length ]}
                />
                <Field name="password" type="password"
                    component={renderField} label="Password"
                    validate={[required,max_length]}
                />
                <Field name="password2" type="password"
                    component={renderField} label="Password"
                    validate={[required,max_length]}
                />
                <div>
                    <Button bsStyle="success" bsSize="small" type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</Button>
                    <Button bsSize="small" type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>Clear Values</Button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: "Create_User"
})(RegisterForm);