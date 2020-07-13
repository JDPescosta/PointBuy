import React, { useState, useEffect } from "react";
import IconButton from "../IconButton/IconButton";
import PlusIcon from "../../../images/icons/plusIcon.svg";
import MinusIcon from "../../../images/icons/minusIcon.svg";
import Chevron from "../../../images/icons/chevron-up.svg";
import DoubleChevron from "../../../images/icons/double-chevron-up.svg";
import ChevronOutline from "../../../images/icons/chevron-outline.svg";

import "./AbilityScoreCounter.scss";

const AbilityScoreCounter = ({
  attribute = {},
  racialBonus,
  dynamicScore,
  setDynamicScore,
}) => {
  const [totalScore, setTotalScore] =
    racialBonus === "dynamic" ? useState(8) : useState(8 + racialBonus);
  const [dynamicFlag, setDynamicFlag] = useState(false);

  useEffect(() => {
    let dynamicBonus = dynamicFlag ? 1 : 0;

    setTotalScore(
      racialBonus === "dynamic"
        ? attribute.abilityScore + dynamicBonus
        : attribute.abilityScore + racialBonus
    );
  }, [attribute.pointCost, racialBonus, dynamicFlag]);

  console.log(attribute);

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

  const modifyDynamicScore = () => {
    if (!dynamicFlag && dynamicScore > 1) return;

    let modifier = dynamicFlag ? -1 : 1;

    setDynamicScore(dynamicScore + modifier);
    setDynamicFlag(!dynamicFlag);
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
  };

  return (
    <div className="ability-score-counter">
      <div className="counter-container">
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
      <h2 className="attribute">
        {attribute.name}
        {racialBonus === "dynamic" && (dynamicFlag || dynamicScore < 2) && (
          <span>
            <IconButton
              tabCheck={false}
              isDisabled={false}
              onClick={modifyDynamicScore}
            >
              {dynamicFlag && <Chevron className="chevron" />}
              {!dynamicFlag && <ChevronOutline className="chevron" />}
            </IconButton>
          </span>
        )}
        {racialBonus === 1 && (
          <span>
            <Chevron className="chevron" />
          </span>
        )}
        {racialBonus === 2 && (
          <span>
            <DoubleChevron className="chevron" />
          </span>
        )}
      </h2>

      {attText[attribute.name].text.map(({ label, value }, index) => (
        <p key={attribute.name + index}>
          <span>{label}</span> {value}
        </p>
      ))}
    </div>
  );
};

export default AbilityScoreCounter;
