
import {
    GET_MUNDOS,
    GET_MUNDOS_OK,
    GET_MUNDOS_FAIL,

    GET_SINGLE_MUNDO,
    GET_SINGLE_MUNDO_OK,
    GET_SINGLE_MUNDO_FAIL,

    

} from './actionTypes'



const initialState={
    mundos:[],
    loadingMundos:false,
    mundo:{}, // segundo paso 
    loadingSingleMundo:false,
    mundolink:{}, // segundo paso 
    loadingSingleMundoLink:false,
    
    error: {
         message:""
    }
}


export default function MundosReducer(state = initialState,action) { 
switch(action.type){

         case GET_MUNDOS:
        state = {...state,loadingMundos:true}
        break 
       
        case GET_MUNDOS_OK:
        state={...state,loadingMundos:false , mundos:action.payload}
         break

         case GET_MUNDOS_FAIL:
         state={...state,loadingMundos:false, mundos:[], error :{message:action.payload} }
         break  
  

    // SINGLE MUNDO 
    case GET_SINGLE_MUNDO :
        state = {...state, loadingSingleMundo:true} 
        break      
         
     case GET_SINGLE_MUNDO_OK:
        state={...state,loadingSingleMundo:false , mundo:action.payload}
     break 

     case GET_SINGLE_MUNDO_FAIL:
        state={...state,LoadingSingleMundo:false, mundos:[], error :{message:action.payload} }

     break      



               default:
                    break
}
return state
 }