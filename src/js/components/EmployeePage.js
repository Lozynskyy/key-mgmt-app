import React from "react";
import NewKey from "./NewKey";
import KeyListElement from "./KeyListElement";
import {connect} from "react-redux";
import {getEmployeeKeys} from "../actions/getEmployeeKeys";
import { queryString } from "query-string";


class EmployeePage extends React.Component{
    constructor(){
        super();
        this.showEmployeeName=this.showEmployeeName.bind(this);
    }
    componentDidMount(){
        const queryString = require("query-string");
        const parsed = queryString.parse(this.props.location.search);
        this.props.fetchEmployeeKeys(parsed.emplID);
    }
    showEmployeeName(){
        if(this.props.keys[0].employee.name){
            //TODO:Problem
            return this.props.keys[0].employee.name;
        }
    }

    render(){
        return(
            <div>
                <h3>{this.showEmployeeName}</h3>
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
                        {this.props.keys.map((key)=>{
                            return <KeyListElement key={key.rkey.id} id={key.rkey.id} tag={key.rkey.tag} description={key.description}/>;
                        })}
                    </tbody>
                </table>
                <NewKey id={12} tag="ghbgf4"/>
                <NewKey id={54} tag="rh"/>
                <NewKey id={43} tag="rtbtrrb"/>
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
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(EmployeePage);