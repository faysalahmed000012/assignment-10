import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h3 className="text-center mt-4">
        <span className="text-info">Login</span> Here !!!
      </h3>
      <div className="container row  mx-auto mt-3">
        <Form className="col-lg-6 mx-auto mt-5">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>

          <p className="mt-3">
            Already Have An Account? <Link to="/signup">Sign Up</Link>
          </p>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
