    export const getQuestion = async () => {
        let res 
        let data
    try {
        res = await fetch("/question.json",{
            cache:"no-store"
        })
        data= await res.json()
        return data   
    } catch (error) {
        data = []
    }
    
}
