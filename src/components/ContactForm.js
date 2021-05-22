import React from 'react';
import {useForm} from '../hooks/useForm'
import Loader from './Loader';
import Message from './Message';

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
};

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    let regexComments = /^.{1,255}$/


    if(!form.name.trim()){ //trim() borra los espacioes en blanco al incio y al final de una string.
        errors.name = "El campo 'nombre' es requerido.";
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo 'nombre' solo acepta letras y espacios en blanco";
    }
    if(!form.email.trim()){ //trim() borra los espacioes en blanco al incio y al final de una string.
        errors.email = "El campo 'email' es requerido.";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'email' solo acepta letras y espacios en blanco";
    }
    if(!form.subject.trim()){ //trim() borra los espacioes en blanco al incio y al final de una string.
        errors.subject = "El campo 'subject' es requerido.";
    }
    if(!form.comments.trim()){ //trim() borra los espacioes en blanco al incio y al final de una string.
        errors.comments = "El campo 'comments' es requerido.";
    }else if(!regexComments.test(form.comments)){
        errors.comments = "El campo 'comments' no debe exceder los 255 caracteres";
    }

    return errors
}


function ContactForm() {
    const {
        form, 
        errors, 
        loading, 
        response, 
        handleChange, 
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm)

    return (
        <div>
            <h2>Formulario de contacto</h2>    
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your name"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={form.name}
                    required
                />
                {errors.name && <p className="verification-error">{errors.name}</p>}
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Write your email"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={form.email}
                    required
                />
                {errors.email && <p className="verification-error">{errors.email}</p>}
                <input 
                    type="text" 
                    name="subject" 
                    placeholder="Write a subject"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={form.subject}
                    required
                />
                {errors.subject && <p className="verification-error">{errors.subject}</p>}
                <textarea 
                    type="text" 
                    name="comments" 
                    cols= "50"
                    rows="5"
                    placeholder="Your comments"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={form.comments}
                    required
                ></textarea>
                {errors.comments && <p className="verification-error">{errors.comments}</p>}
                <input type="submit" value="Send" />                
            </form>
            {loading && <Loader type="elements"/>}
            {response && <Message msg="Los datos han sido enviados" bgColor='#198754'/>}
        </div>
    )
}

export default ContactForm
