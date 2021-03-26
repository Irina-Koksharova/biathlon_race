import s from './Filter.module.css';

const Filter = () => {
    return (
        <td>
            <input
                className={s.input}
                id="input"
                        // value={value}
                        // onChange={onFilter}
                autoComplete="off"
            />
        </td>
    )
}
    
export default Filter