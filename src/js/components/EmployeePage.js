import React from "react";
import NewKey from "./NewKey";
import KeyListElement from "./KeyListElement";
import {connect} from "react-redux";
import {getEmployeeKeys} from "../actions/getEmployeeKeys";

class EmployeePage extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        const currentEmployee=localStorage.getItem("currentEmployee");
        this.props.fetchEmployeeKeys(currentEmployee);
    }

    render(){
        return(
            <div>
                <h3>Surname name</h3>
        <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th colSpan="4">His keys</th>
              </tr>
            <tr>
                <th>ID</th>
                <th>Tag</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
               <KeyListElement/>
               <KeyListElement/>
               <KeyListElement/>
            </tbody>
        </table>
                <NewKey id={12} tag="ghbgf4"/>
                <NewKey id={54} tag="rh"/>
                <NewKey id={43} tag="rtbtrrb"/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        keys:state.fetchEmployeeKeys
    }
}
function mapDispatchToProps(dispatch) {
    return{
        fetchEmployeeKeys(id){
            dispatch(getEmployeeKeys(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EmployeePage);