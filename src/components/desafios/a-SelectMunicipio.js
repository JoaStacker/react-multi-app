import React, { useState } from 'react';
// import Message from './Message';

function SelectMunicipio({municipios}) {
    const [selected, setSelected] = useState('default')

    return (
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
            <option disabled value="default">Municipios</option>
            {municipios.length > 0 
                ? municipios.map(el => <option data-key={el.id} key={el.id} value={el.name}>{el.name}</option>)
                : 'Sin Municipios'}
        </select>
        // {municipios.length > 0 && <Message msg="No hay municipios"/>}
    )
}

export default SelectMunicipio
