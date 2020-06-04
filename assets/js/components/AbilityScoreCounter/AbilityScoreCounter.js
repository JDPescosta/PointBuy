import React, { useState, useEffect } from "react";
import IconButton from "../IconButton/IconButton";
import PlusIcon from "../../../images/icons/plusIcon.svg";
import MinusIcon from "../../../images/icons/minusIcon.svg";

import "./AbilityScoreCounter.scss";

const AbilityScoreCounter = ({ attribute, racialBonus }) => {
  
  const [totalScore, setTotalScore] = useState(8 + racialBonus);

  useEffect(() => {
    setTotalScore(attribute.abilityScore + racialBonus);
  }, [attribute.pointCost, racialBonus])

  const attText = {
    strength: {
      text: [
        { label: "Carry weight:", value: `${totalScore * 15}lb` },
        { label: "Push weight:", value: `${totalScore * 30}lb` },
        { label: "Long jump:", value: `${totalScore / 2}/${totalScore}ft` },
        {
          label: "High jump:",
          value: `${(3 + (totalScore - 10) / 2) / 2}/${
            3 + (totalScore - 10) / 2
          }ft`,
        },
        { label: "Skills:", value: "Athletics" },
      ],
    },
    dexterity: {
      text: [
        {
          label: "Base initiative:",
          value:
            Math.floor((totalScore - 10) / 2) > 0
              ? `+ ${Math.floor((totalScore - 10) / 2)}`
              : Math.floor((totalScore - 10) / 2),
        },
        { label: "Skills:", value: "Acrobatics, Sleight of hand, Stealth" },
      ],
    },
    constitution: {
      text: [
        {
          label: "Starting Hitpoints:",
          value: `Class Starting Hitpoints 
          ${
            Math.floor((totalScore - 10) / 2) >= 0
              ? `+ ${Math.floor((totalScore - 10) / 2)}`
              : Math.floor((totalScore - 10) / 2)
          }`,
        },
      ],
    },
    intelligence: {
      text: [
        {
          label: "Skills:",
          value: "Arcana, History, Investigation, Nature, Religion",
        },
      ],
    },
    wisdom: {
      text: [
        {
          label: "Skills:",
          value: "Animal handling, Insight, Medicine, Perception, Survival",
        },
      ],
    },
    charisma: {
      text: [
        {
          label: "Skills:",
          value: "Deception, Intimidation, Performance, Persuasion",
        },
      ],
    },
  };

  const modifyAbilityScore = (isPositive) => {
    let score = attribute.abilityScore;

    if (score < 15 && isPositive) {
      score++;
    } else if (score > 8 && !isPositive) {
      score--;
    }

    let pointCost = score < 14 ? score - 8 : 7 + (score - 14) * 2;

    attribute.setPointCost(pointCost);
    attribute.setAbilityScore(score);
    setTotalScore(score + racialBonus);
  };

  return (
    <div className="AbilityScoreCounter">
      <div>
        <div className="score-display">
          <IconButton
            tabCheck={false}
            isDisabled={attribute.abilityScore <= 8 ? true : false}
            onClick={() => modifyAbilityScore(0)}
          >
            <MinusIcon />
          </IconButton>
          <div>{totalScore}</div>
          <IconButton
            tabCheck={false}
            isDisabled={attribute.abilityScore >= 15 ? true : false}
            onClick={() => modifyAbilityScore(1)}
          >
            <PlusIcon />
          </IconButton>
        </div>
        <div className="bonus-display">
          {Math.floor((totalScore - 10) / 2) > 0
            ? `+ ${Math.floor((totalScore - 10) / 2)}`
            : Math.floor((totalScore - 10) / 2)}
        </div>
      </div>
      <h2 className="attribute">{attribute.name}</h2>

      {attText[attribute.name].text.map(({ label, value }, index) => (
        <p key={attribute.name + index}>
          <span>{label}</span> {value}
        </p>
      ))}
    </div>
  );
};

export default AbilityScoreCounter;
