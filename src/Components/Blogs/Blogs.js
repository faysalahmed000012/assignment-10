import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  // blog section which contain questions and answers

  return (
    <div style={{ minHeight: "100vh" }} className="container ">
      <h2 className="text-center text-info">Questions</h2>
      <Card className="mx-auto my-2" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <Card.Title>
            What is difference between authorization and authentication?
          </Card.Title>
          <Card.Text>
            <p>
              Authentication is simply telling who you are and authorization is
              what you can do based on who you are. Here are details:-
            </p>
            <p>
              <strong>Authentication:</strong> Authentication is identity of
              user where a client computer give identity like by providing
              username and password to enter.This could be by giving email and a
              password or by google , facebook or any social platform account.
            </p>
            <p>
              <strong>Authorization:</strong> Authorization is what user can
              access by who this user is like accessing particular resources or
              react . It checks the users right to do that. For example for
              facebook accessing private groups commenting reacting and so on.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mx-auto my-2" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <Card.Title>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Card.Title>
          <Card.Text>
            <p>
              Firebase is a development platform developed by google which gives
              up multiple features like authentication , hosting etc. Firebase
              is clean easy to use and it also has some other cool features like
              analytics to get user behavior and by using this knowledge you can
              upgrade your app. And many other features made firebase special
              than others.
            </p>
            <p>Some other alternatives of firebase are:</p>
            <p>
              Back4Ap , Parse, AWS amplify, Backendless , Kuzzle etc. Most of
              them are free to start and costs a little , gives more than
              authentication and easy to use{" "}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mx-auto my-2" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <Card.Title>
            What other services does firebase provide other than authentication
            ?
          </Card.Title>
          <Card.Text>
            <p>
              Firebase a development platform developed by Google. It mainly
              used for authentication but it provides other important features
              like{" "}
            </p>
            <li>Cloud Storage</li>
            <li>Hosting</li>
            <li>Google Analytics</li>
            <li>Cloud Messaging</li>
            <li>Dynamic Links</li>
            <p>
              All of these are most common features of firebase.Firebase access
              to google analytics a really essential for author to understand
              user behavior .Cloud messaging allows you to deliver and use
              massage and notification without any cost.And cloud storage allows
              to storing and managing user data that generates by user
              interactions and so on.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
