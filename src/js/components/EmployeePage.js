import React from "react";
import NewKey from "./NewKey";
import KeyListElement from "./KeyListElement";
import {connect} from "react-redux";
import {getEmployeeKeys, deleteEmployeeKey, attachKeyToEmployee, updateEmployeeKey} from "../actions/key";
import {Button, Modal} from "react-bootstrap";
import DeleteModal from "./PopUps/DeleteModal";
import {getEmployee} from "../actions/employee";
import {websocketKeyEndpoint} from "../config";
import KeyForm from "./KeyForm";
import {initialize} from "redux-form";

class EmployeePage extends React.Component{
    constructor(){
        super();
        this.showEmployeeName=this.showEmployeeName.bind(this);
        this.showDeleteKeyModal=this.showDeleteKeyModal.bind(this);
        this.removeEmplKey=this.removeEmplKey.bind(this);
        this.attachKey=this.attachKey.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.showNewKey=this.showNewKey.bind(this);
        this.showUpdateKeyModal=this.showUpdateKeyModal.bind(this);
        this.updateKey=this.updateKey.bind(this);
        this.state={
            showModalDelKey:false,
            showModalUpdateKey:false,
            idKeyEmployeeRelationship:null,
            newKey:null
        };
    }
    componentDidMount(){
        this.props.getEmployee(this.props.match.params.id);
        this.props.fetchEmployeeKeys(this.props.match.params.id);
        const socket = new WebSocket(websocketKeyEndpoint);
        socket.onopen = function() {
            console.log("Соединение установлено.");
        };

        socket.onclose = function(event) {
            if (!event.wasClean){
                console.log("Обрыв соединения");
            }
            console.log("Код: " + event.code + " причина: " + event.reason);
        };

        socket.onmessage = function(event) {
            console.log(event.data);
            //parse
            /*this.setState({
                newKey:event.data
            });*/
        };

        socket.onerror = function(error) {
            alert("Ошибка " + error.message);
        };
    }
    closeModal(hide) {
        this.setState({
            showModalDelKey: hide
        });
    }

    showNewKey(){
        if(this.state.newKey) {
            return <NewKey/>;
        }
    }
    showEmployeeName(){
        if(this.props.employee) {
            return `${this.props.employee.name} ${this.props.employee.surname}`;
        }
    }
    showDeleteKeyModal(id){
        this.setState({
            showModalDelKey:true,
            idKeyEmployeeRelationship:id
        });
    }
    removeEmplKey(){
        this.setState({
            showModalDelKey:false
        });
        this.props.delEmplKey(this.props.match.params.id,this.state.idKeyEmployeeRelationship);
    }
    showUpdateKeyModal(key){
        this.setState({
            showModalUpdateKey:true
        });
        this.props.initializeForm(key);
    }
    updateKey(data){
        this.setState({
            showModalUpdateKey:false
        });
        this.props.updateEmployeeKey(this.props.match.params.id,data.id,{description:data.description});
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
                            return <KeyListElement key={key.id} data={key} updateKey={this.showUpdateKeyModal} deleteKey={this.showDeleteKeyModal}/>;
                        })}
                    </tbody>
                </table>
                <div className="vvp-new-keys__wrap">
                    <div className="row vvp-grid">
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10">

                            {this.showNewKey()}

                        </div>
                    </div>
                </div>

                <DeleteModal show={this.state.showModalDelKey} name="key" closeModal={this.closeModal} delete={this.removeEmplKey}/>

                <Modal show={this.state.showModalUpdateKey}>
                    <Modal.Header>
                        <Modal.Title>Update key</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <KeyForm onSubmit={this.updateKey}/>
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
        keys:state.employeeKeys.data,
        employee:state.employee.data
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
        },
        getEmployee(id){
            dispatch(getEmployee(id));
        },
        initializeForm (data){
            dispatch(initialize("UpdateKey", data));
        },
        updateEmployeeKey(idEmployee,idKey,description){
            dispatch(updateEmployeeKey(idEmployee,idKey,description));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(EmployeePage);