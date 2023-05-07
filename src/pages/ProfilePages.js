import { useSelector } from "react-redux"
import "./ProfilePage.css"
import {useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { doUpdateProfile } from "../store/auth/actions";

 
export default function ProfilePage(){
    
  const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.AuthReducer )

   //dispatch , stas 3 const son para modificat el usuairo 
   
   // Estados locales para los campos del formulario
  const [firstname, setFirstName] = useState(user.firstname);
  const [lastname, setLastName] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
 

  const handleUpdateProfile = () => {
    // ejeecuta la acción para actualizar el perfil con los nuevos datos he metido estos 3: 
    dispatch(
      doUpdateProfile({
        id: user.id,
        firstname: firstname,
        lastname: lastname,
        email: email
      })
    );
  };
  
  useEffect(() => {
    setFirstName(user.firstname);
   setLastName(user.lastname);
    setEmail(user.email);
    
  }, [user]);


    return (
       
        <form className="form" >
        {/* Muestrael valor actual que tiene ahora el nombre  del iusoair */}
        <div> 
          <label className="label">Nombre : </label>
          {user.firstname}
     {/* Aaarega un input para que el usuario pueda modificar el nombre , pero no me sale  */}
     <input className="input"  value={firstname}  onChange={(e) => setFirstName(e.target.value)}  placeholder="Nombre" />
      </div>
        <div>
            <label className="label">Email : </label>
        {/* Muestra el valor actual del correo electrónicooo */}
        {user.email}
        {/* Agregamos  eln input para que el usuario pueda modificar el correo electronico */}
        <input  className="input"  value={email}  onChange={(e) => setEmail(e.target.value)}   placeholder="Email" />
        </div>
        <div>
            <label className="label" >Lastname : </label>
        {/* muestra el valor actual del correo electrónico */}
        {user.lastname}
        {/* agrega un input para que el usuario pueda modificar el correo electrónico */}
        <input className="input" value={lastname} onChange={(e) => setLastName(e.target.value)}  placeholder="Lastname"/>
        </div>

      {/* Agregams el botn para que el usuario pueda actualizar su perfil */}
      <button  className="button1" type="submit" onClick={handleUpdateProfile}>Actualizar perfil</button>

        </form>
)

}
