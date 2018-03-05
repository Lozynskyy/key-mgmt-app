import React from "react";
import EmployeesListElement from "./EmployeesListElement";
import { connect } from "react-redux";
import {Pagination} from "react-bootstrap";
import {push} from "react-router-redux";
import { queryString } from "query-string";
import AddEmployee from "./EmployeeSubmit";
import {getEmployeesData} from "../actions/getEmployeesData";
import { history } from "../configurateStore/history";

class EmplyeesTable extends React.Component{
    constructor(props){
        super(props);
        this.changePage = this.changePage.bind(this);
    }
    componentDidMount() {
        this.props.getAllEmployeesData();
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
                  <th colSpan="3">Employees</th>
                </tr>
                <tr>
                  <th>ID</th>
                  <th>Surname</th>
                  <th>Name</th>
                </tr>
              </thead>
                    <tbody>
                        {this.props.employees.map((employee, index) => {
                if (index >= start_offset && start_count < per_page) {
                    start_count ++;
                    return(
                                    <EmployeesListElement key={employee.id} employee={employee}/>
                                );
                }
                        })}
                    </tbody>
                </table>
                <Pagination className="employees-pagination pull-right" bsSize="medium">
                    {this.renderPages(pages)}
                </Pagination>

            </div>
        );
    }

    changePage(pagen)
    {
        const queryString = require("query-string");
        const parsed = queryString.parse(this.props.location.search);
        parsed.employeesPage = pagen;
        const searchString = queryString.stringify(parsed);
        history.push("?" + searchString);
    }
}

function mapStateToProps(state){
    const queryString = require("query-string");
    const parsed = queryString.parse(state.routing.location.search);
    return({
        employees: state.employees.data,
        page: Number(parsed.employeesPage) || 1,
        location: state.routing.location
    });
}

function mapDispatchToProps(dispatch){
    return {
        getAllEmployeesData(){
            dispatch(getEmployeesData());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmplyeesTable);
