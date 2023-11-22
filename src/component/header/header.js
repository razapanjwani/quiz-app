const Header = ({currentQuestionNumber,totalQuestion,Question}) => {
    let {category,question,type} = Question
    return(
        <>
            <div>
                <h1>{`Question ${currentQuestionNumber} of ${totalQuestion}`}</h1>
                <div>{category}</div>
            </div>
        </>
    )
}
export default Header;