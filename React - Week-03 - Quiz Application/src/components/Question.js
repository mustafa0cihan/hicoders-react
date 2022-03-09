import QuestionArray from "../services/quizDB"
import React, { useState } from 'react';
import Score from "./Score"

export default function Question() {

    const [count, setCount] = useState(0);
    const [plus, setPlus] = useState(0);
    const [minus, setMinus] = useState(0);

    function valid(e) {
        if (e.target.textContent == QuestionArray[count].correct) {
            setPlus(plus + 1)
            setCount(count + 1)
        } else {
            setCount(count + 1)
            setMinus(minus + 1)
        } if (count >= 10) {
            setCount(0)
            setPlus(0)
            setMinus(0)
        }

    }

    return (

        <div>
            <button id="next-question"
                onClick={
                    () => setCount(count + 1)
                }>Next</button>
            <p id="detail">Question:{count}</p>
            <div>
                <p id="test">
                    {
                        QuestionArray[count].question
                    }</p>
                <button onClick={valid}
                    className="Options">
                    {
                        QuestionArray[count].answers[0]
                    }</button>
                <button onClick={valid}
                    className="Options">
                    {
                        QuestionArray[count].answers[1]
                    }</button>
                <button onClick={valid}
                    className="Options">
                    {
                        QuestionArray[count].answers[2]
                    }</button>
                <button onClick={valid}
                    className="Options">
                    {
                        QuestionArray[count].answers[3]
                    }</button>
            </div>
            <Score plus={plus}
                minus={minus} />

        </div>
    )
}
