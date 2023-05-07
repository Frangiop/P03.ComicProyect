import React from 'react';
//import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import "./SingleMundoCompenent.css"

const SingleMundoComponent = () => {

  const {mundo,loadingSingleMundo} = useSelector((state)=>state.MundosReducer)

  
return(
  <div className="imagen">
 
 <div>
  <img src={mundo.imagen1} alt="1"></img>
  <img src={mundo.imagen2} alt="2"></img>
  <img src={mundo.imagen3} alt="3"></img>

  </div>
 
 <p>{mundo.manga} </p>
 </div>
)
 };

SingleMundoComponent.propTypes = {};

SingleMundoComponent.defaultProps = {};

export default SingleMundoComponent;
