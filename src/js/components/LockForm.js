import React from "react";
import { Field, reduxForm } from "redux-form";
import {Button} from "react-bootstrap";
import {required,max_length} from "../validation/lock";
import {renderField} from "./renderInputs";

class LockForm extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field name="lock_name" type="text"
                    component={renderField} label="Name"
                    validate={[ required, max_length ]}
                />
                <Field name="lock_pass" type="text"
                    component={renderField} label="Pass"
                    validate={[required,max_length]}
                />

                <div>
                    <Button bsStyle="success" bsSize="small" type="submit" disabled={this.props.submitting}>Submit</Button>
                    <Button bsSize="small" type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>Undo Changes</Button>
                </div>
            </form>
        );}
}
export default reduxForm({
    form: "AddUpdateLock"
})(LockForm);