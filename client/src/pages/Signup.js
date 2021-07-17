import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

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

  return (
    <div className="login">
      <Link to="/login">
        Go to Login
      </Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="username">
          <label htmlFor="username">User Name:</label>
          <input
            placeholder="Learnin"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="submit-btn">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );

}

export default Signup;
