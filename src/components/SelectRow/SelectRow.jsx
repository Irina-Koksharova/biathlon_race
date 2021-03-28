import PropTypes from 'prop-types';
import {
    primarySelectValue,
    secondarySelectValue
} from 'initial/selectValue';
import filter from 'initial/filter';
import Select from 'components/Select';

const SelectRow = ({ onChangeSelect }) => {
    const { NAME, RATE, HITS, POINTS } = filter
    
    return (
        <tr>
            <Select
                id={NAME}
                initialSortOrder={secondarySelectValue}
                onChangeSelect={onChangeSelect} />
            <td></td>
            <Select
                id={RATE}
                initialSortOrder={secondarySelectValue}
                onChangeSelect={onChangeSelect}
                />
            <Select
                id={HITS}
                initialSortOrder={secondarySelectValue}
                onChangeSelect={onChangeSelect}
            />
            <Select
                id={POINTS}
                initialSortOrder={primarySelectValue}
                onChangeSelect={onChangeSelect}
            />
        </tr>
    )
}

SelectRow.propTypes = {
  onChangeSelect: PropTypes.func.isRequired,
};

export default SelectRow;