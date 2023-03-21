import React, { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const GalleryTooltip = (props) => {
  const { gid, product, viewDetail } = props;
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
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
      <Card
        onClick={() => viewDetail(gid, product.id, product.componentName)}
        onMouseEnter={() => tooltipToggle(product.componentName)}
        onMouseLeave={() => tooltipToggle(product.componentName)}
        className="service tooltip-gallery"
        style={{
          cursor: "pointer",
          background: "#fff",
          margin: "15px -11px 10px -11px",
          textAlign: "center",
          height: "170px",
          padding: "20px",
          borderRadius: "0px",
        }}
      >
        <img
          src={product.src}
          alt={product.title}
          style={{
            width: "90px",
            margin: "0 auto",
          }}
        />
        <CardBody className="service-body">
          <CardTitle tag={"h6"} style={{ color: "#5C5C5C" }}>
            {product.title}
          </CardTitle>
        </CardBody>
        <span
          style={{
            visibility: `${isTooltipOpen}`,
          }}
          className="tooltip-gallery-text"
        >
          Tooltip text
        </span>
      </Card>
    </div>
  );
};

export default GalleryTooltip;
