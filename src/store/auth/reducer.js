import{
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL,
    
    DO_LOGOUT ,
    DO_LOGOUT_OK ,
    DO_LOGOUT_FAIL,

    DO_UPDATE_PROFILE,
    DO_UPDATE_PROFILE_OK,
    DO_UPDATE_PROFILE_FAIL

 } from "./actionTypes"

 //function recoverUser (){
   // try{ 
     //  return JSON.parse((localStorage.getItem)("_user"))
   
    //   }catch(err){   
     //      return{ }
      // }
  //    }

      function recoverUser (){
        try{ 
           return JSON.parse(localStorage.getItem("_user"));
           }catch(err){   
               return{ }
           }
          }

 const initialState={
    loadingLogin:false, 
    loadingProfileUpdate: false, // Nueva propiedad para indicar si la actualización del perfil está en progreso
    user:recoverUser(),   
    error:{ 
        message:""
    }
 }


 export default function AuthReducer(state = initialState,action) { 
    switch (action.type){ 
        case DO_LOGIN:
            state = {...state,loadingLogin:true}
            break
            
        case DO_LOGIN_OK:
            state = { ...state, user: action.payload.user };
            break
        
        case DO_LOGIN_FAIL:
         state={...state,loadingLogin:false, user:{}}    
        break

        case DO_LOGOUT:
            state={...state}
             break
        
         
            case DO_LOGOUT_OK:
            state = { ...state,user: {} }
            break

 
        // para modificar user 

        case DO_UPDATE_PROFILE:
            state = { ...state, loadingProfileUpdate: true };                 //establecer "loadingProfileUpdate" en true para indicar que la actualización del perfil está en progreso
            break
      
          case DO_UPDATE_PROFILE_OK:
            state = { ...state, user: action.payload.user, loadingProfileUpdate: false }; // ¿?¿?¿?¿?¿? actualizar el usuario en el estado y establecer "loadingProfileUpdate" en false para indicar que la actualización del perfil se completó con éxito
            break;
      
          case DO_UPDATE_PROFILE_FAIL:
            state = { ...state, loadingProfileUpdate: false };           // Establecer "loadingProfileUpdate" en false para indicar que la actualización del perfil ha fallado

            break;


    }    
    return state  
 }

