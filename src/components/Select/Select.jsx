import s from './Select.module.css';

const Select = () => {
    return (
        <td>
            <select className={s.select}>
                <option>ascending</option>
                <option>descending</option>
            </select>
        </td>
    )
}

export default Select