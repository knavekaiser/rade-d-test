import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaVimeoV,
  FaPinterest,
} from "react-icons/fa";

require("./style/header.scss");

function Header() {
  const [open, setOpen] = useState(false);
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const scrollHandler = (e) => {
      if (window.pageYOffset > 82) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <header className={`${bg ? "bg" : ""}`}>
      <a href="#">
        <img src="/asset/img/logo.png" className="logo" />
      </a>
      <button
        className={`menuBtn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className="line top" />
        <span className="line mid" />
        <span className="line bottom" />
      </button>
      <div className={`menu ${open ? "open" : ""}`}>
        <div className="links">
          <div className="wrapper">
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">SKILLS</a>
            <a href="#">WORKS</a>
            <a href="#">HISTORY</a>
            <a href="#">SERVICES</a>
            <a href="#">BLOG</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
        <div className="socials">
          <div className="wrapper">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaVimeoV />
            </a>
            <a href="#">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
