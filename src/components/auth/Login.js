import React, { Component, createRef } from "react";
import { Form, FormGroup, Input, Button, Alert } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.email = createRef();
    this.password = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    console.log(
      "Email: ",
      this.email.current.value,
      "Password: ",
      this.password.current.value
    );
    event.preventDefault();
  };

  render() {
    return (
      <div>
        {/* <Alert color={}>

                </Alert> */}
        <Form onSubmit={this.handleSubmit} style={{ margin: "20px 0" }}>
          <FormGroup>
            <Input placeholder="Email" type="email" innerRef={this.email} />
          </FormGroup>{" "}
          <FormGroup>
            <Input
              placeholder="Password"
              type="password"
              innerRef={this.password}
            />
          </FormGroup>{" "}
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
