import React from 'react';
import NewKey from './NewKey';

export  default class EmployeesPage extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="row">
				<div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 ">
					<div className='vvp-header__wrap'>
						<h3>Employee's Page</h3>
						<h3>Surname name</h3>
						<h5>Name's keys</h5>
					</div>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>ID</th>
								<th>Tag</th>
								<th>Description</th>
								<th>Action</th>
							</tr>
						</thead>

						<tbody>
							<tr><td>1</td><td>hh1</td><td>desc</td><td>delete button</td></tr>
						</tbody>
					</table>
					<div className="vvp-new-keys__wrap">
						<NewKey/>
						<NewKey/>
						<NewKey/>
					</div>
				</div>
			</div>
		);
	}
}