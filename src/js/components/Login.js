import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import {getUserData} from '../actions/login';


class Login extends React.Component{
	constructor(){
		super();
		this.state={
			username:'',
			password:'',
			token:''
		};
		this.logIn=this.logIn.bind(this);
		this.handleUsername=this.handleUsername.bind(this);
		this.handlePassword=this.handlePassword.bind(this);
	}
	logIn(e){
		e.preventDefault();
		if(this.state.password && this.state.username){
			this.props.loginUser();
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
				<button className="btn btn-lg btn-primary btn-block"  type='submit' onClick={this.logIn}>Sign in</button>
			</form>

		);
	}
}

function mapStateToProps(state){
	return {
		token:state.loginUser
	};
}
function mapDispatchToProps(dispatch){
	return {
		loginUser(){
			dispatch(getUserData());
		}
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);