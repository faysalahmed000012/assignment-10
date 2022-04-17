import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <h2 className="text-center text-info">Questions</h2>
      <Card>
        <Card.Body>
          <Card.Title>
            What is difference between authorization and authentication?
          </Card.Title>
          <Card.Text>
            Authentication is simply telling who you are and authorization is
            what you can do based on who you are
            <p>
              <strong>Authentication:</strong>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
