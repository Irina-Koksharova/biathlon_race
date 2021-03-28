import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ onChangeFilter }) => {
    return (
        <input
            className={s.input}
            onChange={onChangeFilter}
            placeholder='Search by name'
            autoComplete="off"
        />
    )
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
    
export default Filter;