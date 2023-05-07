import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonajes } from '../../store/personajes/action';
import { Link } from 'react-router-dom';
import "./MultiPerosnajeComponent.css";
import { Scrollbar } from 'react-scrollbars-custom';


const MultiPersonajeComponent = () => {
  
  const dispatch = useDispatch()

   const {personajes,loadingPersonajes} = useSelector((state) =>state.PersonajesReducer)

   const [busqueda, setBusqueda] = useState('');

   useEffect(()=> {
    // llamar a la accion para que obtenga los posts  
     dispatch(getPersonajes())
   },[])
 

//boton resetar 
const handleBusquedaChange = (event) => {
  setBusqueda(event.target.value);
}

// 
  const handleBusquedaSubmit = (event) => {
    event.preventDefault();
    setBusqueda('');
  }


 

  if(loadingPersonajes){
    return (
      <div class="loading-container">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    )
  } 


 return(

  <div className="personajes-container background body ">
     <div className="busqueda-container">
     <form onSubmit={handleBusquedaSubmit}>
<input type="text"  className="input-busqueda" placeholder="Buscar personaje" value={busqueda} onChange={handleBusquedaChange} />
 <button   className="reset-button boton-buscar" type="submit">Resetear</button>

</form>
      </div>

    
     
      
  {personajes.map(personaje =>{
    if (personaje.nombre.toLowerCase().includes(busqueda.toLowerCase())) {
          return (
           

      <div className="personaje-card " key={personaje.id}>

    <Link  className="personaje-nombre" to={`/personajes/${personaje.id}`}>
           
                <img src={personaje.imagen} alt="" /> 
                <h2> {personaje.nombre}</h2>
              
     </Link>  
          
              </div>         
    )
  } else {
          return null;
        }
      })}
     
       
    </div>
  )
};


MultiPersonajeComponent.propTypes = {};

MultiPersonajeComponent.defaultProps = {};

export default MultiPersonajeComponent;
