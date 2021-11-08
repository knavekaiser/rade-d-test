import React, { useState, forwardRef } from "react";
import { createPortal } from "react-dom";
require("./style/lib.scss");

export const ButtonAnim = ({ label, style, color, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      className={`buttonAnim ${style || ""} ${hover ? "hover" : ""} ${
        color || ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="anim">
        {label.split("").map((letter, i) => (
          <span
            key={i}
            style={{
              transitionDelay: `${30 * i}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <span className="static">{label}</span>
    </button>
  );
};

export const Modal = forwardRef(
  (
    { containerClass, open, children, onBackdropClick, backdropClass, style },
    ref
  ) => {
    if (!open) return null;
    return createPortal(
      <>
        <div
          className={`modalBackdrop ${backdropClass || ""}`}
          onClick={(e) => {
            console.log("backdropClick");
            e.stopPropagation();
            if (typeof onBackdropClick === "function") {
              onBackdropClick();
            }
          }}
        />
        <div
          style={{ ...style }}
          ref={ref}
          className={`modal ${containerClass || ""}`}
        >
          {children}
        </div>
      </>,
      document.querySelector("#portal")
    );
  }
);
