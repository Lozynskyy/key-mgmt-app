import React from "react";
import {reduxForm,Field} from "redux-form";
import {max_length, required} from "../validation/user";
import {renderSearchField} from "./renderInputs";
import {Button} from "react-bootstrap";

class SearchEmployee extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <div className="row">
                    <div className="searchingInputsWrap">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">

                            <Field name="toFind" type="text"
                                component={renderSearchField} label="Find by any parameter"
                                validate={[required, max_length]}
                            />
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <Button bsStyle="success" bsSize="small" type="submit" disabled={this.props.pristine || this.props.submitting}>Find</Button>
                        </div>
                    </div>
                </div>

            </form>
        );
    }
}

export default reduxForm({
    form:"SearchEmployee"
})(SearchEmployee);