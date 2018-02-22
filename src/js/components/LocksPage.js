import React from 'react';
import { Button, Modal, Label } from 'react-bootstrap'


export  default class LocksPage extends React.Component{
    constructor(){
        super();
        
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
        this.state = {
            show: false
        };
    }
    
    handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
    
    render(){
         const data = [
{id: 1, tag: "1udsj", description: "main", employee: "Smith"},
{id: 2, tag: "djn23", description: "not main", employee: "Brown"},
];
        
        var tableTemplate = data.map((item) => {
            return <tr key={item.id}><td>{item.id}</td><td>{item.tag}</td><td>{item.description}</td><td>{item.employee}</td>
                <td>
                    <Button bsStyle="danger" onClick={this.handleShow}>Delete</Button>
                    <Button bsStyle="warning">Update</Button>
                </td>   
            </tr>
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
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm the action</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete the key?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" onClick={this.handleClose}>Yes</Button>
                    <Button bsStyle="danger" onClick={this.handleClose}>No</Button>
                </Modal.Footer>
            </Modal>
            </div>
            </div>
        )
    }
}