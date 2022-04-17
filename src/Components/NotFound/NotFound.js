import React from "react";
import notFound from "../../Images/not-found.png";

const NotFound = () => {
  return (
    <div className="container mx-auto">
      <h4 className="text-warning text-center">Oopss!!!</h4>
      <p className="text-center">The Page You are looking for is not found</p>
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
