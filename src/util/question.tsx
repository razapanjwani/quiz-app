    export const getQuestion = async () => {
        let res 
        let data
    try {
        res = await fetch("/question.json")
        data= await res.json()
        return data   
    } catch (error) {
        data = []
    }
    
}
