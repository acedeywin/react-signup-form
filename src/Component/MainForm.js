import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Col, FormFeedback } from "reactstrap";
import $ from "jquery";

class MainForm extends Component {
  //Declaring a constructor
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //Initial state before manipulation
    this.state = {
      formFields: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      touched: {
        firstname: false,
        lastname: false,
        email: false,
        password: false,
      },
    };
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
    this.props.onSubmit(this.state.formFields);
  }

  //this handles form field data entry
  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  //this validate form input to make sure the right data are filled into the form
  validate(firstname, lastname, email, password) {
    const errors = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
    //form validation for firstname
    if (this.state.touched.firstname && firstname.length < 3) {
      errors.firstname =
        "First name should be greater than or equals to three characters";
    } else if (this.state.touched.firstname && firstname.length > 10) {
      errors.firstname =
        "First name should be less than or equals to ten characters.";
    }
    //form validation for lastname
    if (this.state.touched.lastname && lastname.length < 3) {
      errors.lastname =
        "Last name should be greater than or equals to three characters";
    } else if (this.state.touched.lastname && lastname.length > 15) {
      errors.lastname =
        "Last name should be less than or equals to 15 characters..";
    }

    //form validation for email address
    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    ) {
      errors.email = "Email should contain a @ symbol";
    }

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === ".").length !== 1
    ) {
      errors.email = "Email should contain a dot symbol";
    }

    //regex to check for proper password input
    const reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    //form validation for password
    if (this.state.touched.password && !reg.test(password)) {
      errors.password =
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
    }

    return errors;
  }

  render() {
    //error message handler
    const errors = this.validate(
      this.state.formFields.firstname,
      this.state.formFields.lastname,
      this.state.formFields.email,
      this.state.formFields.password
    );
    return (
      <div className="container">
        {/* User's form starts here */}
        <div className="row row-content">
          <div className="col-12">
            `<h3 className="text-center">Raisely Job Test</h3>`
          </div>
          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-6 main">
            {" "}
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Col md={12}>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value={this.state.formFields.firstname}
                    valid={errors.firstname === ""}
                    invalid={errors.firstname !== ""}
                    onBlur={this.handleBlur("firstname")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={12}>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    value={this.state.formFields.lastname}
                    valid={errors.lastname === ""}
                    invalid={errors.lastname !== ""}
                    onBlur={this.handleBlur("lastname")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={12}>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.formFields.email}
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onBlur={this.handleBlur("email")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={12}>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.formFields.password}
                    valid={errors.password === ""}
                    invalid={errors.password !== ""}
                    onBlur={this.handleBlur("password")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.password}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={12}>
                  <p className="word">Are you sure you want to submit?</p>
                  <Button
                    id="react-form"
                    className="button1 mr-2"
                    type="submit"
                    color="primary"
                  >
                    Submit
                  </Button>
                  <span id="react-form" className="button2 btn btn-danger mr-2">
                    Cancel
                  </span>
                </Col>
              </FormGroup>
            </Form>
            <Button
              disabled={this.state.formFields.password.length < 8}
              className="button3"
              color="primary"
            >
              Submit
            </Button>
            {/* User's form ends here */}
          </div>
          <div className="col-12 col-md-3"></div>
        </div>
      </div>
    );
  }
}

$(() => {
  $(".button1").hide();
  $(".button2").hide();
  $(".word").hide();

  $(".button3").on("click", () => {
    $(".button3").hide();
    $(".button1").show();
    $(".button2").show();
    $(".word").show();
  });

  $(".button1").on("click", () => {
    $(".button1").hide();
    $(".button2").hide();
    $(".button3").show();
    $(".word").hide();
  });

  $(".button2").on("click", () => {
    $(".button1").hide();
    $(".button2").hide();
    $(".button3").show();
    $(".word").hide();
  });
});

export default MainForm;
