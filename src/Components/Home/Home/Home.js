import React from "react";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  // home and its components
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
