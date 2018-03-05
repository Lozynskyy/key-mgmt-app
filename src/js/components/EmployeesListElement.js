import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class EmployeesListElement extends React.Component{
    constructor(){
        super();
    }

    render()
    {
        const employee=this.props.employee;
        return(
            <tr key={employee.id}>
                <td><Link to={"/employee/"+employee.id}>#{employee.id}</Link></td>
                <td><Link to={"/employee/"+employee.id}>{employee.surname}</Link></td>
                <td><Link to={"/employee/"+employee.id}>{employee.name}</Link></td>
                <td>
                    <Button type="button" bsSize="small" onClick={this.props.deleteEmployee.bind(this,employee.id)} bsStyle="danger">Delete</Button>
                    <Button type="button" bsSize="small" onClick={this.props.updateEmployee.bind(this,employee.id)} bsStyle="warning">Update</Button>
                </td>
            </tr>
        );
    }
}


export default EmployeesListElement;
