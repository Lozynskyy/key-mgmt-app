import React from "react";

export  default class LocksPage extends React.Component{
    constructor(){
        super();
        this.deleteKey=this.deleteKey.bind(this);
        this.updateKey=this.updateKey.bind(this);
    }
    
    deleteKey(e){
        console.log(e.target.id);
    }
    
    updateKey(e){
        console.log(e.target.id);
    }
    
    render(){
        const data = [
            {id: 1, tag: "1udsj", description: "main", employee: "Smith"},
            {id: 2, tag: "djn23", description: "not main", employee: "Brown"},
        ];
        
        var tableTemplate = data.map((item) => {
            return <tr key={item.id}><td>{item.id}</td><td>{item.tag}</td><td>{item.description}</td><td>{item.employee}</td>
                <td><button className="btn-danger" id={item.id} onClick={this.deleteKey} data-toggle="modal" data-target="#deleteModal">Delete</button>               
                    <button className="btn-warning" id={item.id} onClick={this.updateKey} data-toggle="modal" data-target="#updateModal">Update</button></td>   
            </tr>;
        });
        
        return (
            <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tag</th>
                                <th>Description</th>
                                <th>Employee</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tableTemplate}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}