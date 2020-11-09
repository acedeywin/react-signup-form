import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import FormComponent from "./Component/FormComponent";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={FormComponent} />
        <Redirect to="/signup" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
