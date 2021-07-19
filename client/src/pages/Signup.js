import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Form, Button, Alert } from 'react-bootstrap';

function Signup() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const [emailErr, setEmailErr] = useState(false);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleFormSubmit = async event => {
    event.preventDefault();
       // check if form has everything (as per react-bootstrap docs)
       const form = event.currentTarget;
       if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
       }

    console.log(formState);
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        username: formState.username,
      }
    });
    const data = mutationResponse.data.addUser.token;
    Auth.login(data);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );

  const validate = () => {
    if (!validEmail.test(formState.email)) {
       setEmailErr(true);
    }
 }; 

  return (
    

    <div className="login">
      <Link to="/login">
        Go to Login
      </Link>
      <h2>Signup</h2>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'> 
          Something went wrong with your sign-up
        </Alert>
        <Form.Group className="username">
          <Form.Label htmlFor="username">User Name:</Form.Label>
          <Form.Control
            placeholder="Learnin"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
            value={formState.username}
            required
          />
          <Form.Control.Feedback type='invalid' >
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="email">
          <Form.Label htmlFor="email">Email:</Form.Label>
          <Form.Control
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            value={formState.email}
            required 
          />
        </Form.Group>
        <Form.Group className="password">
          <Form.Label htmlFor="pwd">Password:</Form.Label>
          <Form.Control
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            value={formState.password}
            required
          />
        </Form.Group>
        <div className="submit-btn">
          <Button disabled={!(formState.username && formState.email && formState.password )} onClick={validate} type="submit">
            Submit
          </Button>
        </div>
        {emailErr && <p>Your email is invalid</p>}
        {error && <div>sign up failed</div>}
      </Form>
    </div>
  );

}

export default Signup;
