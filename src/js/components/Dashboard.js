import React from 'react';
import store from '../store/configurateStore';



class Dashboard extends React.Component {
	constructor(){
		super();
		this.selectUser=this.selectUser.bind(this);
		this.selectKey=this.selectKey.bind(this);
		this.signInCheck=this.signInCheck.bind(this);
	}
	selectUser(){
		alert('User was selected');
		//TODO: save user id to props
	}
	selectKey(){
		alert('key was selected');
	}
	signInCheck(){
		//console.log(store.getState().user)
	}
	render() {
        return (
			<div className="row">
				{this.signInCheck()}
				<div className="col-xl-8 col-lg-10 col-md-12 col-sm-12">
					<div className="table-responsive">
						<table className="table table-bordered">
							<tbody>
								<tr><th colSpan="6">Dashboard</th></tr>
								<tr><th colSpan="3">Employees</th><th colSpan="3">Locks</th></tr>
								<tr><th>ID</th><th>Surname</th><th>Name</th><th>ID</th><th>Description</th></tr>
								<tr>
									<td onClick={this.selectUser}>User_ID</td>
									<td onClick={this.selectUser}>Vasyok</td>
									<td onClick={this.selectUser}>Vasya</td>

									<td onClick={this.selectKey}>Key_ID</td>
									<td onClick={this.selectKey}>Key_Description</td></tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
