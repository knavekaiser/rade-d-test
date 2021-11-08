import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Modal } from "./lib";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
require("./style/latestWork.scss");

const images = [
  "/asset/img/w1.jpg",
  "/asset/img/w2.jpg",
  "/asset/img/w3.jpg",
  "/asset/img/w4.jpg",
  "/asset/img/w5.jpg",
  "/asset/img/w6.jpg",
];
const works = [
  {
    title: "Video Editing",
    subTitle: "Video Production",
    tags: ["creative"],
    index: 0,
  },
  {
    title: "Ui / Ux",
    subTitle: "Web Design",
    tags: ["webDesign", "branding"],
    index: 1,
  },
  {
    title: "Creative Shot",
    subTitle: "Photography",
    tags: ["branding"],
    index: 2,
  },
  {
    title: "Creative Design",
    subTitle: "Unique design",
    tags: ["webDesign"],
    index: 3,
  },
  {
    title: "Web Design",
    subTitle: "Onepage Project",
    tags: ["creative", "webDesign"],
    index: 4,
  },
  {
    title: "Brand Design",
    subTitle: "Brand Logo Project",
    tags: ["branding"],
    index: 5,
  },
];

function LatestWorks() {
  const [category, setCategory] = useState("all");
  const [showImg, setShowImg] = useState(false);
  return (
    <div className="latestWorks">
      <div className="sectionHead">
        <h2>Latest Works</h2>
        <span className="sectionDevider" />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <ul className="categories">
        <li
          className={`${category === "all" ? "active" : ""}`}
          onClick={() => setCategory("all")}
        >
          All Categories
        </li>
        <li
          className={`${category === "branding" ? "active" : ""}`}
          onClick={() => setCategory("branding")}
        >
          Branding
        </li>
        <li
          className={`${category === "creative" ? "active" : ""}`}
          onClick={() => setCategory("creative")}
        >
          Creative Work
        </li>
        <li
          className={`${category === "webDesign" ? "active" : ""}`}
          onClick={() => setCategory("webDesign")}
        >
          Web Design
        </li>
      </ul>
      <div className="content">
        <AnimateSharedLayout>
          <AnimatePresence>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 340: 1, 768: 2, 990: 3 }}
            >
              <Masonry gutter="30px">
                {works
                  .filter((item) =>
                    category === "all" ? true : item.tags.includes(category)
                  )
                  .map((work, i) => (
                    <motion.div
                      layout
                      key={i}
                      className="work"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <div className="thumb">
                        <img src={images[work.index]} />
                      </div>
                      <div
                        className="overlay"
                        onClick={() => setShowImg(images[work.index])}
                      >
                        <h4>
                          {work.title}
                          <span>{work.subTitle}</span>
                        </h4>
                      </div>
                    </motion.div>
                  ))}
              </Masonry>
            </ResponsiveMasonry>
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
      <Modal
        open={showImg}
        onBackdropClick={() => setShowImg(false)}
        containerClass="workimg"
      >
        <img src={showImg} />
      </Modal>
    </div>
  );
}
export default LatestWorks;
