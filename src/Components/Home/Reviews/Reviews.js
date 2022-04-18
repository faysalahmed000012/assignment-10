import React, { useEffect, useState } from "react";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-5 container">
      <h3 className="text-center text-info">
        What My Customers Say About Me {reviews.length}
      </h3>

      <div className=" row row-cols-lg-3 gy-4 mt-3">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
