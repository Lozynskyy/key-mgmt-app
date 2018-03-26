import React from "react";
import EmployeesTable from "./EmployeesTable";
import LocksTable from "./LocksTable";


class Dashboard extends React.Component {
    render() 
    {
        return (
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="table-responsive">
                        <div className="row">
                            <div className="col-xl-5 col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                <EmployeesTable/>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-5 col-sm-5 col-xs-12">
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