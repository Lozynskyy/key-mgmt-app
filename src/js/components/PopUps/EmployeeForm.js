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

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div  className="vvp-input">
        <label>{label}</label>
        <div>
            <input className="form-control" {...input} placeholder={label} type={type}/>
            {touched && ((error && <Alert bsStyle="danger" className="vvp-input__error-msg">{error}</Alert>) || (warning && <Alert bsStyle="warning" className="vvp-input__warning-msg">{warning}</Alert>))}
        </div>
    </div>
);


class EmployeeForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field name="name" type="text"
                    component={renderField} label="Name"
                    validate={[ required, max_length ]}
                />
                <Field name="surname" type="text"
                    component={renderField} label="Surname"
                    validate={[required,max_length]}
                />
                <Field name="age" type="number"
                    component={renderField} label="Age"
                    validate={[ required, number,tooOld, minAge ]}

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
    form: "CreateUpdateEmployee"
})(EmployeeForm);
