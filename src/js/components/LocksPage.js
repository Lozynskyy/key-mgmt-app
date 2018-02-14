import React from 'react';

export default class LocksPage extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="row">
                <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 ">
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
                            <td colSpan='4'>

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}