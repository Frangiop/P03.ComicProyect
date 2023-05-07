import MultiPersonajeComponent from "../components/MultiPersonajeComponent/MultiPersonajeComponent";
import "./PersonajePage.css"


export default function PersonajePage(){

    return (
        <div className="bodyPersonajes1">
        <h1 className="titulo">Busca tu personaje</h1>
        <MultiPersonajeComponent></MultiPersonajeComponent>
     </div>
    )
    }