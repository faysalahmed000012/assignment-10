import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import google from "../../../Images/google2 (1).png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorMassage;
  if (error) {
    errorMassage = (
      <p className="text-danger my-4 text-center">{error?.message}</p>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center justify-content-center ">
        <div style={{ height: "1px" }} className="bg-info w-25"></div>
        <p className="mx-3 mt-2">or</p>
        <div style={{ height: "1px" }} className="bg-info w-25"></div>
      </div>
      {errorMassage}
      <Button
        className="d-block mx-auto"
        onClick={() => signInWithGoogle()}
        variant="outline-info"
      >
        {" "}
        <img src={google} alt="" /> Google Sign In
      </Button>
    </div>
  );
};

export default SocialLogin;
