import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import s from './Table.module.css';
import {
    getPoints,
    getFiteredResults,
    getSortedNameByAscending,
    getSortedNameByDescending,
    getSortedByAscending,
    getSortedByDescending
} from 'services/functions';
import { secondarySelectValue } from 'initial/selectValue';
import tableHeader from 'initial/table-header';
import initialResults from 'initial/data.json';
import filter from 'initial/filter';
import TableTitle from 'components/TableTitle';
import Filter from 'components/Filter';
import IconButton from 'components/IconButton';
import TableHead from 'components/TableHead';
import SelectRow from 'components/SelectRow';
import TableBody from 'components/TableBody';

const Table = () => {
    const { NAME, POINTS } = filter
    const { NOT_SORTED, ACSENDING, DECSENDING } = secondarySelectValue
    const finalResults = initialResults
        .map((participant) => (
        {
            ...participant,
            totalPoints: getPoints(participant.rateOfFire, participant.numberOfHits)
        }
        ))
        .sort(getSortedByDescending(POINTS))
    
    const [sortOrder, setSortOrder] = useState(finalResults)
        
    const onChangeFilter = (e) => {
        const { value } = e.target
        setSortOrder(getFiteredResults(finalResults, NAME, value))
    }

    const getSelectedOrder = (e) => {
        const { id, value } = e.target
        switch (value) {
            case NOT_SORTED:
                setSortOrder(finalResults)
                break;
            case ACSENDING:
                if (id === NAME) {
                    setSortOrder(prevSortOrder => [...prevSortOrder].sort(getSortedNameByAscending))
                }
                setSortOrder(prevSortOrder => [...prevSortOrder].sort(getSortedByAscending(id)))
                break;
            case DECSENDING:
                if (id === NAME) {
                    setSortOrder(prevSortOrder => [...prevSortOrder].sort(getSortedNameByDescending))
                }
                setSortOrder(prevSortOrder => [...prevSortOrder].sort(getSortedByDescending(id)))
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Filter onChangeFilter={onChangeFilter} />
            <IconButton aria-label='Search by name'>
                <FiSearch size={'1.5em'} color={'rgba(78, 78, 78, 0.87)'} />
            </IconButton>
            <table className={s.table}>
                <TableTitle title='European Championship 2021' />
                <TableHead data={tableHeader} />
                <tbody>
                    <SelectRow
                        onChangeFilter={onChangeFilter}
                        onChangeSelect={getSelectedOrder}
                    />
                    <TableBody data={sortOrder} />
                </tbody>
            </table>
        </>
    )
}
        
export default Table;