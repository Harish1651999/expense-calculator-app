import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  const barFilledHeight = "0%";

  if (props.max > 0) {
    barFilledHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFilledHeight }}
        ></div>
      </div>
      <div className="chart-bar__label"></div>
    </div>
  );
};

export default ChartBar;
