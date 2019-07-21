import React from "react";

const Button = ({ styles, type, label, form = "", handleEvent }) => (
  <button className={styles} type={type} form={form} onClick={handleEvent}>
    {label}
  </button>
);

export default Button;
