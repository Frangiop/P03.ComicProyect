import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'; 
import "./NavigationComponent.css"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../../store/auth/actions';
import { FaHome } from 'react-icons/fa';

const NavigationComponent = () => { 
  //LOGOUT 

  const disptach = useDispatch()
  function closeSession(){
    disptach(doLogout()) 
    }

   //auth
  const {user} = useSelector((state)=>state.AuthReducer)

  // Usar hook useTranslation para acceder a las funciones de traducción
   const { t, i18n } = useTranslation();

   // Manejador de evento de clic para cambiar el idioma a inglés
   const handleChangeToEnglish = () => {
     i18n.changeLanguage('en');
   };
 
   // Manejador de evento de clic para cambiar el idioma a español
   const handleChangeToSpanish = () => {
     i18n.changeLanguage('es');
   };

return(

<div className="navbar ">
{/* primero links  */}
<nav className="navbar-nav">
<Link to='/' className="home-link">
          <FaHome className="home-icon" /> {/* Agregao el ícono de casa */}
         
        </Link>
{user && user.id?<Link to='/personaje' className="nav-link">Personajes</Link>  : "" }
{user && user.id?<Link to='/mundos' className="nav-link" >Mundos</Link>: "" }
{user && user.id? <Link to='/cronologia'  className="nav-link">cronología</Link> : "" }
<Link to="#"  className="nav-link volver-button" onClick={() => window.history.back()} >Volver</Link>

<div className="nav-link.back-to-top-button">
{/*botnoes traductores */}
<button className="nav-link.back-to-top-button" onClick={handleChangeToEnglish}>EN</button>
 <button onClick={handleChangeToSpanish}>ES</button>
</div>
{ /* link profile para el login */}
{ user && user.id?"": <Link className="nav-link" to='/login'>Login</Link>}
{ user && user.id? <Link className="nav-link" to='/profile'>Profile</Link> : "" }


{/* LogOUt link */}
{ user && user.id? <Link onClick={closeSession} className="nav-link" >LogOUt</Link>: "" }



</nav>
  </div>
)
 };

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
