import React from "react";
import { Field, reduxForm } from "redux-form";
import {Button} from "react-bootstrap";

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
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const EmployeeForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="name" type="text"
                component={renderField} label="Username"
                validate={[ required, max_length ]}
            />
            <Field name="surname" type="text"
                component={renderField} label="Email"
                validate={[required,max_length]}
            />
            <Field name="age" type="number"
                component={renderField} label="Age"
                validate={[ required, number, minAge ]}
                warn={tooOld}
            />
            <div>
                <Button bsStyle="success" bsSize="small" type="submit" disabled={submitting}>Submit</Button>
                <Button bsSize="small" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
            </div>
        </form>
    );
};
export default reduxForm({
    form: "Add_employee"
})(EmployeeForm);