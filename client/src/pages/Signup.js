import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Form, Button, Alert } from 'react-bootstrap';

function Signup() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, {error}] = useMutation(ADD_USER);
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };



  const handleFormSubmit = async (event) => {
    console.log(formState);
    event.preventDefault();

    try{
      const { data } =  await addUser({
      variables: {
        email: formState.email, password: formState.password,
        username: formState.username
      }
      });
      console.log({data});
      Auth.login(data.addUser.token);
    } catch (e){
      console.log(error);
      console.error(e);
      setShowAlert(true);
    }

    setFormState({
      username: "",
      email: "",
      password: "",
    });
    // const {mutationResponse} = await addUser({
    //   variables: {
    //     ...formState
        //email: formState.email, password: formState.password,
        //userName: formState.userName,
     // }
    //});
    // const token = mutationResponse.addUser.token;
    // console.log(token);
    // Auth.login(mutationResponse.addUser.token);
  };


  // return (
  //   <div className="login">
  //     <Link to="/login">
  //       Go to Login
  //     </Link>

  //     <h2>Signup</h2>
  //     <form onSubmit={handleFormSubmit}  noValidate validated={validated}>
  //       <div className="username">
  //         <label htmlFor="userName">User Name:</label>
  //         <input
  //           //value={formState.username}
  //           placeholder="Learnin"
  //           name="userName"
  //           type="userName"
  //           id="userName"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="email">
  //         <label htmlFor="email">Email:</label>
  //         <input
  //           value={formState.email}
  //           placeholder="youremail@test.com"
  //           name="email"
  //           type="email"
  //           id="email"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="password">
  //         <label htmlFor="pwd">Password:</label>
  //         <input
  //           value={formState.password}
  //           placeholder="******"
  //           name="password"
  //           type="password"
  //           id="pwd"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="submit-btn">
  //         <button type="submit" 
  //           //disabled={!(formState.username && formState.email && formState.password)}
  //           >
  //           Submit
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleChange}
            value={formState.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleChange}
            value={formState.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleChange}
            value={formState.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(formState.username && formState.email && formState.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
        {/* {error && <div>Sign up failed</div>} */}
      </Form>
    </>
  );
};




export default Signup;
