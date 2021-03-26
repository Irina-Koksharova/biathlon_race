import s from './Table.module.css';
import tableHeader from 'initial/table-header';
import results from 'initial/data.json';
import TableTitle from 'components/TableTitle';
import TableHead from 'components/TableHead';
import FilterRow from 'components/FilterRow';
import TableBody from 'components/TableBody';

const Table = () => {
    return (
        <table className={s.table}>
            <TableTitle title='European Championship 2021' />
            <TableHead data={tableHeader} />
            <tbody>
                <FilterRow />
                <TableBody data={results} />
            </tbody>
        </table>
    )
}
    
export default Table