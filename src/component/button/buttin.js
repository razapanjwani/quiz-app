"use client"
const Button = ({value,onClick}) => {
    return(
        <>
            <button className={`${"ans-btn"}`} onClick={onClick}>
                {value}
            </button>
        </>
    )
} 
export default Button