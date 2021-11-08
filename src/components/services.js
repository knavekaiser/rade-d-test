import React from "react";
import { FaRegLightbulb, FaChartBar } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
require("./style/counter.scss");

function Services() {
  return (
    <div className="services counter">
      <div className="head">
        <h2>Service Offers</h2>
        <span className="sectionDevider" />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="item">
        <div className="wave">
          <IoDiamondOutline />
        </div>
        <h5>App Development</h5>
        <p>If you’re looking blank casvsettes on the web, you may confuse.</p>
      </div>
      <div className="item">
        <div className="wave">
          <FaChartBar />
        </div>
        <h5>App Development</h5>
        <p>If you’re looking blank casvsettes on the web, you may confuse.</p>
      </div>
      <div className="item">
        <div className="wave">
          <FaRegLightbulb />
        </div>
        <h5>Web Development</h5>
        <p>If you’re looking blank casvsettes on the web, you may confuse.</p>
      </div>
      <div className="item">
        <div className="wave">
          <AiOutlineDashboard />
        </div>
        <h5>Web Development</h5>
        <p>If you’re looking blank casvsettes on the web, you may confuse.</p>
      </div>
    </div>
  );
}

export default Services;
