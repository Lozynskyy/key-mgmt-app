import React from "react";
import NewKey from "./NewKey";
import KeyListElement from "./KeyListElement";
import {connect} from "react-redux";
import {
    getEmployeeKeys, deleteEmployeeKey, attachKeyToEmployee, updateEmployeeKey, getLockKeys,
    getUnreservedKeys
} from "../actions/key";
import DeleteModal from "./PopUps/DeleteModal";
import {getEmployee} from "../actions/employee";
import {websocketKeyEndpoint} from "../config";
import KeyForm from "./KeyForm";
import {initialize} from "redux-form";
import UpdateModal from "./PopUps/UpdateModal";
import {getLocksData} from "../actions/lock";

class EmployeePage extends React.Component{
    constructor(){
        super();
        this.showEmployeeName=this.showEmployeeName.bind(this);
        this.showDeleteKeyModal=this.showDeleteKeyModal.bind(this);
        this.removeEmplKey=this.removeEmplKey.bind(this);
        this.attachKey=this.attachKey.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
        this.closeUpdateKeyModal=this.closeUpdateKeyModal.bind(this);
        this.showNewKeyWebsocket=this.showNewKeyWebsocket.bind(this);
        this.showNewKeyDB=this.showNewKeyDB.bind(this);
        this.showUpdateKeyModal=this.showUpdateKeyModal.bind(this);
        this.updateKey=this.updateKey.bind(this);
        this.state={
            showModalDelKey:false,
            showModalUpdateKey:false,
            idKeyEmployeeRelationship:null,
            newKeys:[]
        };
    }
    componentDidMount(){
        this.props.getEmployee(this.props.match.params.id);
        this.props.fetchEmployeeKeys(this.props.match.params.id);
        this.props.getUnreservedKeys();
        this.props.getLocksData();
        this.socket = new WebSocket(websocketKeyEndpoint);
        this.socket.onopen = function() {
            console.log("Соединение установлено.");
        };

        this.socket.onclose = function(event) {
            if (!event.wasClean){
                console.log("Обрыв соединения");
            }
            if(event.code===1006){
                this.socket = new WebSocket(websocketKeyEndpoint);
            }
            console.log("Код: " + event.code + " причина: " + event.reason);
        };

        this.socket.onmessage = (event) => {
            console.log(event.data);
            const data=JSON.parse(event.data);
            let keys=this.state.newKeys;
            keys.unshift(data.payload);
            this.setState({
                newKeys:keys
            });
        };

        this.socket.onerror = function(error) {
            console.log("Ошибка " + error.message);
        };
    }
    closeDeleteModal(hide) {
        this.setState({
            showModalDelKey: hide
        });
    }
    componentWillUnmount(){
        this.socket.close();
    }
    showNewKeyWebsocket(){
        return this.state.newKeys.map((key) => {return <NewKey key={key.id} addKey={this.attachKey} data={key}/>;});
    }
    showNewKeyDB(){
        return this.props.unreservedKeys.map(key => {return <NewKey key={key.id} addKey={this.attachKey} data={key}/>;});
    }
    showEmployeeName(){
        if(this.props.employee.name) {
            return `${this.props.employee.name} ${this.props.employee.surname}`;
        }
        return "";
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
    closeUpdateKeyModal(show){
        this.setState({
            showModalUpdateKey:show
        });
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
            let keysArr=this.state.newKeys.filter((key)=>{
                if(key.id!==data.rkey){
                    return key;
                }
            });

            this.setState({
                newKeys:keysArr
            });
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
                            <th>ID</th>
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

                            {this.showNewKeyWebsocket()}

                            {this.showNewKeyDB()}

                        </div>
                    </div>
                </div>

                <DeleteModal show={this.state.showModalDelKey} name="key" closeModal={this.closeDeleteModal} delete={this.removeEmplKey}/>

                <UpdateModal show={this.state.showModalUpdateKey} name="key" form={<KeyForm onSubmit={this.updateKey}/>} closeModal={this.closeUpdateKeyModal}/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        keys:state.employeeKeys.data,
        employee:state.employee.data,
        locks:state.locks.data,
        lockKeys:state.lockKeys.keys,
        unreservedKeys:state.unreservedKeys.keys
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
        },
        getLocksData(){
            dispatch(getLocksData());
        },
        getLockKeys(id){
            dispatch(getLockKeys(id));
        },
        getUnreservedKeys(){
            dispatch(getUnreservedKeys());
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(EmployeePage);