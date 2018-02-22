import React from 'react';
import EmployeesTable from './EmployeesTable';


class Dashboard extends React.Component {
  render() 
  {
        return (
            <div className="row">
                <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 ">
                    <div className="table-responsive">
                        <EmployeesTable/>
                    </div>
                </div>
            </div>
        )
  }
}
export default Dashboard;