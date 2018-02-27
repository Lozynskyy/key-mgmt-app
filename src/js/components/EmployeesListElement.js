import React from "react";
import {Button} from "react-bootstrap";

class EmployeesListElement extends React.Component{

    render()
    {
        const employee=this.props.employee;
        return(
            <tr key={employee.id}>
                <td>#{employee.id}</td>
                <td>{employee.surname}</td>
                <td>{employee.name}</td>
                <td>
                    <Button type="button" bsSize="small" onClick={this.props.deleteEmployee.bind(this,employee.id)} bsStyle="danger">Delete</Button>
                    <Button type="button" bsSize="small" bsStyle="warning">Update</Button>
                </td>
            </tr>
        );
    }
}


export default EmployeesListElement;
