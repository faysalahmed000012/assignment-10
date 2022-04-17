import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{ height: "100px", backgroundColor: "black" }}
      className="d-flex align-items-center justify-content-center mt-5"
    >
      <p>
        <small className="text-white">
          copyright © Misbahul Haq Faysal {currentYear}{" "}
        </small>
      </p>
    </div>
  );
};

export default Footer;
