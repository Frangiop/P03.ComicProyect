import { useSelector } from "react-redux";
import "./HomePage.css";

export default function HomePage(){
  const{user} = useSelector((state)=>state.AuthReducer ) 
    return (

      <div className="home">
  
      {user && user.id? <h2 className="home-titulo" > 
      <span className="firstname">{user.firstname}</span>{' '}
          <span className="lastname">{user.lastname}</span>
      </h2>: 'No estas loggeado'}
      {user.firstName} 
    </div>
    )
    }