
import {useState} from 'react';
import { helpHttp } from '../helpers/helpHttp';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const handleChange = (e) => {
        const  {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors(validateForm(form));
        helpHttp().post('https://formsubmit.co/joessar99@gmail.com', {
            body: form,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        }).then(res => {
            setLoading(false);
            setResponse(true);
            setForm(initialForm);
            setTimeout(() => setResponse(false), 2000);
        });
        if(Object.keys(errors).length === 0){
            alert("Enviando Formulario");
        }else{
            return;
        }
    }
    
    //Verifica el contenido del formulario
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form)); //retorna el objeto errores si es que hay
    }

    return {
        form,
        errors, 
        loading, 
        response, 
        handleChange, 
        handleBlur,
        handleSubmit
    }
}
