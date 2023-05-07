import axios from 'axios'

import {
    GET_PERSONAJES,
    GET_PERSONAJES_OK,
    GET_PERSONAJES_FAIL,
 
    GET_SINGLE_PERSONAJE,
    GET_SINGLE_PERSONAJE_OK,
    GET_SINGLE_PERSONAJE_FAIL
 
} from './actionTypes'
    
    
export function actionGetPersonajes(){
    return {
        type : GET_PERSONAJES
    }
}


export function actionGetPersonajesOk(personajes){
    return {
        type:GET_PERSONAJES_OK,
        payload:personajes
    }
}


export function actionGetPersonajesFail(error){
    return {
        type:GET_PERSONAJES_FAIL,
        payload:error,
     }
}


export function getPersonajes(){
    return async (dispatch) =>{
        dispatch(actionGetPersonajes())
        try {
            const response = await axios.get("http://localhost:3000/usuarios")
             dispatch(actionGetPersonajesOk(response.data))
        } catch(error){
            dispatch(actionGetPersonajesFail(error))
        }
    }
}

// PERONSAJES UNICOS :

export function actionGetSinglePersonaje(personajeId){
    return {
        type: GET_SINGLE_PERSONAJE,
        payload:personajeId
    }
}


export function actionGetSinglePersonajeOk(personaje){
    return{
        type: GET_SINGLE_PERSONAJE_OK,
         payload:personaje
    }
}

export function actionGetSinglePersonajeFail(error){
    return {
       type: GET_SINGLE_PERSONAJE_FAIL,
       payload:error,
    }
}



export function getSinglePersonaje(personajeId){
    return async (dispatch) =>{
        dispatch(actionGetSinglePersonaje(personajeId))
        try {
            const response = await axios.get(`http://localhost:3000/usuarios/${personajeId}`)
             dispatch(actionGetSinglePersonajeOk(response.data))
        } catch(error){
            dispatch(actionGetSinglePersonajeFail(error))
        }
    }
}