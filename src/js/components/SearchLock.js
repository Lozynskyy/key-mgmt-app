import React from "react";
import {reduxForm,Field} from "redux-form";
import {max_length, required} from "../validation/user";
import {renderSearchField} from "./renderInputs";
import {Button} from "react-bootstrap";

class SearchLock extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <Field name="toFind" type="text"
                    component={renderSearchField} label="Find by any parameter"
                    validate={[required, max_length]}
                />
                <Button bsStyle="success" bsSize="small" type="submit" disabled={this.props.pristine || this.props.submitting}>Find</Button>
            </form>
        );
    }
}

export default reduxForm({
    form:"SearchLock"
})(SearchLock);