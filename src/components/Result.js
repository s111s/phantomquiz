import React from "react";
import "../styles/result.css"

function Result({ drink, compatible, compatible_description, compatible_description2, title, description, advantage, disadvantage, drinkImage, compatibleImage, character, restartQuiz }) {
  return (
    <div className='borderedArea'>
      <div className="resultContainer">
        <div className='resultHeader'>
          <h3>⋆˙𐙚 สีของร่มที่เหมาะกับคุณคือ ❅˙⋆</h3>
        </div>
        
        <div className='resultDrink'>
          <h1>{title}</h1>
            <img src={drinkImage} alt={drink} />
            <p>{description}</p>
            <p>{advantage}</p>
            <p><i><b>คำแนะนำจากร่มของคุณ: </b></i>{disadvantage}</p>
        </div>

        <div className='resultPair'>

          <div className="pairLeft">
            <h4>เนื้อคู่ของคุณคือ</h4>
            <h3>{compatible}</h3>
          </div>

          <div className='pairRight'>
            <img src={compatibleImage} alt={compatible} />
          </div>

        </div>
        <div className='endImage'>
          <p>{compatible_description}</p>
          <p>{compatible_description2}</p>
          <p>
            <img src={character} alt={character} />
          </p>
        </div>
        <div className='attribution'><a href="https://x.com/mjgt_v" target="_blank" rel="noopener noreferrer">สนับสนุนพวกเราได้ที่ X: @MJGT_V</a></div>
      </div>
      
      <button className='quizAgain' onClick={restartQuiz}>ทดสอบใหม่อีกครั้ง &gt;</button>
    </div>
  );
}

export default Result;
