import { useState } from 'react';
import s from './Table.module.css';
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

    const onChangeFilter = (e) => {
        e.target.id === NAME
            ? setNameFilter(e.target.value)
            : setCountryFilter(e.target.value)
    }

    const getNormalizedFilter = (value) => {
        return value.toLowerCase();
    }

    const getFiteredResults = (initialData, filteredValue, filterType) => {
        return initialData.filter(result =>
        result[filteredValue].toLowerCase().includes(getNormalizedFilter(filterType)),
    );
    }

    const filterByName = getFiteredResults(initialResults, NAME, namefilter)    
    const filterByCountry = getFiteredResults(filterByName, COUNTRY, countryfilter)

    return (
        <table className={s.table}>
            <TableTitle title='European Championship 2021' />
            <TableHead data={tableHeader} />
            <tbody>
                <FilterRow
                    onChangeFilter={onChangeFilter}
                />
                <TableBody data={filterByCountry} />
            </tbody>
        </table>
    )
}
    
export default Table