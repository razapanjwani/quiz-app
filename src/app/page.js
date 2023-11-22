"use client"
import Image from 'next/image'
import styles from './page.module.css'
import {getQuestion} from '@/util/question'
import {arrayShuffler,calculatePercentage} from "@/component/helper/helpingfunction"
import { useEffect, useState } from 'react'
import Progress from '@/component/progressBar/progress'
import  Header  from '@/component/header/header'
import Question from '@/component/question/question'
import Loader from "@/component/loader/loader"
import Scorebar from "@/component/scorebar/scorebar"
export default function Home() {

  const [questions,setQuestions] = useState([])
  const [currentQuestion,setCurrentQuestion] = useState({})
  const [quizScore,setQuizScore] = useState(0)
  const [currentIndex,setCurrentindex] = useState(0)
  const [completedQuiz,setCompletedQuiz] = useState(false)
  const initialState = () => {
    setQuestions([])
    setCurrentQuestion({})
    setQuizScore(0)
    setCurrentindex(0)
    setCompletedQuiz(false)
    loadQuestion()
  }

  async function loadQuestion() {
    let myQuestion = await getQuestion()
    let shuffledArr = arrayShuffler(myQuestion)
    setQuestions(shuffledArr)
  }

  function handleNextQuestion() {
    let indexNO = currentIndex + 1
    if(indexNO < questions.length){
       setCurrentindex(indexNO)
    } else {
       setCompletedQuiz(true)
    }
  }

  function handleQuizScore(){
    setQuizScore(quizScore + 1)
  }
  useEffect(()=>{
    loadQuestion()
  },[])
  
  useEffect(()=>{
    if(questions.length){
      let questionObj = questions[currentIndex]
      setCurrentQuestion(questionObj)
    }
  },[questions,currentIndex,currentQuestion])
  return (
    <>
    {
      questions.length ? 
      <div className={`${styles["app-container"]}`}>
      {completedQuiz? 
      ( 
        <section className={`${styles['quiz-score']} score-div`}>
          <h2>your score is {calculatePercentage(quizScore,questions.length)} %</h2>
          <button onClick={()=>{initialState()}}>PLAY AGAIN</button>
        </section>
      ):
      (
        <>
          
            <div className={`${styles["quiz-content"]}`}>
            <Progress currentQuestionNumber={currentIndex + 1} totalQuestion={questions.length}/>
            <Header currentQuestionNumber={currentIndex + 1} totalQuestion={questions.length} Question={currentQuestion}/>
            <Question Question={currentQuestion} nextQuestion={handleNextQuestion} handleScore ={handleQuizScore} currentNumber={currentIndex + 1} questionCount={questions.length}/>
            <Scorebar quizScore={quizScore} questionCount={questions.length}/>
            </div>
        </>
      )
      }
    </div>
    : 
    <Loader />
    }
    </>
  )
}
