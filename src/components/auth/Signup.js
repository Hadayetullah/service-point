import React, { Component, createRef } from "react";
import axios from "axios";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Alert,
  FormFeedback,
} from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    // this.name = createRef();
    // this.phone = createRef();
    // this.email = createRef();
    // this.password = createRef();
    // this.password2 = createRef();

    this.state = {
      formState: {
        name: "",
        email: "",
        phone: "",
        password: "",
        password2: "",
      },
      errors: {},
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleErrorLook = this.handleErrorLook.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      // ...this.state.formState,
      formState: {
        ...this.state.formState,
        [name]: value,
      },
    });
  };

  handleErrorLook = (e) => {
    const proName = e.target.name;
    // const { [proName]: _, ...newObj } = this.state.formState;
    // const validationErrors = this.validate(newObj);
    // if (Object.keys(validationErrors).length > 0) {
    //   this.setState({
    //     ...this.state,
    //     errors: validationErrors,
    //   });
    // }
    if (this.state.errors[proName]) {
      // console.log("Yes");
      // delete this.state.errors.proName;
      const { [proName]: _, ...newObj } = this.state.errors;
      this.setState({
        ...this.state,
        errors: newObj,
      });
    }
    // console.log(this.state.formState);
  };

  validate = (formData) => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Please provide your name";
    } else if (formData.name.length <= 3) {
      errors.name = "Please provide your full name";
    }

    if (!formData.phone) {
      errors.phone = "Please provide your phone number";
    } else if (
      !/(^(\+88|88)?(01){1}[3456789]{1}(\d){8})$/.test(formData.phone)
    ) {
      errors.phone = "Invalid phone number";
    }

    if (!formData.email) {
      errors.email = "Please provide your email address";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!formData.password) {
      errors.password = "Please provide password";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!formData.password2) {
      errors.password2 = "Please provide password again";
    } else if (formData.password2.length < 8) {
      errors.password2 = "Password must be at least 8 characters long";
    } else if (formData.password2 != formData.password) {
      errors.password2 = "Password doesn't match";
    }

    return errors;
  };

  handleSubmit = (event) => {
    const validationErrors = this.validate(this.state.formState);
    if (Object.keys(validationErrors).length > 0) {
      this.setState({
        ...this.state,
        errors: validationErrors,
      });
    } else {
      axios
        .post(
          "http://127.0.0.1:8000/api/user/registration/",
          this.state.formState,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
      // console.log("State: ", this.state.formState);
    }
    event.preventDefault();
  };

  render() {
    // console.log(this.password);
    return (
      <div>
        {/* <Alert color={}>

                </Alert> */}
        <Form onSubmit={this.handleSubmit} style={{ margin: "20px 20px" }}>
          <FormGroup>
            <Input
              placeholder="Full Name"
              type="text"
              name="name"
              value={this.state.formState.name}
              onChange={this.handleInputChange}
              invalid={this.state.errors.name && true}
              onBlur={this.handleErrorLook}
              onFocus={this.handleErrorLook}
            />
            {this.state.errors.name && (
              <FormFeedback invalid={true}>
                {this.state.errors.name}
              </FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Phone Number"
              type="text"
              name="phone"
              value={this.state.formState.phone}
              onChange={this.handleInputChange}
              invalid={this.state.errors.phone && true}
              onBlur={this.handleErrorLook}
              onFocus={this.handleErrorLook}
            />
            {this.state.errors.phone && (
              <FormFeedback invalid={true}>
                {this.state.errors.phone}
              </FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={this.state.formState.email}
              onChange={this.handleInputChange}
              invalid={this.state.errors.email && true}
              onBlur={this.handleErrorLook}
              onFocus={this.handleErrorLook}
            />
            {this.state.errors.email && (
              <FormFeedback invalid={true}>
                {this.state.errors.email}
              </FormFeedback>
            )}
          </FormGroup>{" "}
          <FormGroup>
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.formState.password}
              onChange={this.handleInputChange}
              invalid={this.state.errors.password && true}
              onBlur={this.handleErrorLook}
              onFocus={this.handleErrorLook}
            />
            {this.state.errors.password && (
              <FormFeedback invalid={true}>
                {this.state.errors.password}
              </FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Confirm Password"
              type="password"
              name="password2"
              value={this.state.formState.password2}
              onChange={this.handleInputChange}
              invalid={this.state.errors.password2 && true}
              onBlur={this.handleErrorLook}
              onFocus={this.handleErrorLook}
            />
            {this.state.errors.password2 && (
              <FormFeedback invalid={true}>
                {this.state.errors.password2}
              </FormFeedback>
            )}
          </FormGroup>{" "}
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
