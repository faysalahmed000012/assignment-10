import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, price, picture, detail } = service;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Cost: {price}
          </Card.Subtitle>
          <Card.Text>{detail}</Card.Text>
          <Button variant="primary">Checkout</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
