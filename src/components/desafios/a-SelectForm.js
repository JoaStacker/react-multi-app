import React, {useState, useEffect} from 'react';
import SelectMunicipio from './a-SelectMunicipio';
import SelectProvincia from './a-SelectProvincia';
import styled from 'styled-components';

const initialForm = {   
    idSelected: null,
    provincia: "",
    municipios: []
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #e5e5e1;
    padding: 10px;
`

export default function SelectForm ({data, updateSelected}){
    const [form, setForm] = useState(initialForm)

    const updateProvincia = (id, name) => {
        setForm({
            ...form,
            idSelected: id,
            provincia: name,
        })
        console.log("value changed")

        updateSelected(id)
    }
    
    return (
        <Form >
            {data && <SelectProvincia provincias={data.provincias} updateProvincia={updateProvincia} />}
            {data && <SelectMunicipio municipios={data.municipios} />}
        </Form>
    )
}
