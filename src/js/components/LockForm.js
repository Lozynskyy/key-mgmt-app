import React from "react";
import { Field, reduxForm } from "redux-form";
import {Button} from "react-bootstrap";
import {required,max_length} from "../validation/lock";
import {renderField} from "./renderInputs";

const LockForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="lock_name" type="text"
                component={renderField} label="Name"
                validate={[ required, max_length ]}
            />
            <Field name="lock_pass" type="text"
                component={renderField} label="Pass"
                validate={[required,max_length]}
            />

            <div>
                <Button bsStyle="success" bsSize="small" type="submit" disabled={submitting}>Submit</Button>
                <Button bsSize="small" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
            </div>
        </form>
    );
};
export default reduxForm({
    form: "Add_lock"
})(LockForm);