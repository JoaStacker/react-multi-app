import React from 'react'

const CrudTableRow = ({element, setDataToEdit, deleteData}) => {
    let {id, name, symbol, mass} = element
    return (
        <tr>
            <td>{name}</td>
            <td>{symbol}</td>
            <td>{mass} g</td>
            <td>
                <button onClick={() => setDataToEdit(element)}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow
