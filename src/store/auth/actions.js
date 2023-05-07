
import axios from "axios"

import{
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL,

    DO_LOGOUT,  // hacemos el logout 
    DO_LOGOUT_OK,
    DO_LOGOUT_FAIL,

    DO_UPDATE_PROFILE, // Nueva acción para modificar usuaior en profilePage 
    DO_UPDATE_PROFILE_OK, 
    DO_UPDATE_PROFILE_FAIL 


 } from "./actionTypes"


 export function actionDoLogin (loginData){
    return{
        type:DO_LOGIN,
        payload:loginData
    }
}

export function actionDoLoginOk(userDetails){
    return {
        type:DO_LOGIN_OK,
        payload: userDetails
    }
}
export function actionDoLoginFail(error){
    return {
        type:DO_LOGIN_FAIL,
        payload:error
    }
}

export function doLogin(userData){
    return async(dispatch)=>{
        dispatch(actionDoLogin(userData))
        try {
  // get para recibir 
  //post para enviar 
  console.log(userData)
        const response = await axios.post("http://localhost:3000/login",userData) // aquie cambue  https://dummyjson.com/auth/login  http://localhost:3000/login
        dispatch(actionDoLoginOk(response.data)) 
    } catch (error){ 
        dispatch(actionDoLoginFail(error))  
    }
   }   
 }

// ACCIONES DE LOGOUT 
 
export function actionDoLogout(){
    return{
        type:DO_LOGOUT
    }
}


export function actionDoLogoutOk(){
    return{
        type:DO_LOGOUT_OK
    }
}



export function actionDoLogoutFail(error){
    return{
        type:DO_LOGOUT_FAIL,
         payload : error
    }
}


export function doLogout(){
    return  (dispatch)=>{
        try{
            dispatch(actionDoLogout())
            dispatch(actionDoLogoutOk())

        }catch(error){
            dispatch(actionDoLogoutFail(error))
        }
    }
}


// Acciones de actualización de perfil, en priflePge

export function actionDoUpdateProfile(profileData) {
    return {
      type: DO_UPDATE_PROFILE,
      payload: profileData
    };
  }
  
  export function actionDoUpdateProfileOk(updatedUserDetails) {
    return {
      type: DO_UPDATE_PROFILE_OK,
      payload: updatedUserDetails
    };
  }
  
  export function actionDoUpdateProfileFail(error) {
    return {
      type: DO_UPDATE_PROFILE_FAIL,
      payload: error
    };
  }
  
  export function doUpdateProfile(profileData) {
    return async (dispatch) => {
      dispatch(actionDoUpdateProfile(profileData));
      try {
       // const { id: userId } = profileData; 
        const response = await axios.patch(`http://localhost:3000/users/${profileData.id}`,profileData)
        dispatch(actionDoUpdateProfileOk(response.data));
        console.log(response.data);
      } catch (error) {
        dispatch(actionDoUpdateProfileFail(error));
        console.log(error); // no me imprime nada 
      }
    };
  }