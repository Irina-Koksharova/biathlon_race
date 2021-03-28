import PropTypes from 'prop-types';

const TableBody = ({ data }) => {
    return (
        <>
            {data.map(({ name, country, rateOfFire, numberOfHits, totalPoints }) => (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{country}</td>
                    <td>{rateOfFire}</td>
                    <td>{numberOfHits}</td>
                    <td>{totalPoints}</td>
                </tr>
            ))}
        </>
    )
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
            
export default TableBody;