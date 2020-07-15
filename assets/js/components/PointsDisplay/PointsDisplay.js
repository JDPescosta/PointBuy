import React, { useState, useEffect } from "react";
import IconButton from "../IconButton/IconButton";
import ResetIcon from "../../../images/icons/refresh.svg";

import "./PointsDisplay.scss";

const PointsDisplay = ({ attributes, reset, setTotalCost, totalCost }) => {
  useEffect(() => {
    setTotalCost(
      attributes.reduce((acc, cur) => {
        return acc + cur.pointCost;
      }, 0)
    );
  }, [attributes]);

  const PointsRow = ({ firstIdx, lastIdx }) => (
    <div className="points-row">
      {attributes.slice(firstIdx, lastIdx).map((att) => (
        <span key={att.name.substring(0, 3)}>{`${att.name.substring(0, 3)}: ${
          att.pointCost
        } | `}</span>
      ))}
    </div>
  );

  return (
    <div className="points-display">
      <div className="points-container">
        <PointsRow firstIdx={0} lastIdx={3} />
        <PointsRow firstIdx={3} lastIdx={6} />
      </div>
      <span className="total">{totalCost}/27 Points</span>
      <IconButton
        className="reset"
        tabCheck={0}
        onClick={reset}
        isDisabled={false}
      >
        <ResetIcon />
      </IconButton>
    </div>
  );
};

export default PointsDisplay;
