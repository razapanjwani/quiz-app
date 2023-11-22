import { useState,useEffect } from "react"
import Button from "@/component/button/buttin"
import { arrayShuffler } from "../helper/helpingfunction"
const Question = ({Question,nextQuestion,handleScore,currentNumber,questionCount}) => {
    const [selectedAnswer,setSelectedAnswer] = useState(null)
    const [allAnswer,setAllAnswer] = useState([])
    let {type,question,correctAnswer,inCorrectAnswer} = Question
    function handleAnswer(ans){
        if (selectedAnswer) return
        setSelectedAnswer(ans)        
    }
    function handleNextQuestion(){
        const isCorrectAnswer = selectedAnswer === correctAnswer
        if(isCorrectAnswer){
            handleScore()
        }
        nextQuestion()
        setSelectedAnswer(null)
    }
    function displayResult(){
        const isCorrectAnswer = selectedAnswer === correctAnswer
        const value = currentNumber === questionCount ? "Check Score" : "Next Question"
        return (
            selectedAnswer && 
            <div>
                <h3 className="answer-heading">
                    {isCorrectAnswer ? "right":"wrong"}
                </h3>
                <Button value={value} onClick={handleNextQuestion}/>
            </div>
        )
    }
    useEffect(()=>{
        if (!correctAnswer || !inCorrectAnswer) return
        let randomArr = arrayShuffler([...inCorrectAnswer,correctAnswer])
        setAllAnswer(randomArr)
    },[correctAnswer,inCorrectAnswer])
    
    return(
        <>
            <div>
                <h3>{question}</h3>
                <div className="btn-div">
                    {allAnswer && allAnswer.map((ans,index)=>{
                           let value = type === "Boolean" ?
                           ans === "True" ? "yes":"no"
                           :ans
                        return(
                            <>
                                <Button key={index} value={value} onClick={()=>{handleAnswer(ans)}}/>
                            </>
                        )
                    })}
                </div>
                <div>
                    {displayResult()}
                </div>
            </div>
        </>
    )
}
export default Question