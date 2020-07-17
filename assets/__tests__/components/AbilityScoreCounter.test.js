import React from "react";
import AbilityScoreCounter from "../../js/components/AbilityScoreCounter/AbilityScoreCounter";
import {render} from "@testing-library/react";

test("Renders AbilityScoreCounter", () => {
  let abilityScoreCounter = render(<AbilityScoreCounter attribute={{name: "strength", pointCost: 0, abilityScore: 0, setPointCost: () => {}, setAbilityScore: () => {}}}/>)

  expect(abilityScoreCounter).toMatchSnapshot();
})

