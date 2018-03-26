import React from "react";
import { Field, reduxForm } from "redux-form";
import {Alert,Button} from "react-bootstrap";
const required = value => value ? undefined : "Required";
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const max_length = maxLength(30);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div  className="vvp-input">
        <label>{label}</label>
        <div>
            <input className="form-control" {...input} placeholder={label} type={type}/>
            {touched && ((error && <Alert bsStyle="danger" className="vvp-input__error-msg">{error}</Alert>) || (warning && <Alert bsStyle="warning" className="vvp-input__warning-msg">{warning}</Alert>))}
        </div>
    </div>
);

class KeyForm extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <Field name="description" type="text"
                    component={renderField}
                    validate={[ required, max_length ]}
                />
                <div>
                    <Button bsStyle="success" bsSize="small" type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</Button>
                    <Button bsSize="small" type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
                        Undo Changes
                    </Button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form:"UpdateKey"
})(KeyForm);