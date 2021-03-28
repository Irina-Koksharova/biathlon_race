import PropTypes from 'prop-types';
import s from './Select.module.css';

const Select = ({ id, initialSortOrder, onChangeSelect }) => {
    const onLossOfFocus = (e) => {
        const selected = e.target.options[0].selected = true
        return selected
    }

    return (
        <td>
            <select
                className={s.select}
                id={id}
                onChange={onChangeSelect}
                onBlur={onLossOfFocus}
                autoFocus>
                {Object.values(initialSortOrder).map(value => (
                    <option key={value}>{value}</option>
                ))}
            </select>
        </td>
    )
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    initialSortOrder: PropTypes.objectOf(PropTypes.string).isRequired,
    onChangeSelect: PropTypes.func.isRequired,
};

export default Select;