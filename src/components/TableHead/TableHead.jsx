import PropTypes from 'prop-types';
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

TableHead.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
    
export default TableHead;