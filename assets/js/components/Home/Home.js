import React, {useState} from 'react';
import './Home.scss';
import AbilityScoreCounter from '../AbilityScoreCounter/AbilityScoreCounter';




const Home = () => {

  const [pointCost, setPointCost] = useState(0)

  return(
    <div className='home'>
      <AbilityScoreCounter attribute="strength" racialBonus={2} setPointCost={setPointCost} ></AbilityScoreCounter>
    </div>
   )
}
 
 export default Home