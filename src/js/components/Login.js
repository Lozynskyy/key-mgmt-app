import React from "react";
import {reduxForm,Field} from "redux-form";

const renderFields=({ input, label, type,focus }) => (
    <input className="vvp-form-signin__input form-control" {...input} placeholder={label} type={type} required autoFocus={focus}/>
);
class Login extends React.Component{

    render(){

        return (
            <form className="vvp-form-signin" onSubmit={this.props.handleSubmit}>
                <h1 className="vvp-form-signin__title h3 mb-3 font-weight-normal">Please sign in</h1>

                <Field name="_username" component={renderFields} label="Username" type="text" focus={true}/>

                <Field name="_password" component={renderFields} label="Password" type="password"/>

                <button className="vvp-form-signin__button btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        );
    }
}

export default reduxForm({
    form: "Login_User"
})(Login);