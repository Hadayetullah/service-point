import React, { Component, createRef } from "react";
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
    // this.nameSignup = createRef();
    // this.phoneSignup = createRef();
    // this.emailSignup = createRef();
    // this.passwordSignup = createRef();
    // this.confirmPassword = createRef();

    this.state = {
      formState: {
        nameSignup: "",
        phoneSignup: "",
        emailSignup: "",
        passwordSignup: "",
        confirmPassword: "",
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

    if (!formData.nameSignup) {
      errors.nameSignup = "Please provide your name";
    } else if (formData.nameSignup.length <= 3) {
      errors.nameSignup = "Please provide your full name";
    }

    if (!formData.phoneSignup) {
      errors.phoneSignup = "Please provide your phone number";
    } else if (
      !/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(formData.phoneSignup)
    ) {
      errors.phoneSignup = "Invalid phone number";
    }

    if (!formData.emailSignup) {
      errors.emailSignup = "Please provide your email address";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.emailSignup)
    ) {
      errors.emailSignup = "Invalid email address";
    }

    if (!formData.passwordSignup) {
      errors.passwordSignup = "Please provide password";
    } else if (formData.passwordSignup.length < 8) {
      errors.passwordSignup = "Password must be at least 8 characters long";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please provide password again";
    } else if (formData.confirmPassword.length < 8) {
      errors.confirmPassword = "Password must be at least 8 characters long";
    } else if (formData.confirmPassword != formData.passwordSignup) {
      errors.confirmPassword = "Password doesn't match";
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
      console.log("State: ", this.state);
    }
    event.preventDefault();
  };

  render() {
    // console.log(this.passwordSignup);
    return (
      <div>
        {/* <Alert color={}>

                </Alert> */}
        <Form onSubmit={this.handleSubmit} style={{ margin: "20px 20px" }}>
          <FormGroup>
            <Input
              placeholder="Full Name"
              type="text"
              name="nameSignup"
              value={this.state.formState.nameSignup}
              onChange={this.handleInputChange}
              invalid={this.state.errors.nameSignup && true}
              onBlur={this.handleErrorLook}
              onFocus={this.handleErrorLook}
            />
            {this.state.errors.nameSignup && (
              <FormFeedback invalid={true}>
                {this.state.errors.nameSignup}
              </FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Phone Number"
              type="text"
              name="phoneSignup"
              value={this.state.formState.phoneSignup}
              onChange={this.handleInputChange}
              invalid={this.state.errors.phoneSignup && true}
              onBlur={this.handleErrorLook}
              onFocus={this.handleErrorLook}
            />
            {this.state.errors.phoneSignup && (
              <FormFeedback invalid={true}>
                {this.state.errors.phoneSignup}
              </FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Email"
              type="email"
              name="emailSignup"
              value={this.state.formState.emailSignup}
              onChange={this.handleInputChange}
              invalid={this.state.errors.emailSignup && true}
              onBlur={this.handleErrorLook}
              onFocus={this.handleErrorLook}
            />
            {this.state.errors.emailSignup && (
              <FormFeedback invalid={true}>
                {this.state.errors.emailSignup}
              </FormFeedback>
            )}
          </FormGroup>{" "}
          <FormGroup>
            <Input
              placeholder="Password"
              type="password"
              name="passwordSignup"
              value={this.state.formState.passwordSignup}
              onChange={this.handleInputChange}
              invalid={this.state.errors.passwordSignup && true}
              onBlur={this.handleErrorLook}
              onFocus={this.handleErrorLook}
            />
            {this.state.errors.passwordSignup && (
              <FormFeedback invalid={true}>
                {this.state.errors.passwordSignup}
              </FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={this.state.formState.confirmPassword}
              onChange={this.handleInputChange}
              invalid={this.state.errors.confirmPassword && true}
              onBlur={this.handleErrorLook}
              onFocus={this.handleErrorLook}
            />
            {this.state.errors.confirmPassword && (
              <FormFeedback invalid={true}>
                {this.state.errors.confirmPassword}
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
