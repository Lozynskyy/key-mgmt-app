import React from "react";
import Login from "./Login";
import RegisterForm from "./RegisterForm";
import {Modal,Button} from "react-bootstrap";
import {connect} from "react-redux";
import {createUser} from "../actions/user";
import {login} from "../actions/user";


class StartPage extends React.Component{
    constructor(){
        super();
        this.state={
            showModal:false
        };
        this.createUser=this.createUser.bind(this);
        this.loginUser=this.loginUser.bind(this);
    }
    loginUser(data){
        this.props.login(data);
    }
    createUser(values) {
        if (values.password === values.password2) {
            this.setState({showModal: false});
            const data = {_username: values.username, _password: values.password};
            this.props.register(data);
        }
        else {
            alert("passwords don`t match");
        }
    }
    render(){
        return(
            <div>
                <Login onSubmit={this.loginUser}/>
                <div className="vvp-register">
                    <button className="vvp-register__button btn btn-block" onClick={()=>this.setState({showModal:true})}>New User</button>
                </div>

                <Modal show={this.state.showModal}>
                    <Modal.Header>
                        <Modal.Title>Create new user</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <RegisterForm onSubmit={this.createUser}/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="button" bsSize="small" onClick={()=>this.setState({showModal:false})}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        token:state.token
    };
}
function mapDispatchToProps(dispatch){
    return {
        login(data){
            dispatch(login(data));
        },
        register(data){
            dispatch(createUser(data));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(StartPage);