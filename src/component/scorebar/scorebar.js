"use client"
import {useState,useEffect} from "react"
import {calculatePercentage} from "@/component/helper/helpingfunction"
const Scorebar = ({quizScore,questionCount}) => {
    const getScore = () => {
        let progress = calculatePercentage(quizScore,questionCount)
        setwidth(progress)
        
    }
    useEffect(()=>{
        getScore()
    })
    const [Width,setwidth] = useState(quizScore)
    
    return(
        <>
            <h3 className="score">{calculatePercentage(quizScore,questionCount)}%/100%</h3>
            <div style={{width: `${Width}%`}} className="score-bar">
            </div>

        </>
    )
}
export default Scorebar