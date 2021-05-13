import React, {useState} from 'react';
import Map from './Map';
import { SelectList } from './SelectList';

export default function SelectsAnidadosOriginal () {
    const [stateID, setStateID] = useState('');
    const [town, setTown] = useState('');
    const [suburb, setSuburb] = useState('');

    const [lon, setLong] = useState(-63.616672);
    const [lat, setLat] = useState(-38.416097);

    const updateStateAndCoors = (id, coords) => {
        setStateID(id);
        console.log(coords.lon, coords.lat);
        setLong(coords.lon);
        setLat(coords.lat);
    }

    return (
        <div>
            <SelectList title="estado" url="https://apis.datos.gob.ar/georef/api/provincias" handleChange={updateStateAndCoors}/><br />
            <SelectList title="municipio" url={stateID ? `https://apis.datos.gob.ar/georef/api/municipios?provincia=${stateID}&campos=id,nombre&max=100`: false} handleChange={(id) => setTown(id)}/><br />
            <SelectList title="colonia" url="" handleChange={(e) => setSuburb(e.target.value)}/>
            <Map lon={lon} lat={lat}/>
        </div>
    )
}
