import s from './Filter.module.css';

const Filter = ({id, onChangeFilter}) => {
    return (
        <td>
            <input
                className={s.input}
                id={id}
                onChange={onChangeFilter}
                autoComplete="off"
            />
        </td>
    )
}
    
export default Filter