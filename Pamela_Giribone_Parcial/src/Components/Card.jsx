import React from 'react'

const Card = ({usuario}) => {
    const {nombre, banda} = usuario;
  return (
    <div className='card'>
        <h2>Hola {nombre}</h2>
        <p> Sabemos que tu banda favorita es: </p>
        <p className='banda'>{banda}</p>


    </div>
  )
}

export default Card