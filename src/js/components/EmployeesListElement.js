import React from 'react';

class EmployeesListElement extends React.Component{
	render()
	{
		const employee=this.props.employee;
		return(
			<tr key={employee.id}>
				<td>#{employee.id}</td>
				<td>{employee.surname}</td>
				<td>{employee.name}</td>
			</tr>
		);
	}
}

export default EmployeesListElement;
