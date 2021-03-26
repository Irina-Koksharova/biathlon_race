import s from './TableTitle.module.css';

const TableTitle = ({title}) => {
    return (
        <caption className={s.title}>{title}</caption>
    )
}

export default TableTitle