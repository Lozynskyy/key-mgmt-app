import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import {getUserData} from '../actions/login';


class Login extends React.Component{
	constructor(){
		super();
		this.state={
			username:'',
			password:''
		};
		this.logIn=this.logIn.bind(this);
		this.handleUsername=this.handleUsername.bind(this);
		this.handlePassword=this.handlePassword.bind(this);
	}
	logIn(e){
		e.preventDefault();
		if(this.state.password && this.state.username){
			this.props.loginUser();


                let myHeaders = new Headers();

                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6W3siX19pbml0aWFsaXplcl9fIjp7fSwiX19jbG9uZXJfXyI6e30sIl9faXNJbml0aWFsaXplZF9fIjpmYWxzZX1dLCJ1c2VybmFtZSI6IlBhc2hhIiwiaWF0IjoxNTE4Nzc5MTAzLCJleHAiOjE1MTg3ODI3MDN9.jfGqBzeIh946Y4wxSGoGFxwjaH6gv2qdIOZ5VZysGk7M4lHwx9-Mg-gaWzLgjmbnQKoiiwS-d0ietao3kAMege8iuW3KGIY4xEVGDOghRHqg0-sySj0Do2GH_MFKjFhD84S_qbSh9v-H0AafEMYcqF-7pcKiszeAKP1bIzL_C5BwgCjcgUsaTTVBTPA1G6hfQET4_v53WTi7yMpXryZw1na8wnStxmX9_kHbQNOnp6JtHSK2dclkXgY2u7TUnfA2boHiUw07FRcHM1MkwbiGlax6V8hxWG7-WPf_76FP8Aw8CF-9-hkX659YBDJPW6z9UZu99RfKOZijF-UJQk5ImSP__M2eMhHqopMNz-FDrjy0kuGVrHXXQn8HztsyeTEQkTRsWXocJxzQrzLWmxb519n-HxzWvrwXv_VxIY7BCYqzYILSWYIA9balJf4Y7wQqONYByWNusK1g--hzxZt2vjc20BF2GYEK18vH_uYcwznTFjz-k4lh97DX-7OCWE6Ciq7EyAUmRfrJkiinKAtXXmD1IRdatGaStRfzV5q7AHAYsBf3h-e9aLSElTqbhuxfCv4qlfgvnXCdk6OnhC4-YQKl48amch2KxfYyLlMBozlFTVYoPcdquP_v6paCB_1aI9s6mBm4CHhglO6PyCbaofcq49JJl7yIQQL2LehuE1I");
               let myInit = {
                    method: 'GET',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default'
                };
                let myRequest = new Request('http://228df894.ngrok.io/web/app_dev.php/employees', myInit);

                fetch(myRequest).then((response) => {response.json()}).then((data) => {console.log(data)})


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
			//dispatch(getUserData());
		}
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);