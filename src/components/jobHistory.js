import React from "react";
import { ButtonAnim } from "./lib";
require("./style/jobHistory.scss");

function JobHistory() {
  return (
    <div className="jobHistory">
      <div className="sectionHead">
        <h2>Job History</h2>
        <span className="sectionDevider" />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="jobs">
        <div className="item">
          <div className="head">
            <h4>Senior Creative Design</h4>
            <span>Mansoura FCIS,Egypt</span>
            <ButtonAnim color="cyan" style="clean" label="Jul '15 to Present" />
          </div>
          <p>
            AIt has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="item">
          <div className="head">
            <h4>Senior Creative Design</h4>
            <span>Mansoura FCIS,Egypt</span>
            <ButtonAnim color="cyan" style="clean" label="Jul '15 to Present" />
          </div>
          <p>
            AIt has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="item">
          <div className="head">
            <h4>Senior Creative Design</h4>
            <span>Mansoura FCIS,Egypt</span>
            <ButtonAnim color="cyan" style="clean" label="Jul '15 to Present" />
          </div>
          <p>
            AIt has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="item">
          <div className="head">
            <h4>Senior Creative Design</h4>
            <span>Mansoura FCIS,Egypt</span>
            <ButtonAnim color="cyan" style="clean" label="Jul '15 to Present" />
          </div>
          <p>
            AIt has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobHistory;
