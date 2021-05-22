import React, {useState} from 'react';
import Map from './Map';
import { SelectList } from './SelectList';


const initialCoords = {
    lon: -63.616672,
    lat: -38.416097
}

export default function SelectsAnidadosOriginal () {
    const [stateID, setStateID] = useState(null);
    const [town, setTown] = useState('');

    const [lon, setLong] = useState(initialCoords.lon);
    const [lat, setLat] = useState(initialCoords.lat);

    const updateCoords = (id, coords) => {
        setStateID(id);
        if(!id) return;
        // console.log(coords.lon, coords.lat);
        setLong(coords.lon);
        setLat(coords.lat);
    }

    const updateMap = (lon, lat) => {
        setLong(lon);
        setLat(lat);
    }

    return (
        <div className="grid-1-2">
            <div>
            <h2>ARGENTINA - Search</h2>
            <SelectList 
                title="state" 
                url="https://apis.datos.gob.ar/georef/api/provincias" 
                handleChange={updateCoords}
            />
            <br />
            <SelectList 
                title="town" 
                url={stateID 
                    ? `https://apis.datos.gob.ar/georef/api/municipios?provincia=${stateID}&campos=id,nombre&max=100` 
                    : null} 
                handleChange={(id) => setTown(id)}
            />
            <br />
            </div>
            <Map lon={lon} lat={lat} handleMove={updateMap}/>
        </div>
    )
}
