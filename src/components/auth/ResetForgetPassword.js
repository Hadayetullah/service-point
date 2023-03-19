import React, { useEffect, useState } from "react";
import { changePassword } from "../../redux/authActionCreators";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  FormFeedback,
} from "reactstrap";
import "./auth.css";

const ResetForgetPassword = () => {
  const height = window.screen.availHeight;
  // console.log(height);

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
    <div
      style={{ height: `${height - 265}px`, width: "100%", paddingTop: "6%" }}
    >
      <Form onSubmit={handleSubmit} className="reset-forget-password">
        <h5>Reset Password</h5>
        <FormGroup>
          <Label>Password*</Label>
          <Input
            // placeholder="Password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            invalid={errors.password && true}
          />
          {errors.password && (
            <FormFeedback className="reset-pass-err" invalid={true}>
              {errors.password}
            </FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password*</Label>
          <Input
            // placeholder="Confirm Password"
            type="password"
            name="password2"
            value={formState.password2}
            onChange={handleInputChange}
            invalid={errors.password2 && true}
          />
          {errors.password2 && (
            <FormFeedback className="reset-pass-err" invalid={true}>
              {errors.password2}
            </FormFeedback>
          )}
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default ResetForgetPassword;
