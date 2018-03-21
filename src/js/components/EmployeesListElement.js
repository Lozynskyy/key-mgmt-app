import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class EmployeesListElement extends React.Component{

    render()
    {
        const employee=this.props.employee;
        return(
            <tr key={employee.id}>
                <td className="id-column"><Link to={"/employee/"+employee.id}>#{employee.id}</Link></td>
                <td><Link to={"/employee/"+employee.id}>{employee.surname}</Link></td>
                <td><Link to={"/employee/"+employee.id}>{employee.name}</Link></td>
                <td><Link to={"/employee/"+employee.id}>{employee.age}</Link></td>
                <td className="actions-column">
                    <Button type="button" bsSize="small" onClick={this.props.deleteEmployee.bind(this,employee.id)} bsStyle="danger">Delete</Button>
                    <Button type="button" bsSize="small" onClick={this.props.updateEmployee.bind(this,employee)} bsStyle="warning">Update</Button>
                </td>
            </tr>
        );
    }
}


export default EmployeesListElement;
