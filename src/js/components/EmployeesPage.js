import React from 'react';
import NewKey from './NewKey';

export  default class EmployeesPage extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th colSpan="4">Employee's Page</th>
                    </tr>
                    <tr>
                        <td colSpan="4">Surname name</td>
                    </tr>
                    <tr>
                        <th colSpan="4">His keys</th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Tag</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td colSpan='4'><NewKey/></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}