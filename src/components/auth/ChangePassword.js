import React, { useState } from "react";
import { changePassword } from "../../redux/authActionCreators";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Alert,
  FormFeedback,
} from "reactstrap";

const ChangePassword = () => {
  const [formState, setFormState] = useState({
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    const validationErrors = validate(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      changePassword(formState);
      // console.log("Form Data: ", formState);
      // console.log("Error: ", errors);
    }
    event.preventDefault();
  };

  const validate = (formData) => {
    const errors = {};

    if (!formData.password) {
      errors.password = "Please provide password";
    } else if (formData.password.length < 8) {
      errors.password = "Invalid password";
    }

    if (!formData.password2) {
      errors.password2 = "Please provide confirm password";
    } else if (formData.password2 != formData.password) {
      errors.password2 = "Password doesn't match";
    }

    return errors;
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
        <FormGroup>
          <Input
            placeholder="Confirm Password"
            type="password"
            name="password2"
            value={formState.password2}
            onChange={handleInputChange}
            invalid={errors.password2 && true}
          />
          {errors.password2 && (
            <FormFeedback invalid={true}>{errors.password2}</FormFeedback>
          )}
        </FormGroup>{" "}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default ChangePassword;
