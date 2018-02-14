import React from 'react';

class EmplyeesTable extends React.Component{
	render(){
		return(
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
          <tr>
            <td>User_ID1</td>
            <td>Vasyok1</td>
            <td>Vasya1</td>
          </tr>
          <tr>
            <td>User_ID2</td>
            <td>Vasyok2</td>
            <td>Vasya2</td>
          </tr>
          <tr>
            <td>User_ID3</td>
            <td>Vasyok3</td>
            <td>Vasya3</td>
          </tr>
          <tr>
            <td>User_ID4</td>
            <td>Vasyok4</td>
            <td>Vasya4</td>
          </tr>
        </tbody>
      </table>
			);
	}
}

export default EmplyeesTable;