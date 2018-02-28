import React from "react";
import {Button} from "react-bootstrap";
import {history} from "../configurateStore/history";

class EmployeesListElement extends React.Component{
    constructor(){
        super();
        this.selectEmployee=this.selectEmployee.bind(this);
    }
    selectEmployee(id){
        localStorage.setItem("currentEmployee",id);
        history.push("/employee");
    }

    render()
    {
        const employee=this.props.employee;
        return(
            <tr key={employee.id}>
                <td onClick={this.selectEmployee.bind(this,employee.id)}>#{employee.id}</td>
                <td onClick={this.selectEmployee.bind(this,employee.id)}>{employee.surname}</td>
                <td onClick={this.selectEmployee.bind(this,employee.id)}>{employee.name}</td>
                <td>
                    <Button type="button" bsSize="small" onClick={this.props.deleteEmployee.bind(this,employee.id)} bsStyle="danger">Delete</Button>
                    <Button type="button" bsSize="small" bsStyle="warning">Update</Button>
                </td>
            </tr>
        );
    }
}


export default EmployeesListElement;
