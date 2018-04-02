import React from "react";
import EmployeesListElement from "./EmployeesListElement";
import { connect } from "react-redux";
import { Pagination } from "react-bootstrap";
import { push } from "react-router-redux";
import AddEmployee from "./PopUps/EmployeeSubmit";
import {deleteEmployee, getEmployeesData, updateEmployee} from "../actions/employee";
import EmployeeForm from "./PopUps/EmployeeForm";
import queryString from "query-string";
import { buildQueryString } from "../utilities/url";
import DeleteModal from "./PopUps/DeleteModal";
import {initialize} from "redux-form";
import UpdateModal from "./PopUps/UpdateModal";
import SearchEmployee from "./SearchEmployee";
import {Button} from "react-bootstrap";
class EmployeesTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showModalDelEmpl: false,
            showModalUpdateEmpl: false,
            currentId: null,
            findEmployee:"",
            displayShowAllBtn:"allEmployeeBtn--hide"
        };
        this.changePage = this.changePage.bind(this);
        this.showDeleteEmployeeModal=this.showDeleteEmployeeModal.bind(this);
        this.removeEmployee=this.removeEmployee.bind(this);
        this.showUpdateEmployeeModal=this.showUpdateEmployeeModal.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changeEmployee=this.changeEmployee.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
        this.closeUpdateModal=this.closeUpdateModal.bind(this);
        this.findEmployee=this.findEmployee.bind(this);
    }

    closeDeleteModal(hide) {
        this.setState({
            showModalDelEmpl: hide
        });
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
        this.props.getAllEmployeesData();
    }

    changeEmployee(values){
        const employee={
            name:values.name,
            surname:values.surname,
            age:values.age
        };
        this.props.updateEmployee(values.id,employee);
        this.setState({
            showModalUpdateEmpl:false
        });
    }
    showUpdateEmployeeModal(data){
        this.props.initializeForm(data);
        this.setState({
            showModalUpdateEmpl:true
        });
    }
    closeUpdateModal(show){
        this.setState({
            showModalUpdateEmpl:show
        });
    }
    componentDidMount() {
        this.props.getAllEmployeesData();
    }
    findEmployee(data){
        this.props.getAllEmployeesData(data.toFind);
        this.setState({
            displayShowAllBtn:""
        });
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
                <SearchEmployee onSubmit={this.findEmployee}/>
                <Button className={this.state.displayShowAllBtn} onClick={()=>{this.setState({displayShowAllBtn:"allEmployeeBtn--hide"}); this.props.getAllEmployeesData();}}>All Employees</Button>
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
                <DeleteModal show={this.state.showModalDelEmpl} name="employee" closeModal={this.closeDeleteModal} delete={this.removeEmployee}/>
                <UpdateModal name="employee" show={this.state.showModalUpdateEmpl} closeModal={this.closeUpdateModal} form={<EmployeeForm onSubmit={this.changeEmployee}/>}/>

            </div>
        );
    }
}

function mapStateToProps(state){
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
        getAllEmployeesData(filter){
            dispatch(getEmployeesData(filter));
        },
        updateEmployee(id,data){
            dispatch(updateEmployee(id,data));
        },
        navigate(url) {
            dispatch(push(url));
        },
        initializeForm (data){
            dispatch(initialize("CreateUpdateEmployee", data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesTable);
