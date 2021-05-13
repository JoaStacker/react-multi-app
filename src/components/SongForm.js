import React, {useState} from 'react';

const initialForm = {
    artist: "",
    song: ""   
}

const SongForm = ({handleSearch}) => {
    const [form, setForm] = useState(initialForm);
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit =(e) => {
        e.preventDefault();

        if(!form.artist || !form.song){
            alert("Datos incompletos");
            return
        }else{
            handleSearch(form)
            setForm(initialForm)
        }
    };

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="artist" 
                    placeholder="nombre del artista" 
                    onChange={handleChange} 
                    value={form.artist}/>
                <input 
                    type="text" 
                    name="song" 
                    placeholder="nombre de la cancion" 
                    onChange={handleChange} 
                    value={form.song}/>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}


export default SongForm;