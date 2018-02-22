import React from "react";
import {connect} from "react-redux";
import {postUserData} from "../actions/login";

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
            token:""
        };
        this.signIn=this.signIn.bind(this);
        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
    }
    signIn(e) {
        e.preventDefault();
        if(this.state.password && this.state.username) {
            this.props.signin(this.state.username,this.state.password);
        }
        else{
            alert("Fill all inputs");
        }

    }
    handleUsername(event){
        this.setState({
            username:event.target.value
        });
    }
    handlePassword(event){
        this.setState({
            password:event.target.value
        });
    }

    render(){

        return (
            <form className="vvp-form-signin">
                <h1 className="vvp-form-signin__title h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="vvp-form-signin__label sr-only">Email address</label>
                <input  id="inputUsername" className="vvp-form-signin__input form-control" value={this.state.username} onChange={this.handleUsername} placeholder="Username" required autoFocus/>
                <label htmlFor="inputPassword" className="vvp-form-signin__label sr-only">Password</label>
                <input type="password" id="inputPassword" className="vvp-form-signin__input form-control" value={this.state.password} onChange={this.handlePassword} placeholder="Password" required/>
                <button className="vvp-form-signin__button btn btn-lg btn-primary btn-block"   onClick={this.signIn}>Sign in</button>
            </form>

        );
    }
}


function mapStateToProps(state){
    return {
        token:state.signin
    };
}
function mapDispatchToProps(dispatch){
    return {
        signin(username,password){
            dispatch(postUserData(username,password));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);