import React from 'react';
import {connect} from 'react-redux';
import Dashboard from "./Dashboard";


class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        };
        this.signIn=this.signIn.bind(this);
        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
    }
    signIn(e){
        e.preventDefault();
        if(this.state.password && this.state.username){

            const path='http://228df894.ngrok.io/web/app_dev.php'+'/login_check';

            let myInit = {
                method: 'POST',
                mode: 'cors',
                cache: 'default' };

            fetch(path, myInit).then((response)=>{response.json()}).then((data)=>{this.setState({
                token:data
            })});
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
        })
    }
    render(){
        return (
            <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input  id="inputUsername" className="form-control" value={this.state.username} onChange={this.handleUsername} placeholder="Username" required autoFocus/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" value={this.state.password} onChange={this.handlePassword} placeholder="Password" required/>
                            <button className="btn btn-lg btn-primary btn-block"  type='submit' onClick={this.signIn}>Sign in</button>
            </form>

        )
    }
}

function mapStateToProps(state){
    return {
        username:state.username,
        password:state.password,
        token:state.token
    };
}
function mapDispatchToProps(dispatch){
    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);