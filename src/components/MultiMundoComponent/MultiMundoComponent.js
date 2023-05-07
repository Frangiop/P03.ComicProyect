import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getMundos } from '../../store/mundos/action';
import { Link } from 'react-router-dom';
import "./MultiMundoComponent.css"
import { Scrollbar } from 'react-scrollbars-custom';

const MultiMundoComponent = () => { 

  const dispatch = useDispatch()

  const {mundos,loadingMundos} = useSelector((state) =>state.MundosReducer)


  useEffect(()=> {
    // llamar a la accion para que obtenga los posts  
     dispatch(getMundos())
   },[])
 
 return(

  <div className="mundos-container"> {/* Agrega la clase del contenedor */}

  
  {mundos.map(mundo=>{
    return (
  <div className="mundos" key={mundo.id}>
          <Link className="link mundos" to={`/mundos/${mundo.id}`}>{mundo.manga}</Link>
    </div>


    
    )
  })}

  </div>

 )
 };

MultiMundoComponent.propTypes = {};

MultiMundoComponent.defaultProps = {};

export default MultiMundoComponent;
