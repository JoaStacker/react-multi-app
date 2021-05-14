import { useState, useEffect } from 'react'


export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        if(!url) { ///if there's no url provided it means 
            setData(true)
            // setError(new Error("Selecciona un estado para mostrar los municipios")) 
            return
        }
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)

                if(!res.ok){
                    let err = new Error("Error en la peticion")
                    err.status = res.status || "00"
                    err.statusText = res.statusText || "Ocurrio un error"
                    throw err;
                }

                const json = await res.json()

                if(!signal.aborted){
                    setData(json);
                    setError(null);
                }
            } catch (error) {
                if(!signal.aborted){
                    setData(null);
                    setError(error);
                }
            } finally {
                if(!signal.aborted){
                    setLoading(false)
                }
            }
        }

        fetchData()

        return () => abortController.abort()
    }, [url])


    return {data, error, loading}
}
