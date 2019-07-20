import React from "react";

const Button = ({ styles, type, label, form = "", handleEvent, action }) => (
  <button
    className={styles}
    type={type}
    form={form}
    onClick={handleEvent}
    disabled={action}
  >
    {label}
  </button>
);

export default Button;
