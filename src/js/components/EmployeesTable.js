import React from "react";
import EmployeesListElement from "./EmployeesListElement";
import { connect } from "react-redux";
import {Pagination} from "react-bootstrap";
import {push} from "react-router-redux";
import { queryString } from "query-string";
import AddEmployee from "./EmployeeSubmit";
import {Button,Modal} from "react-bootstrap";
import {deleteEmployee} from "../actions/deleteEmployee";

class EmplyeesTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showModalDelEmpl:false,
            currentId:null
        };
        this.showDeleteEmployeeModal=this.showDeleteEmployeeModal.bind(this);
        this.closeDelEmplModal=this.closeDelEmplModal.bind(this);
        this.removeEmployee=this.removeEmployee.bind(this);
    }
    showDeleteEmployeeModal(id){
        this.setState({
            showModalDelEmpl:true,
            currentId:id
        });
    }
    removeEmployee(){
        this.props.delEmployee(this.state.currentId);
        this.setState({showModalDelEmpl:false});
    }

    closeDelEmplModal(){
        this.setState({showModalDelEmpl:false});
    }
    renderPages(pages) {
        const result = [];
        for (let number = 1; number <= pages; number++) {
            result.push(<Pagination.Item key={number} onClick={() => this.props.changePage(number)}>{number}</Pagination.Item>);
        }
        return result;
    }
    render()
    {
        const per_page = 10;
        const pages = Math.ceil(this.props.employees.length / per_page);
        const current_page = this.props.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;
        return(
            <div>
                <AddEmployee/>

                <table className="table table-bordered table-hover table-striped">
			  <thead>
			    <tr>
			      <th colSpan="4">Employees</th>
			    </tr>
			    <tr>
			      <th>ID</th>
			      <th>Surname</th>
			      <th>Name</th>
                            <th>Actions</th>
			    </tr>
			  </thead>
                    <tbody>
                        {this.props.employees.map((employee, index) => {
            	if (index >= start_offset && start_count < per_page) {
            		start_count ++;
            		return(
                                    <EmployeesListElement key={employee.id} employee={employee} deleteEmployee={this.showDeleteEmployeeModal}/>
                                );
            	}
                        })}
                    </tbody>
                </table>
                <Pagination className="employees-pagination pull-right" bsSize="medium">
                    {this.renderPages(pages)}
                </Pagination>


                <Modal show={this.state.showModalDelEmpl}>
                    <Modal.Header>
                        <Modal.Title>Confirm action</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Do you really want to delete this employee?</Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeDelEmplModal}>Close</Button>
                        <Button onClick={this.removeEmployee} bsStyle="primary">Delete</Button>
                    </Modal.Footer>
                </Modal>


            </div>
        );
    }
}

function mapStateToProps(state){
    const queryString = require("query-string");
    const parsed = queryString.parse(state.routing.location.search);
    return({
        employees: state.employeesInfo.employeesInfo,
        page: Number(parsed.page) || 1,
    });
}
function mapDispatchToProps(dispatch){
    return {
        delEmployee(id){
            dispatch(deleteEmployee(id));
        },
        changePage(pagen){
            dispatch(push("/dashboard/?page=" + pagen));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EmplyeesTable);
