import React from "react";
import { FaArchive, FaTrophy, FaUsers } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";
require("./style/counter.scss");

function Counter() {
  return (
    <div className="counter">
      <div className="item">
        <div className="wave">
          <FaArchive />
        </div>
        <span>245</span>
        <h5>Total Projects</h5>
      </div>
      <div className="item">
        <div className="wave">
          <FaTrophy />
        </div>
        <span>535</span>
        <h5>Trophy Won</h5>
      </div>
      <div className="item">
        <div className="wave">
          <FaUsers />
        </div>
        <span>288</span>
        <h5>EXPERIENCES STAFF</h5>
      </div>
      <div className="item">
        <div className="wave">
          <FiSmile />
        </div>
        <span>750</span>
        <h5>Happy Clients</h5>
      </div>
    </div>
  );
}

export default Counter;
