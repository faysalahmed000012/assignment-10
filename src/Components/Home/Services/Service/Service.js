import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { name, price, picture, detail } = service;
  const navigate = useNavigate();
  return (
    <div>
      <Card>
        <Card.Img style={{ height: "200px" }} variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Cost: {price}
          </Card.Subtitle>
          <Card.Text>{detail}</Card.Text>
          <Button onClick={() => navigate("/checkout")} variant="outline-info">
            Checkout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
