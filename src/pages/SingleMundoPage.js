import { useParams } from "react-router-dom";
import SingleMundoComponent from "../components/SingleMundoComponent/SingleMundoComponent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSingleMundo } from "../store/mundos/action";


export default function SingleMundoPage(){
  const params = useParams() 
  const dispatch =useDispatch(params.id)


  useEffect(()=>{ 
      dispatch(getSingleMundo(params.id)) 
    },[])
   
    return (
  
      <div>
    <SingleMundoComponent></SingleMundoComponent>
     </div>
    )
  
  }
  