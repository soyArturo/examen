import React from "react";

const Button = ({ name, click }) => {
  return (
    <button className="btn" onClick={click}>
      {name}
    </button>
  );
};

export default Button;
