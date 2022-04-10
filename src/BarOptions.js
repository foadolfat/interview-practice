import React from "react";
import "./BarOptions.css";

function BarOptions({ text, Icon, active }) {
  return (
    <div className={`barOption ${active && "barOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default BarOptions;