import React from "react";
import { Card } from "react-bootstrap";
import { ChatAlt2Icon } from "@heroicons/react/solid";

const Review = ({ review }) => {
  const { name, picture, about } = review;

  return (
    <div>
      <Card
        className="shadow p-3 mb-5 bg-body rounded"
        style={{ height: "390px" }}
      >
        <Card.Body>
          <img
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            src={picture}
            alt=""
            className="mx-auto d-block"
          />
          <ChatAlt2Icon className="d-block mx-auto w-25"></ChatAlt2Icon>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>{about}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;
