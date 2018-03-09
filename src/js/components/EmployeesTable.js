import React from "react";
import EmployeesListElement from "./EmployeesListElement";
import { connect } from "react-redux";
import { Pagination } from "react-bootstrap";
import { push } from "react-router-redux";
import { queryString } from "query-string";
import AddEmployee from "./PopUps/EmployeeSubmit";
import {Button,Modal} from "react-bootstrap";
import {deleteEmployee} from "../actions/deleteEmployee";
import {getEmployeesData} from "../actions/getEmployeesData";
import EmployeeForm from "./PopUps/EmployeeForm";
import { buildQueryString } from "../utilities/url";
import {updateEmployee} from "../actions/updateEmployee";

class EmplyeesTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showModalDelEmpl:false,
            showModalUpdateEmpl:false,
            currentId:null,
            employee:{}
        };
        this.changePage = this.changePage.bind(this);
        this.showDeleteEmployeeModal=this.showDeleteEmployeeModal.bind(this);
        this.removeEmployee=this.removeEmployee.bind(this);
        this.showUpdateEmployeeModal=this.showUpdateEmployeeModal.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changeEmployee=this.changeEmployee.bind(this);
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

    changeEmployee(values){
        this.props.updateEmpl(this.state.employee.id,values);
        this.setState({
            showModalUpdateEmpl:false
        });
    }
    showUpdateEmployeeModal(data){
        this.setState({
            employee:data,
            showModalUpdateEmpl:true
        });
    }

    componentDidMount() {
        this.props.getAllEmployeesData();
    }
    changePage(pageNumber){
        const url = buildQueryString(pageNumber, "employeesPage", this.props.location.search);
        this.props.navigate(url);
    }
    renderPages(pages) {
        const result = [];
        for (let number = 1; number <= pages; number++) {
            result.push(<Pagination.Item key={number} active={number === this.props.page} onClick={() => this.changePage(number)}>{number}</Pagination.Item>);
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
                            <th colSpan="5">Employees</th>
                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>Surname</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employees.map((employee, index) => {
                            if (index >= start_offset && start_count < per_page) {
                                start_count ++;
                                return(
                                    <EmployeesListElement key={employee.id} employee={employee} deleteEmployee={this.showDeleteEmployeeModal} updateEmployee={this.showUpdateEmployeeModal}/>
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
                        <Button onClick={()=>{this.setState({showModalDelEmpl:false});}}>Close</Button>
                        <Button onClick={this.removeEmployee} bsStyle="danger">Delete</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalUpdateEmpl}>
                    <Modal.Header>
                        <Modal.Title>Update employee</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <EmployeeForm onSubmit={this.changeEmployee} employee={this.state.employee}/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="button" bsSize="large" onClick={()=>this.setState({showModalUpdateEmpl:false})}>Close</Button>
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
        employees: state.employees.data,
        page: Number(parsed.employeesPage) || 1,
        location: state.routing.location,
    });
}


function mapDispatchToProps(dispatch){
    return {
        delEmployee(id){
            dispatch(deleteEmployee(id));
        },
        getAllEmployeesData(){
            dispatch(getEmployeesData());
        },
        updateEmpl(id,data){
            dispatch(updateEmployee(id,data));
        },
        navigate(url) {
            dispatch(push(url));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmplyeesTable);
