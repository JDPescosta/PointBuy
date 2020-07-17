import { gql } from "apollo-boost";

const getRaces = gql`
  query getraces{
    races{
      name
      speed
      size
      darkvision
      lifespan
      imgPath
      abilityScores{
        attribute
        abilityBonus
        dynamicType
      }
      uniqueRacials{
        name
        racialText
      }
    }
  }
`;

export default getRaces;