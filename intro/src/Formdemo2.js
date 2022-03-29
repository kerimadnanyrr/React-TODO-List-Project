import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";
import { Button } from "reactstrap";

export default class Formdemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
     event.preventDefault();

    alertify.success(this.state.email + " added", 1);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label for="email">E-Mail</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter Description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>


          <FormGroup>

              <Label for="text">City</Label>
              <Input type="select" id="city" name="city">
                  <option>İstanbul</option>
                  <option>Ankara</option>
                  <option>İzmir</option>
                  <option>Bayburt</option>


                  </Input>
          </FormGroup>
        <Button type="submit" success>Save</Button>
        </Form>
      </div>
    );
  }
}
