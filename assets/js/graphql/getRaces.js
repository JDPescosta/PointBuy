import { gql } from "apollo-boost";

const getRaces = gql`
  query getraces {
    races {
      name
      speed
      abilityScores {
        abilityBonus
        attribute
      }
    }
  }
`;

export default getRaces;