import React, {useState} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable';


//-----------------------------FALSA API------------------------------------
const initialDb = [
    {
        id: 1,
        symbol: "O",
        name: "Oxigeno",
        mass: 16
    },
    {
        id: 2,
        symbol: "S",
        name: "Asufre",
        mass: 32
    },
    {
        id: 3,
        symbol: "N",
        name: "Nitrogeno",
        mass: 14
    },
    {
        id: 4,
        symbol: "Al",
        name: "Aluminio",
        mass: 26
    },
    {
        id: 5,
        symbol: "Mn",
        name: "Manganesio",
        mass: 56
    },
    {
        id: 6,
        symbol: "Na",
        name: "Sodio",
        mass: 23
    },
    {
        id: 7,
        symbol: "H",
        name: "Hidrogeno",
        mass: 1
    }
]

//-------------------------------------------------------------------------



const CrudApp = () => {
    const [db, setDb] = useState(initialDb)
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = (data) => {
        data.id = Date.now()
        setDb([...db,data])
    }

    const updateData = (data) => {
        const newData = db.map(element => element.id === data.id ? data : element);
        setDb(newData)
    }

    const deleteData = (id) => {
        let isDelete = window.confirm("Desea eliminar este elemento?");
        if(isDelete){
            setDb(db.filter(element => element.id !== id))
        }
    }

    return (
        <>
            
            <h2>CRUD App (falso crud)</h2> 
            <article className="grid-1-2">
                <CrudForm 
                    createData={createData} 
                    updateData={updateData} 
                    dataToEdit={dataToEdit} 
                    setDataToEdit={setDataToEdit}
                />
                <CrudTable 
                    data={db}
                    setDataToEdit={setDataToEdit}    
                    deleteData={deleteData}
                />
                
            </article> 
        </>
    )
}

export default CrudApp
