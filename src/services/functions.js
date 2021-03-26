const getPoints = (time, quantity) => {
        const totalPoints = Math.round(quantity/time*1000)
        return totalPoints
}

const getSortedFinalResults = (a, b) => b.totalPoints - a.totalPoints

const getNormalizedFilter = (value) => {
        return value.toLowerCase();
}
    
const getFiteredResults = (initialData, filteredValue, filterType) => {
        return initialData.filter(result =>
        result[filteredValue].toLowerCase().includes(getNormalizedFilter(filterType)),
        );
}
    
const getSortedByAscending = (a, b) => a - b

const getSortedByDescending = (a, b) => b - a
    
export {
    getPoints,
    getSortedFinalResults,
    getNormalizedFilter,
    getFiteredResults,
    getSortedByAscending,
    getSortedByDescending
}
