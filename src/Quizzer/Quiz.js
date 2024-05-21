import React, {useRef, useState} from "react"

import "./Quiz.css"
import {data} from "./data"

const Quiz = () => {

    let [questionIndex, setQuestionIndex] = useState(0);

    let [question, setQuestion] = useState(data[questionIndex]);
    let [score, setScore] = useState(0);

    let optiontext1 = useRef(null);
    let optiontext2 = useRef(null);
    let optiontext3 = useRef(null);
    let optiontext4 = useRef(null);

    var quizBody = document.getElementById("QuizBody");
    var scoreBody = document.getElementById("ScoreBody");

    const onNextBtn = () => {
        // Check right answer and add score
        var selectedRadio = document.querySelector('input[name="option"]:checked');
        if(selectedRadio === null) {
            window.alert("Select an option!");
        }
        else {
            if((parseInt(selectedRadio.id) === question.correct)) {
                setScore(score+1);
            }

            selectedRadio.checked = false;

            if(questionIndex+1 >= data.length) {
                quizBody.hidden = true;
                scoreBody.hidden = false;
            }

            else {
                setQuestionIndex(++questionIndex);
                setQuestion(data[questionIndex]);
            }
        }
    }

    return(
    
        <div class="mainBody">

            <div id="QuizBody">
                <h1>Quiz App!</h1>
                <hr />
                <p class="subtitle">Answer the following 5 questions!</p>

                <p id="questionText" class="questionText">{question.question}</p>
                <form class="formBody">
                    <div>
                    <input type="radio" name="option" id="1"></input>
                    <label ref={optiontext1} class="optionText" id="textoption1">{question.option1}</label>
                    </div>
                    <div>
                    <input type="radio" name="option" id="2"></input>
                    <label ref={optiontext2} class="optionText" id="textoption2">{question.option2}</label>
                    </div>
                    <div>
                    <input type="radio" name="option" id="3"></input>
                    <label ref={optiontext3} class="optionText" id="textoption3">{question.option3}</label>
                    </div>
                    <div>
                    <input type="radio" name="option" id="4"></input>
                    <label ref={optiontext4} class="optionText" id="textoption4">{question.option4}</label>
                    </div>
                </form>

                <button id="nextBtn" onClick={onNextBtn}>Next</button>
                <p class="remainingText">Remaining {data.length - questionIndex} questions</p>
                <p class="remainingText">Score: {score}</p>
            </div>

            <div id="ScoreBody" hidden="true">
                <div class="questionText scoreText">
                    <p>Your Score: {score}</p>
                </div>
            </div>

        </div>
    )
}

export default Quiz