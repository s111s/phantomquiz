import React, {useState} from "react";
import Quiz from "./components/Quiz";
import mainLogo from './images/main-logo.png';
import "./App.css"

const App = () => {
  const [showStartPage, setShowStartPage] = useState(true);

  const handleStartQuiz = () => {
    setShowStartPage(false);
  };

  return (
    <div className="center-layout">
      <div className="container">
        {showStartPage ? (
          <div className="start-page">
            <img src={mainLogo} alt="My Confession is You"/>

            <h1>
              เธอคือร่มสีไหน
              <br />
              ในวันที่ฝนพรำ
            </h1>
            
            <p>
              ค้นหาสีของร่มที่เหมาะกับคุณ
            </p>
            <button onClick={handleStartQuiz}>เริ่มกันเลย</button>
          </div>
        ) : (
          <Quiz />
        )}
      </div>
    </div>
  );
};

export default App;
