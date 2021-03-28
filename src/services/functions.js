const getPoints = (time, quantity) => {
        const totalPoints = Math.round(quantity/time*1000)
        return totalPoints
}

const getNormalizedFilter = (value) => {
        return value.toLowerCase();
}
    
const getFiteredResults = (initialData, filteredValue, filterType) => {
        return initialData.filter(result =>
        result[filteredValue].toLowerCase().includes(getNormalizedFilter(filterType)),
        );
}

const getSortedNameByAscending = (a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
                return -1;
        }
        if (nameA > nameB) {
                return 1;
        }
        return 0;
}

const getSortedNameByDescending = (a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
                return 1;
        }
        if (nameA > nameB) {
                return -1;
        }
        return 0;
}
    
const getSortedByAscending = (property) => {
        const getSortedList = (a, b) => a[`${property}`] - b[`${property}`]
        return getSortedList
}

const getSortedByDescending = (property) => {
        const getSortedList = (a, b) => b[`${property}`] - a[`${property}`]
        return getSortedList
}
    
export {
        getPoints,
        getNormalizedFilter,
        getFiteredResults,
        getSortedNameByAscending,
        getSortedNameByDescending,
        getSortedByAscending,
        getSortedByDescending
}
