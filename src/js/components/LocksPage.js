import React from "react";
import { Button, Modal } from "react-bootstrap";

export  default class LocksPage extends React.Component{
    constructor(){
        super();
        
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deleteKey = this.deleteKey.bind(this);
        
        this.state = {
            show: false,
            id: "",
            data: [
                {id: 1, tag: "1uds8", description: "main", employee: "Smith"},
                {id: 2, tag: "djn23", description: "not main", employee: "Brown"},
                {id: 3, tag: "hgf76", description: "unknown", employee: "Josie"},
                {id: 4, tag: "34jhg", description: "not main", employee: "Blare"},
                {id: 5, tag: "inb12", description: "main", employee: "Aklie"},
                {id: 6, tag: "gf45s", description: "not main", employee: "Sara"},
            ]
        };
    }
    
    handleClose() {
        this.setState({ show: false });
    }

    handleShow(id) {
        this.setState({ show: true, id });
    }
    
    deleteKey(id) {
        this.setState({
            data: this.state.data.filter(item => item.id !== id),
            show: false
        });
        console.log(id);
    }
    
    render(){
        let tableTemplate = this.state.data.map((item) => {
            return <tr key={item.id}><td>{item.id}</td><td>{item.tag}</td><td>{item.description}</td><td>{item.employee}</td>
                <td>
                    <Button bsStyle="danger" key={item.id} onClick={() => this.handleShow(item.id)}>Delete</Button>
                    <Button bsStyle="warning">Update</Button>
                </td>
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
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm the action</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to delete the key?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="success" onClick={()=>{this.deleteKey(this.state.id);}}>Yes</Button>
                            <Button bsStyle="danger" onClick={this.handleClose}>No</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}