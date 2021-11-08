import React from "react";
require("./style/skills.scss");

function SkillBar({ label, value }) {
  return (
    <div className="skillBar">
      <h3>{label}</h3>
      <div className="outline">
        <div
          className="fill"
          style={{ width: `${value}%` }}
          data-value={value + "%"}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <div className="texts">
        <h2>I Got The Skills</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quasi
          mollitia rem quisquam atque pariatur, a ut, amet illum quibusdam
          facere vitae delectus reiciendis fugit tempora esse sint deserunt
          dolorum.
        </p>
      </div>
      <div className="skillBars">
        <SkillBar label="HTML5" value={85} />
        <SkillBar label="CSS3" value={75} />
        <SkillBar label="J-Query" value={90} />
        <SkillBar label="Bootstrap" value={60} />
      </div>
    </div>
  );
}

export default Skills;
