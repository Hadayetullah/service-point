import React from "react";
import "./Spinner.css";

const Spinner = () => {
  const height = window.screen.availHeight;
  console.log(height);
  return (
    <div
      style={{ height: `${height - 265}px`, width: "100%", paddingTop: "5%" }}
    >
      <div class="loader"></div>
    </div>
  );
};

export default Spinner;
