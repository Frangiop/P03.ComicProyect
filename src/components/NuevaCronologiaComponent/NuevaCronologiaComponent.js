import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./NuevaCronologiaComponent.css"
import { useDispatch } from 'react-redux';
import { agregarCronologia } from '../../store/cronologia/action';

const NuevaCronologiaComponent = () => {
 // aquie lo que queremos agregar 
  const [año, setAño] = useState('');
  const [manga, setManga] = useState('');
  //para agregar imagne:
  const [urlImagen, setUrlImagen] = useState('');

  const dispatch = useDispatch();



  const handleAgregarCronologia = (e) => {
    e.preventDefault();
    // Validar que los campos de entrada no estén vacíos
    if (!año || !manga ||!urlImagen ) {
      alert('Por favor completa todos los campos');
      return;
    }


  // Llamar a la acción de Redux para agregar la nueva cronología
  dispatch(agregarCronologia({ año, manga,imagen:urlImagen}));
  // Limpiar los campos de entrada después de agregar la cronología
  setAño('');
  setManga('');
  setUrlImagen('');

};



  return(
  
<form onSubmit={handleAgregarCronologia}>
<h1 className="p">  Escribe tus nuevos datos </h1>
      <label  className="input-label">
        Año :
        <input
          type="number"
          name="año"
          value={año}
          className="input-field"
          onChange={(e) => setAño(parseInt(e.target.value))}
        />
      </label>
      <label className="input-label">
        Manga : 
        <input
          type="text"
          name="manga"
          value={manga}
          className="input-field"
          onChange={(e) => setManga(e.target.value)}
        />
      </label>

      <label className="input-label">
        Imagen :   
        <input
          type="text" // tipe file not text??
          name="urlImagen" // Cambié el name para que coincida con el estado
         //value={manga}   esto sol sin el de irlimgan dulicada el contenido lo que escribia en el input de manga se escribia en imange 
         value={urlImagen}
         className="input-field"
          onChange={(e) => setUrlImagen(e.target.value)} // Actualicé la función para que setee el estado de urlImagen
        />
      </label>

      
      <input className="submit-button" type="submit" value="Agregar" />



    </form>


  )
  


 };

NuevaCronologiaComponent.propTypes = {};

NuevaCronologiaComponent.defaultProps = {};

export default NuevaCronologiaComponent;
