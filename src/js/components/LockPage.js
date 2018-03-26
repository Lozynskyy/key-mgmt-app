import React from "react";
import {connect} from "react-redux";
import {attachKeyToLock, getLockKeys, getReservedKeyForLock,deleteLockKey} from "../actions/key";
import { Button } from "react-bootstrap";
import DeleteModal from "./PopUps/DeleteModal";

class LockPage extends React.Component{
    constructor(){
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.removeKey = this.removeKey.bind(this);
        this.attachKeyToLock=this.attachKeyToLock.bind(this);
        this.closeModal = this.closeModal.bind(this);
        
        this.state = {
            showDelKeyModal: false,
            id: ""
        };
    }

    closeModal(hide) {
        this.setState({
            showDelKeyModal: hide
        });
    }

    handleClose() {
        this.setState({ show: false });
    }
    attachKeyToLock(id){
        this.props.attachKeyToLock(this.props.match.params.id,{"key":id});
    }
    handleShow(data) {
        this.setState({ show: true, id: data.key.id });
    }
    
    removeKey() {
        this.setState({ show: false });
        this.props.deleteLockKey(this.props.match.params.id, this.state.id);
    }

    componentDidMount(){
        this.props.fetchLockKeys(this.props.match.params.id);
        this.props.getReservedKeysForLock();
    }

    render(){
        return (
            <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th className="id-column">ID</th>
                                <th>Tag</th>
                                <th>Description</th>
                                <th>Employee</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.keys.map((item) => {
                                return <tr key={item.id}><td>#{item.key.id}</td><td>{item.key.tag}</td><td>{item.key.description}</td><td>{item.key.employee}</td>
                                    <td className="action-column">
                                        <Button bsStyle="danger" key={item.id} onClick={() => this.handleShow(item)}>Delete</Button>
                                    </td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                    <ul>
                        {this.props.reservedKeys.map((key) => {
                            return <li key={key.id}>{key.id} {key.tag} <button onClick={this.attachKeyToLock.bind(this,key.id)}>Add To lock</button></li>;
                        })}
                    </ul>

                    <DeleteModal show={this.state.showDelKeyModal} name="key" closeModal={this.closeModal} delete={this.removeKey}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        keys:state.lockKeys.keys,
        reservedKeys:state.reservedKeysForLock.keys
    };
}
function mapDispatchToProps(dispatch) {
    return{
        deleteLockKey(id, idKey){
            dispatch(deleteLockKey(id, idKey));
        },
        fetchLockKeys(id){
            dispatch(getLockKeys(id));
        },
        getReservedKeysForLock(){
            dispatch(getReservedKeyForLock());
        },
        attachKeyToLock(idLock,idKey){
            dispatch(attachKeyToLock(idLock,idKey));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(LockPage);