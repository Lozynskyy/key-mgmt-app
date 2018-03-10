import React from "react";
import NewKey from "./NewKey";
import KeyListElement from "./KeyListElement";
import {connect} from "react-redux";
import {getEmployeeKeys} from "../actions/getEmployeeKeys";
import {Button, Modal} from "react-bootstrap";
import {deleteEmployeeKey} from "../actions/deleteEmployeeKey";
import {attachKeyToEmployee} from "../actions/attachKeyToEmployee";

class EmployeePage extends React.Component{
    constructor(){
        super();
        this.showEmployeeName=this.showEmployeeName.bind(this);
        this.showDeleteKeyModal=this.showDeleteKeyModal.bind(this);
        this.removeEmplKey=this.removeEmplKey.bind(this);
        this.attachKey=this.attachKey.bind(this);
        this.state={
            showModalDelKey:false,
            showModalUpdateKey:false,
            keyID:null
        };
    }
    componentDidMount(){
        this.props.fetchEmployeeKeys(this.props.match.params.id);
        /*   const socket = new WebSocket("wss://api-test.opendoors.od.ua:1013/keys");
       socket.onopen = function() {
            alert("Соединение установлено.");
        };

        socket.onclose = function(event) {
            if (event.wasClean) {
                alert('Соединение закрыто чисто');
            } else {
                alert('Обрыв соединения'); // например, "убит" процесс сервера
            }
            alert('Код: ' + event.code + ' причина: ' + event.reason);
        };

        socket.onmessage = function(event) {
            alert("Получены данные " + event.data);
        };

        socket.onerror = function(error) {
            alert("Ошибка " + error.message);
        };*/

    }
    showEmployeeName(){
        //TODO:if there are no keys, employee name doesn't show
        if(this.props.keys && this.props.keys.length && this.props.keys[0].employee.name){
            return (this.props.keys[0].employee.name+" "+this.props.keys[0].employee.surname);
        }
    }
    showDeleteKeyModal(id){
        this.setState({
            showModalDelKey:true,
            keyID:id
        });
    }
    removeEmplKey(){
        this.setState({
            showModalDelKey:false
        });
        //TODO:doesn't work. keyID is not id of key or relationship. Backend for any of the IDs responds with a message: This id doesn't exist
        this.props.delEmplKey(this.props.match.params.id,this.state.keyID);
    }
    attachKey(data){
        if(data.description && data.description.length<=50){
            this.props.addKeyToEmpl(this.props.match.params.id,data);
        }
        else if(data.description && data.description.length>50){
            alert("description should be shorter");
        }
        else {
            alert("enter key description");
        }
    }
    render(){
        return(
            <div>
                <h3>{this.showEmployeeName()}</h3>
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th colSpan="4">Keys</th>
                        </tr>
                        <tr>
                            <th>ID of connection,not key ID</th>
                            <th>Tag</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.keys.map((key)=>{
                            return <KeyListElement key={key.id} id={key.id} tag="Not getting tag" description={key.description} deleteKey={this.showDeleteKeyModal}/>;
                        })}
                    </tbody>
                </table>
                <div className="vvp-new-keys__wrap">
                    <div className="row vvp-grid">
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10">
                            <NewKey id={10} tag="6661" addKey={this.attachKey}/>
                        </div>
                    </div>
                </div>

                <Modal show={this.state.showModalDelKey}>
                    <Modal.Header>
                        <Modal.Title>Confirm action</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Do you really want to delete this key?</Modal.Body>

                    <Modal.Footer>
                        <Button onClick={()=>{this.setState({showModalDelKey:false});}}>Close</Button>
                        <Button onClick={this.removeEmplKey} bsStyle="danger">Delete</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalUpdateKey}>
                    <Modal.Header>
                        <Modal.Title>Update key</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="button" bsSize="large" onClick={()=>this.setState({showModalUpdateKey:false})}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        keys:state.employeeKeys.data
    };
}
function mapDispatchToProps(dispatch) {
    return{
        fetchEmployeeKeys(id){
            dispatch(getEmployeeKeys(id));
        },
        delEmplKey(idEmpl,idKey){
            dispatch(deleteEmployeeKey(idEmpl,idKey));
        },
        addKeyToEmpl(id,data){
            dispatch(attachKeyToEmployee(id,data));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(EmployeePage);