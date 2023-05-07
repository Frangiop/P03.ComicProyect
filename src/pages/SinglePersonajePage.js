import { useEffect } from "react"
import { getPersonajes, getSinglePersonaje } from "../store/personajes/action"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import SinglePersonajeComponent from "../components/PersonajeComponent/SinglePersonajeComponent"
import "./SinglePersonajePage.css"

export default function SinglePersonajePage(){
 
    const params = useParams() 
    const disptach =useDispatch()


 useEffect(()=>{ 
   disptach(getSinglePersonaje(params.id)) 

 },[])

 


    return (
  
      <div className="bodyPersonajes2">
      <SinglePersonajeComponent></SinglePersonajeComponent>
     </div>
    )
   
  }
  