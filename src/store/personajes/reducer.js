import {
    GET_PERSONAJES,
    GET_PERSONAJES_OK,
    GET_PERSONAJES_FAIL,

    GET_SINGLE_PERSONAJE,
    GET_SINGLE_PERSONAJE_OK,
    GET_SINGLE_PERSONAJE_FAIL

} from './actionTypes'


const initialState={
    personajes:[],
    loadingPersonajes:false,
    personaje:{}, // segundo paso 
    loadingSinglePersonaje:false,
    error: {
         message:""
    }
}


export default function PersonajesReducer(state = initialState,action) { 
    switch(action.type){
    
             case GET_PERSONAJES:
            state = {...state,loadingPersonajes:true}
            break 
           
            case GET_PERSONAJES_OK:
                   state={...state,loadingPersonajes:false , personajes:action.payload}
                    break
    
                    case GET_PERSONAJES_FAIL:
                        state={...state,loadingPersonajes:false, personajes:[], error :{message:action.payload} }
                        break  
      
                
                          // los perosnajes single : 
                    
                  case GET_SINGLE_PERSONAJE :
                    state = {...state, loadingSinglePersonaje:true} 
                    break      
                     
                 case GET_SINGLE_PERSONAJE_OK:
                    state={...state,loadingSinglePersonaje:false , personaje:action.payload}
                 break 
  
                 case GET_SINGLE_PERSONAJE_FAIL:
                    state={...state,LoadingSinglePersonaje:false, personajes:[], error :{message:action.payload} }

                 break

                   
    
    
    
                   default:
                        break
    }
    return state
     }