import React, { useState } from "react";
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
    emailLogin: "",
    passwordLogin: "",
  });

  const [errors, setErrors] = useState({});

  console.log("Errors: ", errors);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    const validationErrors = validate(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formState);
    }
    event.preventDefault();
  };

  const validate = (formData) => {
    const errors = {};

    if (!formData.emailLogin) {
      errors.emailLogin = "Please provide email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailLogin)) {
      errors.emailLogin = "Invalid email address";
    }

    if (!formData.passwordLogin) {
      errors.passwordLogin = "Please provide password";
    } else if (formData.passwordLogin.length < 8) {
      errors.passwordLogin = "Password must be at least 8 characters long";
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
            name="emailLogin"
            value={formState.emailLogin}
            onChange={handleInputChange}
            valid={false}
            invalid={errors.emailLogin && true}
          />
          {errors.emailLogin && (
            <FormFeedback invalid={true}>{errors.emailLogin}</FormFeedback>
          )}
        </FormGroup>{" "}
        <FormGroup>
          <Input
            placeholder="Password"
            type="password"
            name="passwordLogin"
            value={formState.passwordLogin}
            onChange={handleInputChange}
          />
        </FormGroup>{" "}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
