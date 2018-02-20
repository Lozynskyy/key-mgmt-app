import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import {postUserData} from '../actions/login';
import { BrowserRouter, Route, Link, Switch,Redirect } from 'react-router-dom';
import store from '../store/configurateStore';





class Login extends React.Component{
	constructor(){
		super();
		this.state={
			username:'',
			password:'',
			token:''
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
            alert('Fill all inputs');
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
			<form className="form-signin">
				<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
				<label htmlFor="inputEmail" className="sr-only">Email address</label>
				<input  id="inputUsername" className="form-control" value={this.state.username} onChange={this.handleUsername} placeholder="Username" required autoFocus/>
				<label htmlFor="inputPassword" className="sr-only">Password</label>
				<input type="password" id="inputPassword" className="form-control" value={this.state.password} onChange={this.handlePassword} placeholder="Password" required/>
				<button className="btn btn-lg btn-primary btn-block"   onClick={this.signIn}>Sign in</button>
			</form>

		);
	}
}
(function func1(){
    let myHeaders = new Headers();

    myHeaders.set("Content-Type", "application/json");
    let myInit = {
        method:"POST",
        headers:{
        	Accept:"application/json",
			"Content-Type":"application/json"},
        mode: 'no-cors',
        body:JSON.stringify({"_username":"Pasha1","_password":"123"})

    };


    fetch('https://api-test.opendoors.od.ua:1013/login_check',myInit).then((response) =>{});
})();

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