import React, { useState } from "react";
import "./NavItemDetailsTooltip.css";

const NavItemDetailsTooltip = (props) => {
  const { pid, child, details, modalTopColor, modalBottomColor } = props;
  const [isTooltipOpen, setTooltip] = useState("hidden");
  const tooltipToggle = (hasDetails) => {
    if (hasDetails !== null) {
      setTooltip("hidden");
    } else {
      if (isTooltipOpen === "visible") {
        setTooltip("hidden");
      } else {
        setTooltip("visible");
      }
    }
  };
  return (
    <div className="nav-item-details-tooltip">
      <li
        onClick={() => details(pid, child.id, child.componentName)}
        onMouseEnter={() => tooltipToggle(child.componentName)}
        onMouseLeave={() => tooltipToggle(child.componentName)}
      >
        {child.title}
      </li>
      <span
        style={{
          visibility: `${isTooltipOpen}`,
          color: `${modalBottomColor}`,
          background: `${modalTopColor}`,
        }}
        className="nav-item-details-tooltip-text"
      >
        Service Unavilable!
      </span>
      <span
        className="nav-item-details-tooltip-triangle-shape"
        style={{
          visibility: `${isTooltipOpen}`,
          //   color: `${modalBottomColor}`,
          //   background: `${modalTopColor}`,
          //   content: "",
          //   position: "absolute",
          //   top: "35%",
          //   right: "40%",
          //   marginTop: "-20px",
          //   borderWidth: "30px",
          //   borderBottom: "1px",
          borderColor: `transparent ${modalTopColor} transparent transparent`,
        }}
      ></span>
    </div>
  );
};

export default NavItemDetailsTooltip;
