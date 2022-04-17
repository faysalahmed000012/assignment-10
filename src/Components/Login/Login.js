import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);

    console.log(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <h3 className="text-center mt-4">
        <span className="text-info">Login</span> Here !!!
      </h3>
      <div className="container row  mx-auto mt-3">
        <Form className="col-lg-6 mx-auto mt-5" onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </FloatingLabel>

          <p className="mt-3">
            New Here ? <Link to="/signup">Sign Up</Link>
          </p>
          <Button className="mx-auto d-block" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
