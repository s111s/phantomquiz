import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

import "../styles/next-btn.css"

// phantom images
import valHelsing from '../images/characters/val-helsing.png';
import werewolf from '../images/characters/werewolf.png';
import spider from '../images/characters/spider.png';
import vampire from '../images/characters/vampire.png';
import jackOLantern from '../images/characters/jack-o-lantern.png';
import dancer from '../images/characters/dancer.png';
import mummy from '../images/characters/mummy.png';
import bloodyMary from '../images/characters/bloody-mary.png';
import skeleton from '../images/characters/skeleton.png';

const questions = [
  {
    question: "คำถามที่ 1 (1/10): ไร้สัญญาณโทรศัพท์ ทางเข้าตรอกปกคลุมไปด้วยหมอก เธอเลือกถืออะไรติดตัวไป?",
    options: [
      { text: "🔪 ของแหลมที่พอจะใช้เป็นอาวุธได้", drink: "แวนเฮลซิ่ง" },
      { text: "🍞 ขนมปังแก้หิวระหว่างทาง", drink: "แวมไพร์" },
      { text: "🌙 พระเหรียญที่พ่อเคยให้", drink: "มัมมี่" },
      { text: "🕷 เดินเข้าไปตัวเปล่าด้วยความอยากรู้", drink: "ปีศาจแมงมุม" },
      { text: "🎭 ทุกอย่างที่คว้าได้ตรงหน้า หยิบ ๆ ไปก่อน", drink: "ผีนางรำ" }
    ]
  },
  {
    question: "คำถามที่ 2 (2/10): เสียงปริศนาเรียกชื่อจริงของเธอออกมา เธอเลือกตอบกลับแบบใด?",
    options: [
      { text: "ใครอยู่ตรงนั้นน่ะ !?", drink: "มนุษย์หมาป่า" },
      { text: "เงียบ… ฟังเพื่อหาจังหวะ", drink: "ปีศาจแมงมุม" },
      { text: "ส่งเสียงหัวเราะเบา ๆ กลับไป", drink: "แจ็คโอแลนเทิร์น" },
      { text: "สวดมนต์", drink: "แวนเฮลซิ่ง" },
      { text: "กรี๊ดสิวะ", drink: "บลัดดี้แมรี่" }
    ]
  },
  {
    question: "คำถามที่ 3 (3/10): เดินตามเสียงประหลาด เธอพบว่ามีคนแปลกหน้าบาดเจ็บขอความช่วยเหลือ",
    options: [
      { text: "รีบช่วยทันทีไม่ลังเล", drink: "แวนเฮลซิ่ง" },
      { text: "สงสัยก่อนว่าเขาไว้ใจได้ไหม", drink: "มัมมี่" },
      { text: "ชวนคุยให้เขาคลายเจ็บ", drink: "ผีนางรำ" },
      { text: "ขอความช่วยเหลือเขาอีกที", drink: "แวมไพร์" },
      { text: "ปล่อยผ่านอย่างเย็นชา “ชีวิตใครชีวิตมัน”", drink: "Skeleton" }
    ]
  },
  {
    question: "คำถามที่ 4 (4/10): คนแปลกหน้าพูดกับเธอว่า “หากต้องเลือกระหว่าง ความจริง กับ ความสุขชั่วคราว ?”",
    options: [
      { text: "เลือกความจริง ถึงจะเจ็บก็อยากรู้", drink: "ปีศาจแมงมุม" },
      { text: "อความสุขสิ ! ชีวิตสั้นจะตาย", drink: "แจ็คโอแลนเทิร์น" },
      { text: "ความจริง ใคร ๆ ก็ต้องพบเจอความจริง", drink: "แวนเฮลซิ่ง" },
      { text: "“อ้าว พี่ไม่เจ็บแล้วเหรอ”", drink: "บลัดดี้แมรี่" },
      { text: "ขอเงียบ ไม่อยากวุ่นวายกับอะไร", drink: "Skeleton" },
    ]
  },
  {
    question: "คำถามที่ 5 (5/10): คนแปลกหน้าหายวับไปต่อหน้าต่อตา",
    options: [
      { text: "พยามหาสัญญาณโทรศัพท์ไปเล่าให้เพื่อนฟัง", drink: "มัมมี่" },
      { text: "สงสัยตาฝาด", drink: "แวมไพร์" },
      { text: "โกรธและแสดงพลังให้รู้ว่าอย่ามาหลอกกันนะโว้ย", drink: "มนุษย์หมาป่า" },
      { text: "จด ไว้เล่าในเดอะโกสต์", drink: "ผีนางรำ" },
      { text: "เฉย ๆ เดินต่อ", drink: "Skeleton" }
    ]
  },
  {
    question: "คำถามที่ 6 (6/10): เธอสังเกตเห็นเงาของตัวเองขยับก่อนร่างจริงจะขยับ",
    options: [
      { text: "โบราณว่าอย่าไปทัก", drink: "มัมมี่" },
      { text: "เดินเข้าหาเงานั้น ด้วยความอยากรู้", drink: "ปีศาจแมงมุม" },
      { text: "ใครมาเล่นเกมอะไรวะ", drink: "แจ็คโอแลนเทิร์น" },
      { text: "รำใส่แม่ง", drink: "ผีนางรำ" },
      { text: "หลอกให้เงานั้นกลัวแทน", drink: "มนุษย์หมาป่า" }
    ]
  },
  {
    question: "คำถามที่ 7 (7/10): ยมทูตในผ้าคลุมสีดำปรากฎตัว แจ้งว่าอายุไขของเธอหมดแล้ว ของขวัญวันสุดท้ายที่เธออยากได้จากยมทูตคือ?",
    options: [
      { text: "“พี่มาเป็นยมทูตได้ไงอะพี่”", drink: "บลัดดี้แมรี่" },
      { text: "ความลับของศรัตรู", drink: "ปีศาจแมงมุม" },
      { text: "ความงามอมตะแม้จะตุ่ยเย่ไปแล้ว", drink: "แวมไพร์" },
      { text: "ต่อรองขอเวลาเพิ่ม", drink: "แจ็คโอแลนเทิร์น" },
      { text: "ความรวยสุดขีด", drink: "Skeleton" }
    ]
  },
  {
    question: "คำถามที่ 8 (8/10): 24 ชั่วโมงสุดท้าย เธอกลับสู่โลกความจริง เห็นใครบางคนสะท้อนอยู่ในกระจก แต่ไม่ใช่ตัวเอง",
    options: [
      { text: "แล้วเจ้าของร่างจะไปอยู่ยังไงวะเนี่ย", drink: "บลัดดี้แมรี่" },
      { text: "หาของส่วนตัวที่จะบอกได้ว่าคนนี้คือใคร", drink: "มัมมี่" },
      { text: "ยิ้มให้ น่าสนุกจังโว้ย", drink: "Skeleton" },
      { text: "ทำลายกระจกทันที", drink: "มนุษย์หมาป่า" },
      { text: "ยักคิ้วอย่างท้าทาย “แกก็ไม่ต่างจากฉันหรอก”", drink: "แวมไพร์" }
    ]
  },
  {
    question: "คำถามที่ 9 (9/10): มีเสียงจากยมทูต ว่าเธอจะพกของจากโลกความจริงไปยังโลกหลังความตายได้ 1 ชิ้น เธออยากหยิบอะไรไป",
    options: [
      { text: "กล้องถ่ายรูป", drink: "ผีนางรำ" },
      { text: "ปืน", drink: "มนุษย์หมาป่า" },
      { text: "สมุดบันทึกกับปากกา", drink: "ปีศาจแมงมุม" },
      { text: "บอกมาก่อนสิฟะว่าชั้นอยู่ในร่างใคร", drink: "แจ็คโอแลนเทิร์น" },
      { text: "ของที่ระลึกจากคนรัก", drink: "มัมมี่" }
    ]
  },
  {
    question: "คำถามที่ 10 (10/10): เมื่อถึงเวลาเลือกคู่ครองในโลกที่ลับลา เธออยากได้ใคร?",
    options: [
      { text: "คนที่อยู่ด้วยแล้วอบอุ่น", drink: "บลัดดี้แมรี่" },
      { text: "คนที่ศีลเสมอกัน", drink: "มนุษย์หมาป่า" },
      { text: "คนโรแมนติก", drink: "ผีนางรำ" },
      { text: "คนที่สนุกและไม่กลัวความมืด", drink: "แจ็คโอแลนเทิร์น" },
      { text: "คนที่ช่วยฉันให้อภัยตัวเอง", drink: "แวนเฮลซิ่ง" }
    ]
  },
];

const drinks = {
  "แวนเฮลซิ่ง": { 
    image: valHelsing, 
    compatible: "Skeleton", 
    compatible_description: "Skeleton จะช่วยให้แวนเฮลซิ่งเรียนรู้ “การให้อภัย” และปล่อยวางจากความสมบูรณ์แบบ ทั้งคู่สมดุลกันระหว่าง “การกระทำเพื่อโลก” และ “การสงบเพื่อใจ”",
    title: "แวนเฮลซิ่ง – The Reformer: อุดมการณ์, ความดี, ความยุติธรรม",
    description: "เจ้าระเบียบ มีอุดมการณ์แรง รักความถูกต้อง ชอบเป็นที่พึ่งของคนอื่น และมักเป็นคนที่มองเห็นสิ่งที่ “ควรปรับปรุง” เพื่อทำให้โลกดีขึ้น",
    advantage: "ซื่อสัตย์ มีจิตสำนึกสูง มีเป้าหมายที่มั่นคง และกล้าทำสิ่งที่ถูกต้องแม้ต้องยืนคนเดียว",
    disadvantage: "ใช้ศีลธรรมและเหตุผลดึงสติคนอื่น",
    character: skeleton
  },
  "มนุษย์หมาป่า": { 
    image: werewolf, 
    compatible: "แวมไพร์", 
    compatible_description: "แวมไพร์เติมความสง่างามและชั้นเชิงให้หมาป่าที่ดิบเกินไป ส่วนหมาป่าเติม “หัวใจจริง” ให้แวมไพร์ที่บางครั้งหลงในภาพลักษณ์ เป็นคู่พลังระหว่าง “สัญชาตญาณ” กับ “ความทะเยอทะยาน”",
    title: "มนุษย์หมาป่า – The Challenger: แรงขับเคลื่อน, พลัง, การปกป้อง",
    description: "กล้าหาญ มั่นใจ รักอิสระและไม่ยอมให้ใครกดขี่ เป็นนักต่อสู้เพื่อสิ่งที่เชื่อ",
    advantage: "ซื่อสัตย์กับหัวใจตัวเอง มีพลังดึงดูด และพร้อมปกป้องคนที่รักสุดชีวิต",
    disadvantage: "ปลุกใจคน สู้กับความอยุติธรรม",
    character: vampire
  },
  "ปีศาจแมงมุม": { 
    image: spider, 
    compatible: "ผีนางรำ", 
    compatible_description: "ผีนางรำจะปลดล็อก “อารมณ์” ให้ปีศาจแมงมุมที่เย็นชาเกินไป ส่วนแมงมุมก็ช่วยให้นางรำมีสติและใช้ความงามอย่างชาญฉลาด เป็นการผสมของ “สติปัญญา” และ “อารมณ์ศิลป์”",
    title: "ปีศาจแมงมุม – The Investigator: ปัญญา, การวางแผน, ความลึกลับ",
    description: "ช่างสังเกต ชอบเก็บข้อมูล และวิเคราะห์ทุกสิ่งอย่างมีระบบ รักความลึกลับ ไม่ใช่เพราะกลัว แต่เพราะอยากเข้าใจมัน",
    advantage: "มีสมาธิสูง รอบคอบ รู้เท่าทันอารมณ์คนอื่น และคิดเร็วในสถานการณ์คับขัน",
    disadvantage: "มองเห็นความเชื่อมโยงในทุกสิ่งและคุมเกมจากข้างหลัง",
    character: dancer 
  },
  "แวมไพร์": { 
    image: vampire, 
    compatible: "มนุษย์หมาป่า", 
    compatible_description: "หมาป่าจะสอนให้แวมไพร์รักโดยไม่ต้องครอบครอง ส่วนแวมไพร์จะช่วยให้หมาป่ารู้จักค้นหา “เสน่ห์ของตัวเอง” พลังคู่ตรงข้ามที่เข้ากันอย่างแปลกประหลาด",
    title: "แวมไพร์ – The Achiever: เสน่ห์, ความสำเร็จ, การครอบครอง",
    description: "มีเสน่ห์แบบอันตราย รู้วิธีทำให้คนอื่นหลงใหล มีความทะเยอทะยานและรักการแข่งขัน",
    advantage: "มีแรงขับมหาศาลในการทำสิ่งให้สำเร็จ มีความมั่นใจและเป็นแรงบันดาลใจให้ผู้อื่น",
    disadvantage: "ใช้เสน่ห์และแรงศรัทธาเปลี่ยนโชคชะตาตนเอง",
    character: werewolf 
  },
  "แจ็คโอแลนเทิร์น": { 
    image: jackOLantern, 
    compatible: "บลัดดี้แมรี่", 
    compatible_description: "แจ็คจะเป็นแสงให้แมรี่ ส่วนแมรี่จะสอนแจ็คให้ยอมรับ “ความเศร้าที่แท้จริง” ทั้งคู่เรียนรู้ว่าความสุขและความเศร้าคือด้านเดียวกันของชีวิต",
    title: "แจ็คโอแลนเทิร์น – The Enthusiast: ความสนุก, การหลบหนีความเศร้า, แสงไฟในความมืด",
    description: "ร่าเริง มองโลกในแง่ดี ชอบผจญภัยและไม่ชอบอยู่กับความเศร้า มักเป็นแสงไฟให้เพื่อน ๆ รอบตัว",
    advantage: "มีพลังบวก สร้างรอยยิ้มให้คนอื่นเสมอ และมองหาความหมายใหม่แม้ในหายนะ",
    disadvantage: "จุดประกายความหวังในสถานที่มืดมิด",
    character: bloodyMary 
  },
  "ผีนางรำ": { 
    image: dancer, 
    compatible: "ปีศาจแมงมุม", 
    compatible_description: "ปีศาจแมงมุมเติมเหตุผลให้นางรำที่หลงอารมณ์ ส่วนนางรำช่วยแมงมุมให้รู้จักความงามของการมีหัวใจ ทั้งคู่คือสมดุลของ “สติ” และ “ศิลป์”",
    title: "ผีนางรำ – The Individualist: ความงาม, อารมณ์, การแสดงออก",
    description: "มีจิตใจศิลปิน ช่างฝัน อ่อนไหวต่อความรู้สึกของตัวเองและคนอื่น ชอบแสดงตัวตนผ่านศิลปะหรือการแสดงออก",
    advantage: "เข้าใจอารมณ์ลึกซึ้ง มีเสน่ห์แบบลึกลับ และทำให้สิ่งธรรมดากลายเป็นเรื่องมีความหมาย",
    disadvantage: "ใช้ศิลปะค้นความจริงในหัวใจคนอื่น",
    character: spider 
  },
  "มัมมี่": { 
    image: mummy, 
    compatible: "มัมมี่", 
    compatible_description: "มัมมี่เป็นตัวแทนของความมั่นคง ไม่ต้องการใครมาเติมเต็ม คู่แท้ของมัมมี่คือ “ตัวเองในอดีต” ผู้ที่เขายังภักดีและต้องเรียนรู้จะปล่อยวางจากมัน",
    title: "มัมมี่ – The Loyalist: ภักดี, การปกป้อง, ความมั่นคง",
    description: "เชื่อในความสัมพันธ์ ยึดมั่นในคำสัญญา ระแวดระวังแต่มีหัวใจอบอุ่น",
    advantage: "ซื่อสัตย์ รับผิดชอบ และมักเป็นคนที่อยู่ข้างเราในยามที่ไม่มีใคร",
    disadvantage: "มีความทรงจำเป็นสมบัติล้ำค่า",
    character: mummy 
  },
  "บลัดดี้แมรี่": { 
    image: bloodyMary, 
    compatible: "แจ็คโอแลนเทิร์น", 
    compatible_description: "แจ็คจะช่วยแมรี่หัวเราะอีกครั้ง ส่วนแมรี่จะทำให้แจ็คเข้าใจว่าความเศร้าไม่ใช่สิ่งต้องหนี แต่เป็นส่วนหนึ่งของความงามในชีวิต",
    title: "บลัดดี้แมรี่ – The Dark Individualist: ความเจ็บปวด, เข้าใจผู้อื่น, การทบทวนตัวเอง",
    description: "ลึกซึ้ง อ่อนไหว และเปราะบางกับอดีต มักสะท้อนความรู้สึกคนอื่นเหมือนกระจก",
    advantage: "มีความเข้าใจในความทุกข์ของผู้อื่นอย่างแท้จริง และมีคำพูดที่สั่นสะเทือนใจ",
    disadvantage: "เผยความจริงที่ซ่อนในใจคน",
    character: jackOLantern 
  },
  "Skeleton": { 
    image: skeleton, 
    compatible: "แวนเฮลซิ่ง", 
    compatible_description: "Skeleton จะช่วยให้แวนเฮลซิ่งพักใจ ส่วนแวนเฮลซิ่งจะจุดไฟในหัวใจ Skeleton อีกครั้ง เป็นคู่ที่สมดุลในการใช้ชีวิตไปด้วยกัน",
    title: "Skeleton – The Peacemaker: สงบ, การยอมรับ, การเข้าใจชีวิต",
    description: "เยือกเย็น เข้าใจคนอื่นเสมอ รักความสงบและเกลียดการขัดแย้ง เป็นผู้ประสานความขัดแย้ง",
    advantage: "ให้อภัยง่าย มีพลังแห่งความนิ่งที่ทำให้คนรอบข้างรู้สึกปลอดภัย",
    disadvantage: "ทำให้ทุกความวุ่นวายกลับสู่ความนิ่ง",
    character: valHelsing
  }
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);

  function handleAnswer(drink) {
    setScores((prevScores) => {
      const newScores = { ...prevScores };
  
      // Decrease the score for the previously selected drink
      if (selectedAnswer) {
        newScores[selectedAnswer] -= 1;
      }
  
      // Increase the score for the newly selected drink
      newScores[drink] = (newScores[drink] || 0) + 1;
  
      return newScores;
    });
  
    setSelectedAnswer(drink); // Mark the new answer as selected
  }
  

  function handleNextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      calculateResult();
    }
  }

  function calculateResult() {
    let maxDrink = null;
    let maxScore = 0;

    for (const [drink, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxDrink = drink;
        maxScore = score;
      }
    }

    setResult(maxDrink);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScores({});
    setResult(null);
  }

  if (result) {
    const compatible = drinks[result].compatible;
    const character = drinks[result].character;
    return (
      <Result
        drink={result}
        compatible={compatible}
        compatible_description={drinks[compatible].title}
        compatible_description2={drinks[result].compatible_description}
        title={drinks[result].title}
        description={drinks[result].description}
        advantage={drinks[result].advantage}
        disadvantage={drinks[result].disadvantage}
        drinkImage={drinks[result].image}
        compatibleImage={drinks[compatible].image}
        character={character}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div className="quiz-container-with-next">
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />

      <button className="next-btn"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer} // Disable the button until an answer is selected
      >
        ถัดไป &gt;
      </button>
    </div>
);
}

export default Quiz;
