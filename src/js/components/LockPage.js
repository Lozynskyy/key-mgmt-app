import React from "react";
import {connect} from "react-redux";
import {getLockKeys} from "../actions/getLockKeys";

class LockPage extends React.Component{
    constructor(){
        super();
        this.deleteKey=this.deleteKey.bind(this);
        this.updateKey=this.updateKey.bind(this);
    }
    
    deleteKey(e){
        console.log(e.target.id);
    }
    
    updateKey(e){
        console.log(e.target.id);
    }
    componentDidMount(){
        this.props.fetchLockKeys(this.props.match.params.id);
    }
    render(){
        var tableTemplate = this.props.keys.map((item) => {
            return <tr key={item.id}><td>{item.id}</td>
                <td><button className="btn-danger" id={item.id} onClick={this.deleteKey} data-toggle="modal" data-target="#deleteModal">Delete</button>               
                    <button className="btn-warning" id={item.id} onClick={this.updateKey} data-toggle="modal" data-target="#updateModal">Update</button></td>   
            </tr>;
        });
        
        return (
            <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Lock_name</th>
                                <th>Lock_pass</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tableTemplate}
                        </tbody>
                    </table>
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
        fetchLockKeys(id){
            dispatch(getLockKeys(id));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(LockPage);