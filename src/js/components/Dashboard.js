import React from "react";

import EmployeesTable from "./EmployeesTable";


class Dashboard extends React.Component {
    constructor(props){
        super(props);
        //build the employees list
        const employees = [];
        for(let i = 0; i<40; i++){
            employees.push({
                id: i,
                surname: "Jhones " + i,
                name: "Peter " + i,
            });
            //save the employees in the state
            this.state = {
                employees:employees,
            };
        }
    }
    render() 
    {
        return (
            <div className="row">
                <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 ">
                    <div className="table-responsive">
                        <EmployeesTable employees={this.state.employees}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;