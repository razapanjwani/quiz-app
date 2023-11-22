import { useEffect, useState } from "react"
import { calculatePercentage } from "../helper/helpingfunction"

const Progress = ({currentQuestionNumber,totalQuestion,quiz}) => {
    const getProgress = () => {
        let progress = calculatePercentage(currentQuestionNumber,totalQuestion)
        setwidth(progress)
        
    }
    useEffect(()=>{
        getProgress()
    })
    const [Width,setwidth] = useState(currentQuestionNumber)
    return(
        <>
            <div className="progress-bar" style={{width:`${Width}%`}}>
                
            </div>
        </>
    )
}
export default Progress