import React, { useState, useEffect } from "react";
import IconButton from '../IconButton/IconButton';
import ResetIcon from '../../../images/icons/refresh.svg';

import './PointsDisplay.scss'

const PointsDisplay = ({ attributes, reset, setTotalCost, totalCost }) => {
  
  useEffect(() => {
    setTotalCost(attributes.reduce((acc, cur) => {
       return acc+cur.pointCost;  
    }, 0))
  }, [attributes])


  return (
    <div className="points-display">
      <div>
        <div>
          {attributes.slice(0,3).map((att) => (
            <span key={att.name.substring(0, 3)} >{`${att.name.substring(0, 3)}: ${att.pointCost} | `}</span>
          ))}
        </div>
        <div>
        {attributes.slice(3,6).map((att) => (
          <span key={att.name.substring(0, 3)} >{`${att.name.substring(0, 3)}: ${att.pointCost} | `}</span>
        ))}
        </div>
      </div>
      
      <span className='total'>
        {totalCost}/27 Points
      </span>
      <IconButton className='reset' tabCheck={0} onClick={reset} isDisabled={false} >
        <ResetIcon />
      </IconButton>
    </div>
  );
};

export default PointsDisplay;
