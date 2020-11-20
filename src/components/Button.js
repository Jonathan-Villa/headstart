import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn-primary", "btn--outline"];
const SIZES = ["btn-medium", "btn--large"];

//create the button
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        // Using single quotes will not read the JavaScript variable
        // Use the back ticks to reference a javascript variable as a template literal `` - which is in the top left of the keyboard
        // instead of single quotes ''
        className={"btn ${checkButtonStyle} ${checkButtonSize}"}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
