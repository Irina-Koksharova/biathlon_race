import filter from 'initial/filter';
import Filter from 'components/Filter';
import Select from 'components/Select';

const FilterRow = ({ onChangeFilter, onChangeSelect }) => {
    const { NAME, COUNTRY } = filter
    
    return (
        <tr>
            <Filter id={NAME} onChangeFilter={onChangeFilter} />
            <Filter id={COUNTRY} onChangeFilter={onChangeFilter} />
            <Select />
            <Select />
            <Select onChangeSelect={onChangeSelect}/>
        </tr>
    )
}

export default FilterRow