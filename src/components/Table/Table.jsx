import { useState } from 'react';
import s from './Table.module.css';
import {
    getPoints,
    getSortedFinalResults,
    getFiteredResults,
    getSortedByAscending,
    getSortedByDescending
} from 'services/functions';
import tableHeader from 'initial/table-header';
import initialResults from 'initial/data.json';
import filter from 'initial/filter';
import TableTitle from 'components/TableTitle';
import TableHead from 'components/TableHead';
import FilterRow from 'components/FilterRow';
import TableBody from 'components/TableBody';

const Table = () => {
    const [namefilter, setNameFilter] = useState('')
    const [countryfilter, setCountryFilter] = useState('')
    const { NAME, COUNTRY } = filter

    const finalResults = initialResults.map((participant) => (
        {...participant, totalPoints: getPoints(participant.rateOfFire, participant.numberOfHits)}
    ))
    const filterByName = getFiteredResults(finalResults.sort(getSortedFinalResults), NAME, namefilter)    
    const filterByCountry = getFiteredResults(filterByName, COUNTRY, countryfilter)

    const onChangeFilter = (e) => {
        e.target.id === NAME
            ? setNameFilter(e.target.value)
            : setCountryFilter(e.target.value)
    }

    const getSelectValue = (e) => {
        console.log(e.target.value)
        // e.target.value === 'descending' ? getSortedByDescending() : getSortedByAscending()
    }

    return (
        <table className={s.table}>
            <TableTitle title='European Championship 2021' />
            <TableHead data={tableHeader} />
            <tbody>
                <FilterRow
                    onChangeFilter={onChangeFilter}
                    onChangeSelect={getSelectValue}
                />
                <TableBody data={filterByCountry} />
            </tbody>
        </table>
    )
}
    
export default Table