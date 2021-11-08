import React from "react";
import { ButtonAnim } from "./lib";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
require("react-multi-carousel/lib/styles.css");
require("./style/banner.scss");

function Brands() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 5,
    },
    largeTablet: {
      breakpoint: { max: 1200, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="brands">
      <Carousel
        containerClass="wrapper"
        responsive={responsive}
        draggable={true}
        autoPlaySpeed={1000}
        infinite={true}
        transitionDuration={500}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        itemClass="items"
      >
        <img src="/asset/img/b1.png" />
        <img src="/asset/img/b2.png" />
        <img src="/asset/img/b3.png" />
        <img src="/asset/img/b4.png" />
        <img src="/asset/img/b5.png" />
      </Carousel>
    </div>
  );
}

function Banner() {
  return (
    <div id="home" className="banner">
      <div className="texts">
        <motion.div
          className="chatBubble"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
        >
          It's me
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 1,
          }}
        >
          Naeem Ahmad
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
        >
          Senior Creative <span className="red">Designer</span> and Content{" "}
          <span className="cyan">Developer</span>
        </motion.h3>
        <ButtonAnim label="Download CV" />
      </div>
      <div className="imgContainer">
        <img src="/asset/img/banner-img.png" />
      </div>
      <Brands />
    </div>
  );
}

export default Banner;
