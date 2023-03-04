import React, { Component, createRef } from "react";
import { Form, FormGroup, Input, Button, Alert } from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.name = createRef();
    this.phone = createRef();
    this.email = createRef();
    this.password = createRef();
    this.confirmPassword = createRef();
  }

  handleSubmit = (event) => {
    console.log(
      "Name: ",
      this.name.current.value,
      " Phone: ",
      this.phone.current.value,
      " Email: ",
      this.email.current.value,
      "Pass: ",
      this.password.current.value,
      "Comfirm: ",
      this.confirmPassword.current.value
    );
    event.preventDefault();
  };

  render() {
    return (
      <div>
        {/* <Alert color={}>

                </Alert> */}
        <Form
          onSubmit={(e) => this.handleSubmit(e)}
          style={{ margin: "20px 20px" }}
        >
          <FormGroup>
            <Input placeholder="Full Name" type="text" innerRef={this.name} />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Phone Number"
              type="text"
              innerRef={this.phone}
            />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Email" type="email" innerRef={this.email} />
          </FormGroup>{" "}
          <FormGroup>
            <Input
              placeholder="Password"
              type="password"
              innerRef={this.password}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Confirm Password"
              type="password"
              innerRef={this.confirmPassword}
            />
          </FormGroup>{" "}
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
