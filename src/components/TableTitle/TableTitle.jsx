import PropTypes from 'prop-types';
import s from './TableTitle.module.css';

const TableTitle = ({ title }) => {
    return (
        <caption className={s.title}>{title}</caption>
    )
}

TableTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TableTitle;