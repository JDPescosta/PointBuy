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
  const [displayBonus, setDisplayBonus] = useState(-1);
  const [tooltipShown, setTooltipShown] = useState(false);

  useEffect(() => {
    let dynamicBonus = +dynamicFlag;

    setTotalScore(
      racialBonus === "dynamic"
        ? attribute.abilityScore + dynamicBonus
        : attribute.abilityScore + racialBonus
    );
  }, [attribute.pointCost, racialBonus, dynamicFlag]);

  useEffect(() => {
    setDisplayBonus(genDisplayBonus(totalScore));
  }, [totalScore]);

  const genDisplayBonus = (score) =>
    Math.floor((totalScore - 10) / 2) > 0
      ? `+ ${Math.floor((totalScore - 10) / 2)}`
      : Math.floor((totalScore - 10) / 2);

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
          value: displayBonus,
        },
        { label: "Skills:", value: "Acrobatics, Sleight of hand, Stealth" },
      ],
    },
    constitution: {
      text: [
        {
          label: "Hitpoint Bonus:",
          value: `Bonus hitpoints gained each level:  
          ${racialBonus === 2 ? `+ ${Math.floor((totalScore - 10) / 2) + 1}` : displayBonus}`, //This takes into account Hill Dwarves racial of +1 to hp a level 
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

  const ChevronBonus = ({racialBonus, dynamicFlag, dynamicScore}) => (
    <div onMouseEnter={() => setTooltipShown(true)} onMouseLeave={() => setTooltipShown(false)}>
      {racialBonus === "dynamic" && (dynamicFlag || dynamicScore < 2) && (
        <span className={"chevron-anchor"}>
          {tooltipShown && (
            <div className="chevron-tooltip">
              {dynamicFlag && "You've increased this Ability Score by 1."}
              {!dynamicFlag && "You can choose to increase this ability score due to your Ability Score Increase racial."}
            </div>
          )}
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
      {racialBonus > 0 && (
        <span className={"chevron-anchor"}>
          {tooltipShown && (
            <div className="chevron-tooltip">Your race is increaing this ability score by {racialBonus}.</div>
          )}
          {racialBonus === 1 ? <Chevron className="chevron" /> : <DoubleChevron className="chevron" />}
        </span>
      )}
    </div>
  );

  return (
    <div className="ability-score-counter">
      <div className="counter-container">
        <div className="score-display">
          <IconButton
            tabCheck={false}
            isDisabled={attribute.abilityScore <= 8}
            onClick={() => modifyAbilityScore(0)}
          >
            <MinusIcon />
          </IconButton>
          <div>{totalScore}</div>
          <IconButton
            tabCheck={false}
            isDisabled={attribute.abilityScore >= 15}
            onClick={() => modifyAbilityScore(1)}
          >
            <PlusIcon />
          </IconButton>
        </div>
        <div className="display-bonus">{displayBonus}</div>
      </div>
      <h2 className="attribute">
        {attribute.name}
        <ChevronBonus racialBonus={racialBonus} dynamicFlag={dynamicFlag} dynamicScore={dynamicScore}/>
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
