import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaRegHeart,
} from "react-icons/fa";
require("./style/footer.scss");

function Footer() {
  return (
    <footer>
      <img src="/asset/img/logo.png" />
      <div className="socials">
        <h5>Follow Me</h5>
        <div className="links">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaDribbble />
          </a>
          <a href="#">
            <FaBehance />
          </a>
        </div>
      </div>
      <p className="copy">
        Copyright ©All rights reserved | KARMEN is made with <FaRegHeart /> by
        <a href="#">KarimEzZat</a>
      </p>
    </footer>
  );
}

export default Footer;
