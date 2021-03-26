const TableBody = ({data}) => {
    return (
        <>
            {data.map(({ name, country, rateOfFire, numberOfHits }) => (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{country}</td>
                    <td>{rateOfFire}</td>
                    <td>{numberOfHits}</td>
                </tr>
            ))}
        </>
    )
}
            
export default TableBody