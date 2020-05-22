import React, {useState} from 'react';
import './Home.scss';
import AbilityScoreCounter from '../AbilityScoreCounter/AbilityScoreCounter';
import PointsDisplay from '../PointsDisplay/PointsDisplay';
import { useQuery } from '@apollo/react-hooks';
import getRaces from '../../graphql/getRaces';
 



const Home = () => {

  const { loading, error, data } = useQuery(getRaces);

  console.log(loading, error, data);
  
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
  

  const attributes = [
    {name: 'strength', pointCost: strCost, setPointCost: setStrCost, abilityScore: str, setAbilityScore: setStr },
    {name: 'dexterity', pointCost: dexCost, setPointCost: setDexCost, abilityScore: dex, setAbilityScore: setDex},
    {name: 'constitution', pointCost: conCost, setPointCost: setConCost, abilityScore: con, setAbilityScore: setCon},
    {name: 'intelligence', pointCost: intCost, setPointCost: setIntCost, abilityScore: int, setAbilityScore: setInt},
    {name: 'wisdom', pointCost: wisCost, setPointCost: setWisCost, abilityScore: wis, setAbilityScore: setWis},
    {name: 'charisma', pointCost: chaCost, setPointCost: setChaCost, abilityScore: cha, setAbilityScore: setCha}
  ];

  return(
    <div className='home'>
      <div className='left-container'>
        <div className='attribute-container'>
          {attributes.map((att, index) => ( 
                  <AbilityScoreCounter key={index} attribute={att} racialBonus={0}  ></AbilityScoreCounter>
                ))}
        </div>
        <PointsDisplay attributes={attributes} ></PointsDisplay>
      </div>
      
        
     
    </div>
   )
}
 
 export default Home