import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import "./SinglePeronsajeComponent.css"
import { Scrollbar } from 'react-scrollbars-custom';

const SinglePersonajeComponent = () => { 

  const {personaje,loadingSinglePersonaje} = useSelector((state)=>state.PersonajesReducer)


  if(loadingSinglePersonaje){
    return (
     <div>
        Cargando ... 
     </div>
    )
  } 
    

return(
  <div className="body"> 
  <div className="container">
  <div  className="left-section">
  <h2 className="letra-titulo" >{personaje.nombre}</h2>
<p className="single-personaje-caracter"> Caracter : {personaje.caracter} </p>
<div> {/**no sale imagen  */}
<img  lassName="single-personaje-imagen" src={personaje.imagen} alt=""/> 
</div>
  </div>
  <div  className="middle-section">
 <p  className="single-personaje-descripcion1" >{personaje.descripcion} </p>
 <p  className="single-personaje-descripcion1" >{personaje.descripcion1} </p>
 
 <Scrollbar className="div-altura scrollbar-container" >
 <div classNmae="container  ">
 <div className="descripcion1-box  ">

 <p>{personaje.vida}</p>

 </div>
 </div>
 </Scrollbar>

 <div >
 <div className="manga">
 {personaje.manga} 
 </div>
 </div>
</div>
<div  className="right-section">
<img className="single-personaje-imagen" src={personaje.imagen2} alt=""/>
</div>
  </div>
 
  </div>


)
 };

 SinglePersonajeComponent.propTypes = {};

 SinglePersonajeComponent.defaultProps = {};

export default SinglePersonajeComponent;
