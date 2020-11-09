import React, { Component } from "react";
import MainForm from "./MainForm";
import { formHandler } from "../scripts/fetchData";

class FormComponent extends Component {
  handleSubmit(data) {
    formHandler(data);
  }

  render() {
    return (
      <div>
        <MainForm onSubmit={this.handleSubmit}></MainForm>
      </div>
    );
  }
}

export default FormComponent;
