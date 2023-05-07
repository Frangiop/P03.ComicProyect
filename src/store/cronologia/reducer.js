
import {
    GET_CRONOLOGIAS,
    GET_CRONOLOGIAS_OK,
    GET_CRONOLOGIAS_FAIL,

    // agregar cronologia 
    AGREGAR_CRONOLOGIA,
    AGREGAR_CRONOLOGIA_OK,
    AGREGAR_CRONOLOGIA_FAIL,

 ELIMINAR_CRONOLOGIA, // Agrega el ActionType de eliminación
    ELIMINAR_CRONOLOGIA_OK, // Agrega el ActionType de eliminación exitosa
    ELIMINAR_CRONOLOGIA_FAIL // Agrega el ActionType de eliminación con error
 
} from './actionTypes'


//const initialState={
  //  cronologias:[],
    //loadingCronologias:false,
   
 //   error: {
   //      message:""
    //}
//}

const initialState = {
    cronologias: [],
    loadingCronologias: false,
    nuevaCronologia: {
        id: null, // O el valor inicial para el ID
        año: '',
        manga: '',
        urlImagen:'',

    },
    addingCronologias: false,
    error: {
        message: ''
    }
};



export default function CronologiasReducer(state = initialState,action) { 
switch(action.type){

         case GET_CRONOLOGIAS:
        state = {...state,loadingCronologias:true}
        break 
       
        case GET_CRONOLOGIAS_OK:
        state={...state,loadingCronologias:false , cronologias:action.payload}
         break

         case GET_CRONOLOGIAS_FAIL:
         state={...state,loadingCronologias:false, cronologias:[], error :{message:action.payload} }
         break  

                    
 // nuevo codigo par argegar tecnologia 

 case AGREGAR_CRONOLOGIA:
    state = { ...state, addingCronologia: true };
    break;
case AGREGAR_CRONOLOGIA_OK:
    
    state = { ...state, addingCronologia: false, cronologias: [...state.cronologias, action.payload] };
    break;
case AGREGAR_CRONOLOGIA_FAIL:
    state = { ...state, addingCronologia: false, error: { message: action.payload } };
    break;
default:
    break;

// boton eliminar 


       case ELIMINAR_CRONOLOGIA:
            state = { ...state, deletingCronologia: true }; // Activar el estado de eliminación
            break;
        case ELIMINAR_CRONOLOGIA_OK:
            // Filtrar la cronología eliminada del estado
            const cronologiaId = action.payload;
            const cronologiasActualizadas = state.cronologias.filter(cronologia => cronologia.id !== cronologiaId);
            state = { ...state, deletingCronologia: false, cronologias: cronologiasActualizadas };
            break;
        case ELIMINAR_CRONOLOGIA_FAIL:
            state = { ...state, deletingCronologia: false, error: { message: action.payload } };
            break;



}
return state
 }