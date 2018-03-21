import React from "react";
import {connect} from "react-redux";
import {getLockKeys} from "../actions/getLockKeys";
import {Button} from "react-bootstrap";
import {deleteLockKey} from "../actions/deleteLockKey";
import DeleteModal from "./PopUps/DeleteModal";

class LockPage extends React.Component{
    constructor(){
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.removeKey = this.removeKey.bind(this);
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

    handleShow(data) {
        console.log(data.key.id);
        this.setState({ show: true, id: data.key.id });
    }
    
    removeKey() {
        this.setState({ show: false });
        this.props.deleteLockKey(this.props.match.params.id, this.state.id);
    }

    componentDidMount(){
        console.log(this.props.match);
        this.props.fetchLockKeys(this.props.match.params.id);
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
                    <DeleteModal show={this.state.showDelKeyModal} name="key" closeModal={this.closeModal} delete={this.removeKey}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        keys:state.lockKeys.keys
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
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(LockPage);