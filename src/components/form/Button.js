import React from "react";

const Button = ({ styles, type, label }) => (
  <button className={styles} type={type}>
    {label}
  </button>
);

export default Button;
