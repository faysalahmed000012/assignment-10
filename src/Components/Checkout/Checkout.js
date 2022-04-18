import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Thank You For Checkout, I will catch you within few hours");
  };

  return (
    <div className="vh-100">
      <h3 className="text-info text-center mt-5">
        Please Describe Your Problem
      </h3>
      <div className="container row  mx-auto mt-2">
        <Form className="col-lg-6 mx-auto mt-5" onSubmit={handleSubmit}>
          <FloatingLabel controlId="name" label="Name">
            <Form.Control name="name" type="name" placeholder="name" required />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="my-3"
          >
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Describe Your Problem"
              style={{ height: "100px" }}
              required
            />
          </FloatingLabel>

          <Button className="mx-auto d-block mt-3" variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
