import React from "react";
import {Modal,Button} from "react-bootstrap";
export default class UpdateModal extends React.Component{
    render(){
        return(
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>Update {this.props.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {this.props.form}
                </Modal.Body>

                <Modal.Footer>
                    <Button type="button" bsSize="small" onClick={this.props.closeModal.bind(this,false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}