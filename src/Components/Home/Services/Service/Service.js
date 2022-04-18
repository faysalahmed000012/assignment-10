import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { name, price, picture, detail } = service;
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ height: "487px" }}>
        <Card.Img style={{ height: "200px" }} variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Cost: {price}
          </Card.Subtitle>
          <Card.Text>{detail}</Card.Text>
          <Button
            className="d-flex align-items-center justify-content-center"
            onClick={() => navigate("/checkout")}
            variant="outline-info"
          >
            Checkout{"  "}
            <ArrowNarrowRightIcon
              style={{ width: "20px", margin: "3px" }}
            ></ArrowNarrowRightIcon>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
