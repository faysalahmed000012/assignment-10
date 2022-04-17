import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <h2 className="text-center text-info">Questions</h2>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
