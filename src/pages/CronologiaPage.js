import { Link } from "react-router-dom";
import MultiCronologiaComponent from "../components/MultiCronologiaComponent/MultiCronologiaComponent";
import "./CronologiaPage.css"

export default function CronologiaPage(){

    return (
  
   <div >  
<Link  className="button" to='/nuevacronologia'  >Agregar Cronología</Link>
      <MultiCronologiaComponent></MultiCronologiaComponent>
</div>
 
    )
    }