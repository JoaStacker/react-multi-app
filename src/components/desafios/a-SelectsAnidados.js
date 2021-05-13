import React, {useState, useEffect} from 'react'
import { helpHttp } from '../../helpers/helpHttp';
import Loader from '../Loader';
import Message from '../Message';
import SelectForm from './a-SelectForm';

// const urlProv = `https://apis.datos.gob.ar/georef/api/provincias?nombre=${provincia}`
// const urlMuni = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${'90'}&campos=id,nombre&max=100`


//Las provincias y municipios activos en los selects del formulario
const initalData = {
    provincias: [],
    municipios: [],
}


function SelectsAnidados() {
    const [data, setData] = useState(initalData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //Principal endpoint
    const endpoint = `https://apis.datos.gob.ar/georef/api/provincias`
    const api = helpHttp()
    
    //Lista de provincias iniciales
    useEffect(() => {
        setIsLoading(true)
        api.get(endpoint).then(res => {
            if(!res.err){
                const provincias = res.provincias.map(el => ({id: el.id, name: el.nombre}));
                setData({...data, provincias});
                setError(null)
            }else{
                setData(null);
                setError(res)
            }
            setIsLoading(false);
        })
    }, [])

    //Buscar los municipios en base al id de la provincia seleccionada
    const updateData = (id) => {
        const munisEndPoint = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${id}&campos=id,nombre&max=100` 

        setIsLoading(true)
        api.get(munisEndPoint).then(res => {
            console.log(res)
            if(!res.err){
                const municipios = res.municipios.map(el => ({id: el.id, name: el.nombre}))
                setData({...data, municipios})
                setError(null)
            }else{
                setData(null)
                setError(res)
            }
            setIsLoading(false)
        })
    }

    return (
        <div>
            {isLoading && <Loader type="elements"/>}
            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}
            <SelectForm data={data} updateSelected={updateData}/>
        </div>
    )
}


export default SelectsAnidados
