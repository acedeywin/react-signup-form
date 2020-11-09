import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormGroup,
  Label,
} from "reactstrap";

class ModalPrompt extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  //this handles modal toggling
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  //this handles input changes during form manipulation
  handleInputChange(event) {
    let formFields = { ...this.state.formFields };
    formFields[event.target.name] = event.target.value;
    this.setState({
      formFields,
    });
  }
  //this handles form submission and also prevents browser's default behaviour
  handleSubmit() {
    this.toggleModal();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <>
        {/* User's prompt Modal starts here */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Confirm</ModalHeader>
          <ModalBody>
            <p>Form has been successfully submitted</p>
            <Button onClick={this.toggleModal} value="submit" color="primary">
              Okay
            </Button>
          </ModalBody>
        </Modal>
        {/* User's prompt Modal ends here */}
      </>
    );
  }
}

export default ModalPrompt;
