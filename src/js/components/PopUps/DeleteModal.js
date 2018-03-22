import React from "react";
import { Button, Modal } from "react-bootstrap";

export default class DeleteModal extends React.Component{

    render(){
        return (
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>Confirm action</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Do you really want to delete this {this.props.name}?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeModal.bind(this, false)}>Close</Button>
                    <Button bsStyle="danger" onClick={this.props.delete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}