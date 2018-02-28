import React from "react";

import EmployeesTable from "./EmployeesTable";
import LocksTable from "./LocksTable";


class Dashboard extends React.Component {
    render() 
    {
        return (
            <div className="row">
                <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 ">
                    <div className="table-responsive">
                        <div className="row">
                            <div className="col-lg-6">
                                <EmployeesTable/>
                            </div>
                             <div className="col-lg-4">
                                <LocksTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;