import React, { useState } from "react";
import { sendForgetPasswordEmail } from "../../redux/authActionCreators";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Alert,
  FormFeedback,
} from "reactstrap";

const SendForgetPasswordEmail = () => {
  const [formState, setFormState] = useState({
    email: "",
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
      sendForgetPasswordEmail(formState);
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

    return errors;
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit">Submit</Button>
      </Form>
      <br />
      <p>A mail will be sent to your Email to reset your password</p>
    </div>
  );
};

export default SendForgetPasswordEmail;
