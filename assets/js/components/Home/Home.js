import React, { useState, useEffect } from "react";
import "./Home.scss";
import AbilityScoreCounter from "../AbilityScoreCounter/AbilityScoreCounter";
import PointsDisplay from "../PointsDisplay/PointsDisplay";
import Header from "../Header/Header";
import { useQuery } from "@apollo/react-hooks";
import getRaces from "../../graphql/getRaces";

const Home = () => {
  const { loading, error, data } = useQuery(getRaces);

  const { races } = data || [];

  //console.log(loading, error, data);

  const [selectedRace, setSelectedRace] = useState(null);

  useEffect(() => {
    if (data !== undefined) setSelectedRace(races[3]);
  }, [data]);

  const [str, setStr] = useState(8);
  const [dex, setDex] = useState(8);
  const [con, setCon] = useState(8);
  const [int, setInt] = useState(8);
  const [wis, setWis] = useState(8);
  const [cha, setCha] = useState(8);

  const [strCost, setStrCost] = useState(0);
  const [dexCost, setDexCost] = useState(0);
  const [conCost, setConCost] = useState(0);
  const [intCost, setIntCost] = useState(0);
  const [wisCost, setWisCost] = useState(0);
  const [chaCost, setChaCost] = useState(0);

  const [totalCost, setTotalCost] = useState(0);

  const reset = () => {
    attributes.map((att) => {
      att.setPointCost(0);
      att.setAbilityScore(8);
    });
    setTotalCost(0);
  };

  const checkRacialBonus = (attName) => {
    const { abilityScores } = selectedRace || [];

    for (let i = 0; i < abilityScores.length; i++) {
      if (
        attName.substring(0, 3) === abilityScores[i].attribute &&
        abilityScores[i].dynamicType === ""
      ) {
        return abilityScores[i].abilityBonus;
      }
    }
    return 0;
  };

  const attributes = [
    {
      name: "strength",
      pointCost: strCost,
      setPointCost: setStrCost,
      abilityScore: str,
      setAbilityScore: setStr,
    },
    {
      name: "dexterity",
      pointCost: dexCost,
      setPointCost: setDexCost,
      abilityScore: dex,
      setAbilityScore: setDex,
    },
    {
      name: "constitution",
      pointCost: conCost,
      setPointCost: setConCost,
      abilityScore: con,
      setAbilityScore: setCon,
    },
    {
      name: "intelligence",
      pointCost: intCost,
      setPointCost: setIntCost,
      abilityScore: int,
      setAbilityScore: setInt,
    },
    {
      name: "wisdom",
      pointCost: wisCost,
      setPointCost: setWisCost,
      abilityScore: wis,
      setAbilityScore: setWis,
    },
    {
      name: "charisma",
      pointCost: chaCost,
      setPointCost: setChaCost,
      abilityScore: cha,
      setAbilityScore: setCha,
    },
  ];

  return (
    <>
      {data && selectedRace && (
        <div className="home">
          <div className="left-container">
            <Header
              racesArray={races}
              setCurrentRace={setSelectedRace}
              currentRace={selectedRace}
            ></Header>
            <div className="attribute-container">
              {attributes.map((att, index) => (
                <AbilityScoreCounter
                  key={index}
                  attribute={att}
                  racialBonus={checkRacialBonus(att.name)}
                ></AbilityScoreCounter>
              ))}
            </div>
            <PointsDisplay attributes={attributes} reset={reset} setTotalCost={setTotalCost} totalCost={totalCost} ></PointsDisplay>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
