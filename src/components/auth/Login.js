import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Alert,
  FormFeedback,
} from "reactstrap";

const Login = () => {
  // const email = React.createRef();
  // const password = React.useRef();

  // console.log("Email: ", email);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // console.log("Errors: ", errors);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    const validationErrors = validate(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios
        .post("http://127.0.0.1:8000/api/user/login/", formState, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
      // console.log("Form Data: ", formState);
      // console.log("Error: ", errors);
    }
    event.preventDefault();
  };

  const validate = (formData) => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Please provide email address";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!formData.password) {
      errors.password = "Please provide password";
    } else if (formData.password.length < 8) {
      errors.password = "Invalid password";
    }

    return errors;
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
        <FormGroup>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            invalid={errors.email && true}
          />
          {errors.email && (
            <FormFeedback invalid={true}>{errors.email}</FormFeedback>
          )}
        </FormGroup>{" "}
        <FormGroup>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            invalid={errors.password && true}
          />
          {errors.password && (
            <FormFeedback invalid={true}>{errors.password}</FormFeedback>
          )}
        </FormGroup>{" "}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
