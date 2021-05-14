import React, {useState} from 'react';
import Map from './Map';
import { SelectList } from './SelectList';

export default function SelectsAnidadosOriginal () {
    const [stateID, setStateID] = useState(null);
    const [town, setTown] = useState('');

    const [lon, setLong] = useState(-63.616672);
    const [lat, setLat] = useState(-38.416097);

    const updateStateAndCoors = (id, coords) => {
        setStateID(id);
        if(!id) return;
        console.log(coords.lon, coords.lat);
        setLong(coords.lon);
        setLat(coords.lat);
    }

    return (
        <div>
            <SelectList 
                title="estado" 
                url="https://apis.datos.gob.ar/georef/api/provincias" 
                handleChange={updateStateAndCoors}
            />
            <br />
            <SelectList 
                title="municipio" 
                url={stateID 
                    ? `https://apis.datos.gob.ar/georef/api/municipios?provincia=${stateID}&campos=id,nombre&max=100` 
                    : null} 
                handleChange={(id) => setTown(id)}
            />
            <br />
            <Map lon={lon} lat={lat}/>
        </div>
    )
}
