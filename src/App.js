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
              วิญญานตนไหน
              <br />
              สะท้อนจิตใจของเธอ
            </h1>
            
            <p>
              ในหมู่บ้านที่หมอกเย็นปกคลุม หนึ่งคืนในรอบปี ที่รอยต่อระหว่างคนเป็นและวิญญาณเปิดออก ว่ากันว่า หากใครเดินผ่านตรอกนั้นไปจะได้เจอกับ “วิญญาณประจำตัวในตำนาน” ตนที่มีพลัง… สะท้อนจิตใจของเธอในตอนนั้นที่สุด
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
