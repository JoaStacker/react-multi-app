import React, { useState } from 'react';
// import Message from './Message';

function SelectProvincia({provincias, updateProvincia}) {
    const [selected, setSelected] = useState('default')

    const onSelect = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        const id = e.target.options[selectedIndex].getAttribute('data-key');
        const name = e.target.value;
        updateProvincia(id, name);
        setSelected(e.target.value);
    }

    return (
        <select value={selected} onChange={onSelect}>
                <option disabled value="default">Provincias</option>
                {provincias.length > 0 
                    ? provincias.map(el => <option data-key={el.id} key={el.id} value={el.name}>{el.name}</option>)
                    : 'Sin provincias'}
        </select>
        // {provincias.length === 0 && <Message msg="No hay provincias"/>}
    )
}

export default SelectProvincia
