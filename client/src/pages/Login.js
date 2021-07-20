import React, { useState, useEffect } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";
import { Form, Button, Alert } from 'react-bootstrap';
import './Login.css'

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [validated, setValidated] = useState(false);
  const [login, { error }] = useMutation(LOGIN);

  const [showAlert, setShowAlert] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  useEffect(() => {
    //validate();
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    validate();
    validatePass();
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
    console.log(formState.email)
    if (!validEmail.test(formState.email)) {
       setEmailErr(true);
       return true;
    } 
    setEmailErr(false);
    return false;
 }; 

 const validatePass = () => {
    console.log(formState.password)
  if (!(formState.password.length > 4)) {
     setPassErr(true);
     return true;
  } 
  setPassErr(false);
  return false;
}; 

  return (
    <div className="my-5 d-flex justify-content-center ">
      <div className="login" >
        <Link to="/signup">
          Go to Signup
        </Link>

        <h2>Login</h2>
      <Form noValidate validated={validated}  onSubmit={handleFormSubmit}>
        <Alert
          dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'> 
          Something went wrong with your log-in
        </Alert>
        <Form.Group className="email">
          <Form.Label htmlFor="email">Email:</Form.Label>
          <Form.Control
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onBlur={handleChange}
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
            onBlur={handleChange}
            onChange={handleChange}
            value={formState.password}
            required
          />
        </Form.Group>
        <div className="submit-btn">
          <Button disabled={!(formState.email && !emailErr && !passErr && formState.password )} type="submit"> 
            Submit
          </Button>
        </div>
        {emailErr && <p>Your email is invalid</p>}
        {passErr  && <p>Your password is too short</p>}
        {error && <div>log in failed</div>}
      </Form>
    </div>
    </div>
    
    
  );
}


export default Login;
