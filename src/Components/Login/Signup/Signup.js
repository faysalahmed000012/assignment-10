import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { sendEmailVerification } from "firebase/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  let errorMassage;

  const navigate = useNavigate();

  const handleSingnup = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;

    createUserWithEmailAndPassword(email, password);
    navigate("/home");

    console.log(email, password, name);
    if (error) {
      errorMassage = (
        <p className="text-danger my-3 text-center">{error?.message}</p>
      );
    }
  };
  return (
    <div>
      <h3 className="text-center mt-4">
        <span className="text-info">Sign Up</span> Here !!!
      </h3>
      <div className="container row  mx-auto mt-3">
        <Form className="col-lg-6 mx-auto mt-5" onSubmit={handleSingnup}>
          <FloatingLabel
            controlId="floatingInput"
            label="Your Name"
            className="mb-3"
          >
            <Form.Control
              type="name"
              name="name"
              placeholder="Your name"
              required
            />
          </FloatingLabel>
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

          {errorMassage}

          <p className="mt-3">
            Already Have An Account ? <Link to="/login">Login</Link>
          </p>
          <Button className="mx-auto d-block" variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signup;
