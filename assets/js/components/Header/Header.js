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


  return (
    <div className="header">
      <Dropdown
        onOptionClick={changeRace}
        options={options}
        selectedOption={currentRace}
      ></Dropdown>
      <div className="stat-container">
        <div>
          <div>
            <h2>Speed:</h2>
            <p>{speed}ft</p>
          </div>
          <div>
            <h2>Lifespan:</h2>
            <p>~{lifespan}yrs</p>
          </div>
        </div>
        <div>
          <div>
            <h2>Dark Vision:</h2>
            <p>{darkvision === "0" ? "N/A" : `${darkvision}ft`}</p>
          </div>
          <div>
            <h2>Size:</h2>
            <p>{size}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
