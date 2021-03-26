import filter from 'initial/filter';
import Filter from 'components/Filter';
import Select from 'components/Select';

const FilterRow = ({ onChangeFilter }) => {
    const { NAME, COUNTRY } = filter
    
    return (
        <tr>
            <Filter id={NAME} onChangeFilter={onChangeFilter} />
            <Filter id={COUNTRY} onChangeFilter={onChangeFilter} />
            <Select />
            <Select/>
        </tr>
    )
}

export default FilterRow