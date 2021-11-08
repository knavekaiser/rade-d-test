import React from "react";
import Carousel from "react-multi-carousel";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
require("./style/reviews.scss");

const reviews = [
  {
    mark: 99,
    name: "Karim Ezzat",
    review:
      "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face. and she is the host to your journey.",
  },
  {
    mark: 99,
    name: "Ahmed Ezzat",
    review:
      "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face. and she is the host to your journey.",
  },
  {
    mark: 99,
    name: "Sara Ezzat",
    review:
      "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face. and she is the host to your journey.",
  },
];

function Reviews() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="reviews">
      <Carousel
        containerClass="wrapper"
        responsive={responsive}
        dotListClass="dot"
        draggable={true}
        autoPlaySpeed={1000}
        infinite={true}
        showDots={true}
        customLeftArrow=<IoIosArrowRoundBack />
        customRightArrow=<IoIosArrowRoundForward />
      >
        {reviews.map((review, i) => (
          <div className="item" key={i}>
            <h4>{review.mark}</h4>
            <h3>{review.name}</h3>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Reviews;
