import React from "react";
import {reduxForm,Field} from "redux-form";
import {Button} from "react-bootstrap";
import {required,max_length} from "../validation/user";
import {renderField} from "./renderInputs";

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