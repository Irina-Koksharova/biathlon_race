import s from './TableHead.module.css';

const TableHead = ({ data }) => {
    return (
        <thead className={s.head}>
            <tr>
                {Object.values(data).map(columnHeader => (
                    <th
                        className={s.data}
                        key={columnHeader}>
                        {columnHeader}
                    </th>
                ))}
            </tr>
        </thead>
    )
}
    
export default TableHead