import { useFetch } from "../hooks/useFetch"
import Loader from "./Loader";
import Message from "./Message";

export const SelectList = ({title, url, handleChange}) => {
    const {data, error, loading} = useFetch(url) //apenas carga el seect list hace la peticion.
    
    // console.log("DATOS OBTENIDOS: ", data, error, loading);

    if(data === null) return null; //mientras que no haya datos por parte de la peticion fetch no retornar nada.

    if(error){
        return <Message msg={`Error ${error.status}: ${error.statusText}`}/>
    }

    let id = `select-${title}`;
    let label = title.charAt(0).toUpperCase() + title.slice(1);


    const handleSelect = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        const id = e.target.options[selectedIndex].getAttribute('data-key');
        if(e.target.id ===  `select-state` && id !== null) {
            const coords = e.target.options[selectedIndex].getAttribute('data-coords');
            handleChange(id, JSON.parse(coords));
        }else{
            handleChange(id)
        }
    }


    return (
        <>
        <label htmlFor={id}>{label}: </label>
        {loading && <Loader type="elements"/>}
        <select id={id} name={id} onChange={handleSelect}>
                <option data-key={null}>Choose a {title}</option>
                {data.provincias && 
                    data.provincias.map(el => ( 
                        <option 
                            data-key={el.id}
                            data-coords={JSON.stringify({lon: el.centroide.lon, lat: el.centroide.lat})}
                            key={el.id} 
                            value={el.nombre} 

                        >
                            {el.nombre}
                        </option>)
                )}
                {data.municipios && 
                    data.municipios.map(el => (
                        <option 
                            data-key={el.id}
                            key={el.id}
                            value={el.nombre}>{el.nombre}
                        </option>)
                )}
        </select>
        </>
    )
}
