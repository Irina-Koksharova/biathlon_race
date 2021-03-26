import s from './Select.module.css';

const Select = ({onChangeSelect}) => {
    return (
        <td>
            <select className={s.select} onChange={onChangeSelect}>
                <option>ascending</option>
                <option>descending</option>
            </select>
        </td>
    )
}

export default Select