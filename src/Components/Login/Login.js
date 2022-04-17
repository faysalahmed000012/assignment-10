import React, { useRef, useState } from "react";
import { Button, FloatingLabel, Form, Spinner } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  let errorMassage;

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);

    console.log(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      alert("email sent");
    } else {
      alert("please provide an email");
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorMassage = (
      <p className="text-danger my-3 text-center">{error?.message}</p>
    );
  }
  if (loading) {
    <Loading></Loading>;
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
              ref={emailRef}
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
            New Here ? <Link to="/signup">Sign Up</Link>
          </p>
          <p>
            Forgot Password ?{" "}
            <button onClick={handleResetPassword} className="btn btn-link">
              Reset Password
            </button>{" "}
          </p>
          <Button className="mx-auto d-block" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
