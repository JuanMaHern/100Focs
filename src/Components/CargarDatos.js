import React, { useState } from 'react';
import '../Stylesheet/CargarDatos.css';
import { v4 as uuidv4 } from 'uuid'

function CargarDatos({ onSubmit }){

  const [section, setSection] = useState('Menu');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const manejarEnvio = e => {
    e.preventDefault();
    const articuloNuevo = {
      id: uuidv4(),
      section: section,
      title: title,
      text: text,
    };
    onSubmit(articuloNuevo);
    setSection('Menu');
    setText('');
    setTitle('');
    alert('Cargado Puto');
  };

  return(
    <div className='cargar-datos'>
      <form className='cargar-datos-form' onSubmit={manejarEnvio}>
        <select className='selector' value={section} onChange={(e) => setSection(e.target.value)}>
          <option value='Menu'>Menu</option>
          <option value='Catering'>Catering</option>
          <option value='Sandwiches'>Sandwiches</option>
        </select>
        <input 
          className='text'
          type='text' 
          placeholder='Title' 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          className='text-area'
          type='text' 
          placeholder='Text' 
          value={text}
          onChange={(e) => setText(e.target.value)} 
        />
        <button className='button' >Agregar Articulo</button>
      </form>
    </div>
  )
}

export default CargarDatos;