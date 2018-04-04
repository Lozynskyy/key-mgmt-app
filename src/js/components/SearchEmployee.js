import React from "react";
import {reduxForm,Field} from "redux-form";
import {max_length, required} from "../validation/user";
import {renderSearchField} from "./renderInputs";
import {Button, Navbar, FormGroup} from "react-bootstrap";

class SearchEmployee extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <Field name="toFind" type="text"
                                component={renderSearchField} label="Find by any parameter"
                                validate={[required, max_length]}/>
                        </FormGroup>
                        <Button type="submit" disabled={this.props.pristine || this.props.submitting}><i className="glyphicon glyphicon-search" /></Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </form>
        );
    }
}

export default reduxForm({
    form:"SearchEmployee"
})(SearchEmployee);