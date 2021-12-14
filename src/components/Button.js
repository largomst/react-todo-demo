import React from "react";
import PropTypes from "prop-types";

export const Button = ({ text, color, onClick }) => {
  return (
    <button
      className={`rounded-md px-4 py-2 ${color} text-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: "bg-black",
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Button;
