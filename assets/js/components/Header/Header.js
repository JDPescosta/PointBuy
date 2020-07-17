import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Header.scss";

const Header = ({ racesArray, setCurrentRace, currentRace }) => {
  const { speed, darkvision, lifespan, size } = currentRace || {};
  const races = racesArray || [];
  let currentOptionIdx;

  const changeRace = (selectedOption) => {
    const newRace = races.find((race) => race.name === selectedOption);
    currentOptionIdx = races.findIndex((race) => race.name === selectedOption);
    setCurrentRace(newRace);
  };

  const options = races.map((race) => race.name);

  const Stat = ({label, info}) => (
    <div className="stat">
      <h2>{label}</h2>
      <p>{info}</p>
    </div>
  );

  return (
    <div className="header">
      <Dropdown
        onOptionClick={changeRace}
        options={options}
        selectedOption={currentRace}
      />
      <div className="stat-container">
        <div className="stat-column">
          <Stat label="Speed:" info={`${speed}ft`} />
          <Stat label="Lifespan:" info={`~${lifespan}yrs`} />
        </div>
        <div className="stat-column">
          <Stat label="Dark Vision:" info={`${darkvision}ft`} />
          <Stat label="Size:" info={size} />
        </div>
      </div>
    </div>
  );
};

export default Header;
