import React from "react";
import { ButtonAnim } from "./lib";
require("./style/about.scss");

function About() {
  return (
    <div className="about">
      <div className="imgContainer">
        <img src="/asset/img/about-img.png" />
      </div>
      <div className="content">
        <h2>About Myself</h2>
        <span className="sectionDevider" />
        <div className="paragraphs">
          <p>
            I’m a Front End Developer. I have a Passion for Creating Clean,
            Beautiful, Interactive, Minimalistic, Responsive and User Friendly
            UI, Developed by Modular, Scalable and Functional Code. When, while
            the lovely valley teems with vapour around me.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="actions">
          <ButtonAnim label="Hire Me" style="clean" color="cyan" />
          <ButtonAnim label="Resume" />
        </div>
      </div>
    </div>
  );
}

export default About;
