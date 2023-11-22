export const arrayShuffler = (arr) => {
   return arr.sort(()=>Math.random() - 0.5)
}
export const calculatePercentage = (numerator,denomenator) => {
    return Math.ceil(numerator/denomenator * 100)
}