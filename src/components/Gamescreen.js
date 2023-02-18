import React, { useState, useEffect } from 'react'
import aud from '../components/assets/aud1.png'
import fifty from '../components/assets/501.png'
import QUESTIONDATA from '../components/Questiondata.js'
import QUESTIONSDATA from '../components/Questiondata.js';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import Reward from './Reward';
import Lifeline from './Lifeline';
import poem from './sounds/poem.mp3'
import correct from './sounds/correct.wav'
import wrong from './sounds/wrong.wav'
import REWARDLIST from '../components/Rewardlist.js'
import Winning from './Winning';

export default function Gamescreen() {
    const [poemSound] = useSound(poem)
    const [correctSound] = useSound(correct);
    const [wrongSound] = useSound(wrong);

    const [question, setQuestion] = useState(QUESTIONDATA[0].question);
    const [option1, setOption1] = useState(QUESTIONDATA[0].option1);
    const [option2, setOption2] = useState(QUESTIONDATA[0].option2);
    const [option3, setOption3] = useState(QUESTIONDATA[0].option3);
    const [option4, setOption4] = useState(QUESTIONDATA[0].option4);
    const [answer, setAnswer] = useState(QUESTIONDATA[0].correct);
    const [index, setIndex] = useState(0)
    const [price, setPrice] = useState(0)
    const [winRate, setwinRate] = useState(90)
    const [loseRate, setLoseRate] = useState(30)
    const [correctBg, setCorrectBg] = useState("")
    const [timerSec, settimerSec]=useState(30);
    const [timer, settimer]=useState(false);
    let setIntId;
    useEffect(() => {
        // Update thefunction timerFunc() {
        
                clearInterval(setIntId);
                // let timer=document.querySelector(".timer_circle");
                // timer.textConte
                settimer(false);
                setIntId= setInterval(() => {
                  if (timerSec>0) {
                    
                    
                    settimerSec(timerSec-1);
                  }
                  else{
                    clearInterval(setIntId);
                  }
                }, 1000);
                return ()=>clearInterval(setIntId);
    },[timer]);
    useEffect(() => {
        // Update thefunction timerFunc() {
        
                clearInterval(setIntId);
                // let timer=document.querySelector(".timer_circle");
                // timer.textConte
                setIntId= setInterval(() => {
                  if (timerSec>0) {
                    
                    
                    settimerSec(timerSec-1);
                  }
                  else{
                    clearInterval(setIntId);
                  }
                }, 1000);
                return ()=>clearInterval(setIntId);
    });
    
    
    function checkOption1() {
        checkAnswer("option1Ans", "option1Box");
    }
    function checkOption2() {
        checkAnswer("option2Ans", "option2Box");
    }
    function checkOption3() {
        checkAnswer("option3Ans", "option3Box");
    }
    function checkOption4() {
        checkAnswer("option4Ans", "option4Box");
    }
    
    function checkAnswer(id, id2) {
        let option = document.getElementById(`${id}`).innerHTML;
        let optionBox = document.getElementById(`${id2}`);
        let ins = 0;
        let li_id_reward = document.getElementById(`li${REWARDLIST[index].id}`)
        let li_id_reward_remove = document.getElementById(`li${REWARDLIST[ins].id}`)
        let rewardMoney = REWARDLIST[index].amount;
        if (timerSec===0) {
            alert('you ran out of time');
            
        }
        else if (answer === option) {
            li_id_reward.classList.add("active")
            optionBox.classList.add("correct")
            setCorrectBg("correct")
            
            correctSound()
            setTimeout(() => {
                optionBox.classList.remove("correct")
                // clearInterval(setIntId)
                // timerFunc();
                settimerSec(30);
                setIndex(index + 1)
                setCorrectBg("")
                setQuestion(QUESTIONDATA[index + 1].question)
                setOption1(QUESTIONDATA[index + 1].option1)
                setOption2(QUESTIONDATA[index + 1].option2)
                setOption3(QUESTIONDATA[index + 1].option3)
                setOption4(QUESTIONDATA[index + 1].option4)
                setAnswer(QUESTIONDATA[index + 1].correct)
                setPrice(rewardMoney);
                if (index !== 0) {
                    li_id_reward_remove.classList.remove("active");
                    ins = ins + 1;
                }
                if (index === QUESTIONSDATA.length - 2) {
                    setIndex(-1);
                }
            }, 3000);

        }
        else {
            wrongSound()
            optionBox.classList.add("wrong")
            setCorrectBg("wrong")
            setTimeout(() => {
                let winningPage = document.getElementById("winningPage");
                winningPage.classList.remove("hidden")
            }, 5000);
        }
    }

    function toggleClass() {
        let rewardPage = document.getElementById("rewardPage");
        let a = rewardPage.classList.toggle("visible");
        if (a === true) {
            poemSound()
        }
    }
    function audiencePull() {
        let audiencePoll = document.getElementById("audiencePoll")
        audiencePoll.classList.toggle("visible");
        let audResult = document.getElementById("audResult").children;
        let audPerc = document.getElementById("audPerc").children;
        let discPerc = document.getElementById("discPerc").children;
        var winPer = 0;
        var losePer = 0;
        for (let i = 0; i < 4; i++) {
            let randomNo = Math.floor(Math.random() * 4);
            let opt1 = audResult[i].innerText;
            let correctOpt = QUESTIONDATA[index].correctOpt
            let optId = audPerc[i].id;
            let discId = discPerc[i].id;
            let opt = document.getElementById(`${optId}`)
            let disc = document.getElementById(`${discId}`)
            if (opt1 === correctOpt) {
                if (randomNo === 0) { winPer = 80; setwinRate(winPer) }
                if (randomNo === 1) { winPer = 70; setwinRate(winPer) }
                if (randomNo === 2) { winPer = 90; setwinRate(winPer) }
                if (randomNo === 3) { winPer = 65; setwinRate(winPer) }
                opt.style.height = `${winRate}%`
                disc.innerText = `${winRate}%`
            }
            else {
                if (randomNo === 0) { losePer = 50; setLoseRate(losePer) }
                if (randomNo === 1) { losePer = 45; setLoseRate(losePer) }
                if (randomNo === 2) { losePer = 40; setLoseRate(losePer) }
                if (randomNo === 3) { losePer = 35; setLoseRate(losePer) }
                opt.style.height = `${loseRate}%`
                disc.innerText = `${loseRate}%`
            }
        }
    }


    return (
        <>
            <div className="container">
                <div className="menu_option">
                    <div className="left_menu flex">
                        <Link to="/">
                            <div className="menu_box">
                                <span className="material-symbols-outlined">
                                    home
                                </span>
                            </div></Link>
                    </div>
                    <div className="right_menu flex">
                        <div className="menu_box mr-1">
                            <img src={fifty} alt="" />
                        </div>
                        <button onClick={audiencePull} className="menu_box mr-1">
                            <img src={aud} alt="" />
                        </button>
                        <div className="menu_box mr-1">
                            <span className="material-symbols-outlined">
                                phone_in_talk
                            </span>
                        </div>
                        <div className="menu_box">
                            <span className="material-symbols-outlined">
                                diamond
                            </span>
                        </div>
                    </div>
                </div>
                <div className="quiz_screen_box">
                    <div className="frame1">
                        <div className="rupees_box">
                            <button id='rupeesBtn' onClick={toggleClass} className="rupees_icon">
                                <span className="material-symbols-outlined">
                                    currency_rupee
                                </span>
                            </button>
                            <div className="rupees_amount flex">
                                <div className="flex">
                                    <span className="material-symbols-outlined">
                                        currency_rupee
                                    </span>
                                    <div>{price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame2">
                        <div className="light_container flex">
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`timer_circle flex `}>
                               {timerSec}
                            </div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                            <div className={`circle ${correctBg}`}></div>
                        </div>
                        
                    </div>
                    <div className="frame2_5">
                    <button onClick={()=>{
                        clearInterval(setIntId)
                        settimer(false)
                    }}>Pause</button>
                    <button onClick={()=>{
                        settimer(true)
                    }}>Restart</button>
                    </div>
                    <div className="frame3">
                    
                        <div className="question_container">
                            <div className="line"></div>
                            <div className="question_screen">
                                <div className="questions flex">
                                    {question}
                                </div>
                            </div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="frame4">
                        <div className="option_container">
                            <div className="option_box_1">
                                <div className="option_box opt1 flex">
                                    <div className="line"></div>
                                    <button onClick={checkOption1} id='option1Box' className="option_screen flex">
                                        <div className="option_no">A.</div>
                                        <div id='option1Ans' className="option_key">{option1}</div>
                                    </button>
                                    <div className="line"></div>
                                </div>
                                <div className="option_box flex">
                                    <div className="line"></div>
                                    <button onClick={checkOption2}
                                        id='option2Box' className="option_screen flex">
                                        <div className="option_no">B.</div>
                                        <div id='option2Ans' className="option_key">{option2}</div>
                                    </button>
                                    <div className="line"></div>
                                </div>
                            </div>
                            <div className="option_box_2">
                                <div className="option_box opt1 flex">
                                    <div className="line"></div>
                                    <button onClick={checkOption3} id='option3Box' className="option_screen flex">
                                        <div className="option_no">C.</div>
                                        <div id='option3Ans' className="option_key">{option3}</div>
                                    </button>
                                    <div className="line"></div>
                                </div>
                                <div className="option_box flex">
                                    <div className="line"></div>
                                    <button onClick={checkOption4} id='option4Box' className="option_screen flex">
                                        <div className="option_no">D.</div>
                                        <div id='option4Ans' className="option_key">{option4}</div>
                                    </button>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Reward />
            <Lifeline />
            <Winning price = {price}/>
            <div className="container hidden">
                <h1>Rotate Your Phone</h1>
                <span className="material-symbols-outlined">
                    screen_rotation
                </span>
            </div>
        </>
    )
};
