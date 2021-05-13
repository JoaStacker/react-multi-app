import React, {useEffect, useState} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable';
import {helpHttp} from '../helpers/helpHttp'
import Loader from './Loader'
import Message from './Message'

//-------------------- JSON SERVER base de datos -----------------------
//      http://localhost:5555/elements
//-------------------------------------------------------------------

export default function CrudApi() {
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp(); //this is the helper for the data fetch methods: { get(), post(), put(), delete() }
    let url = "http://localhost:5555/elements";

    useEffect(() => {
        setLoading(true)
        api.get(url).then((res) => {
            console.log(res);
            if(!res.err){
                setDb(res);
                setError(null)
            }else{
                setDb(null);
                setError(res)
            }

            setLoading(false);
        });
    }, []);


    //---- Post a new element to the server ------
    const createData = (data) => {
        data.id = Date.now();
        console.log(data);
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: data, 
        };
        setLoading(true)
        api.post(url, options).then((res) => {
            console.log(res);
            if(!res.err){
                const newData = [...db, res];
                setDb(newData);
                setError(null)
            }else{
                setDb(null);
                setError(res)
            }

            setLoading(false);
        });
    };

    const updateData = (data) => {
        const endpoint = `${url}/${data.id}`;
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: {...data}, 
        };
        setLoading(true);
        api.put(endpoint, options).then((res) => {
            console.log(res);
            if(!res.err){
                const newData = db.map(original => original.id === data.id ? data : original);
                setDb(newData);
                setError(null);
            }else{
                setDb(null);
                setError(res);
            }

            setLoading(false);
        });
    };

    const deleteData = (id) => {
        const confirm = window.confirm("Esta seguro que desea eliminar este elemento?")
        if(!confirm) return
        const endpoint = `${url}/${id}`;
        const options = {
            headers: {
                'Content-Type': 'application/json'
            } 
        };
        setLoading(true);
        api.del(endpoint, options).then((res) => {
            console.log(res);
            if(!res.err){
                const newData = db.filter(el => el.id !== id);
                setDb(newData);
                setError(null);
            }else{
                setDb(null);
                setError(res);
            }

            setLoading(false);
        });
    };

   
    return (
        <>
            <h2>CRUD App (json server crud)</h2> 
            <article className="grid-1-2">
                <CrudForm 
                    createData={createData} 
                    updateData={updateData} 
                    dataToEdit={dataToEdit} 
                    setDataToEdit={setDataToEdit}
                />
                {loading && <Loader type={"elements"}/>}
                {error && <Message msg={`Error: ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}
                {db  && <CrudTable 
                    data={db}
                    setDataToEdit={setDataToEdit}    
                    deleteData={deleteData}
                    isLoading={loading}
                />}
            </article> 
        </>
    )
}
