import React from 'react'
import { useState } from 'react';
import Card from './Card';
import ErrorMessage from './ErrorMessage';

const Form = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        banda: ''
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario.nombre.length > 2 && usuario.nombre.indexOf(' ') === -1   
            && usuario.banda.length > 5 && usuario.banda.indexOf(' ') === -1){
            setShow(true);
            setError(false);
        } else{            
            setError(true);
            setShow(false);
        }
    }
  return (
    <div>
    
    <form onSubmit={handleSubmit}>
        <label></label>
        <input type="text"
        value={usuario.nombre}
        onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
         placeholder='Ingresa tu nombre' />
        <label></label>
        <input type="text"
        value={usuario.banda}
        onChange={(e) => setUsuario({ ...usuario, banda: e.target.value })}
        placeholder='Ingresa tu banda de música favorita' />
        <button className='btn-enviar' >Enviar</button>
    </form>
    {show ? <Card usuario={usuario} /> : null}
    {error && <ErrorMessage />}
        
    </div>
  )
}

export default Form