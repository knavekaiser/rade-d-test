import React from "react";
import { ButtonAnim } from "./lib";
require("./style/contact.scss");

function Contact() {
  return (
    <div className="contact">
      <h3>Contact Me</h3>
      <span className="devider" />
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. some for as low
        as $.17 each.
      </p>
      <div className="contactInfo">
        <span>+22 12345 678 9012</span>
        <span>information@example.com</span>
        <span>KarimEzZat.me</span>
      </div>
      <ButtonAnim label="Hire Me" style="clean" />
    </div>
  );
}

export default Contact;
