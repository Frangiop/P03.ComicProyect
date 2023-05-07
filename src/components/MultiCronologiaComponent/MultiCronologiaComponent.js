import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import { eliminarCronologia, getCronologias } from '../../store/cronologia/action';
import { useDispatch, useSelector } from 'react-redux';

import "./MultiCronologiaComponent.css"
//import { Scrollbar } from 'react-scrollbars-custom';


const MultiCronologiaComponent = () => {
  
  const dispatch = useDispatch()

  const {cronologias,loadingCronologias} = useSelector((state) =>state.CronologiasReducer)

// nuevo 
  const [nuevaCronologia, setNuevaCronologia] =useState(null); // Nuevo estado para la nueva cronología


  useEffect(()=> {
    // llamar a la accion para que obtenga los posts  
     dispatch(getCronologias())
   },[])
 


   const eliminarCronologiaHandler = (cronologiaId) => {
    // Llama a la acción de eliminación de cronología utilizando dispatch
    dispatch(eliminarCronologia(cronologiaId));
  }

return(
  <div className='container'>
  <div className="container-second">
 
  {cronologias
    .sort((a, b) => a.año - b.año)
    .map(cronologia =>{
    return (
    <div >
  <div key={cronologia.id} >
  {/*<Link to={`/cronologias/${cronologia.id}`}> {cronologia.año} </Link> */}
    <div  className="container-año">
           {cronologia.año}
           </div>
           <div className="container-manga">
          -  {cronologia.manga}  -
          </div>
          <div className='imagen'>
          <img  src={cronologia.imagen} alt=""></img>
          <button  className="eliminar-btn" onClick={() => eliminarCronologiaHandler(cronologia.id)}>Eliminar</button>
    
          </div>
    </div>
    
<div>
</div>
    </div>
    
    )

 
  })}
  

    {/* Nuevo elemento para representar la nueva cronología */}
    {nuevaCronologia && (
  <div key={nuevaCronologia.id}>
    <div >
      {nuevaCronologia.año } {/*   {nuevaCronologia.año &&  nuevaCronologia.año} */}
    </div>
    <div >
      - {nuevaCronologia.manga}
    </div>
    <div>
    - <img src={nuevaCronologia.urlImagen} alt=""></img> {/* Corregido: Agregué la etiqueta img para mostrar la imagen */}
    </div>
  </div>
)}

     
      </div>
    </div>



 
)
 };

MultiCronologiaComponent.propTypes = {};

MultiCronologiaComponent.defaultProps = {};

export default MultiCronologiaComponent;
