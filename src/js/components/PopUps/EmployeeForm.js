import React from "react";
import { Field, reduxForm } from "redux-form";
import {Button} from "react-bootstrap";
import {required,max_length,number,tooOld,minAge} from "../../validation/employee";
import {renderField} from "../renderInputs";

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
