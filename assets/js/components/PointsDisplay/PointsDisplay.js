import React, { useState, useEffect } from "react";
import IconButton from '../IconButton/IconButton';
import ResetIcon from '../../../images/icons/refresh.svg';

import './PointsDisplay.scss'

const PointsDisplay = ({ attributes }) => {
  const reset = () => {
    attributes.map((att) => {
      att.setPointCost(0);
      att.setAbilityScore(8);
    });
    setTotal(0);
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(attributes.reduce((acc, cur) => {
       return acc+cur.pointCost;  
    }, 0))
  }, [attributes])


  return (
    <div className="points-display">
      {attributes.map((att) => (
        <span key={att.name.substring(0, 3)} >{`${att.name.substring(0, 3)}: ${att.pointCost} | `}</span>
      ))}
      <span className='total'>
        {total}/27 Points
      </span>
      <IconButton className='reset' tabCheck={0} onClick={reset} isDisabled={false} >
        <ResetIcon />
      </IconButton>
    </div>
  );
};

export default PointsDisplay;
