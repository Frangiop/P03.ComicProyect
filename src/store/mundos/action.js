
import axios from 'axios'

import {
    GET_MUNDOS,
    GET_MUNDOS_OK,
    GET_MUNDOS_FAIL,

    GET_SINGLE_MUNDO,
    GET_SINGLE_MUNDO_OK,
    GET_SINGLE_MUNDO_FAIL
 

} from './actionTypes'
    

export function actionGetMundos(){
    return {
        type : GET_MUNDOS
    }
}


export function actionGetMundosOk(mundos){
    return {
        type:GET_MUNDOS_OK,
        payload:mundos
    }
}


export function actionGetMundosFail(error){
    return {
        type:GET_MUNDOS_FAIL,
        payload:error,
     }
}




export function getMundos(){
    return async (dispatch) =>{
        dispatch(actionGetMundos())
        try {
            const response = await axios.get("http://localhost:3000/mundos")
             dispatch(actionGetMundosOk(response.data))
        } catch(error){
            dispatch(actionGetMundosFail(error))
        }
    }
}


// MUNDO UNICOS :

export function actionGetSingleMundo(mundoId){
    return {
        type: GET_SINGLE_MUNDO,
        payload:mundoId
    }
}


export function actionGetSingleMundoOk(mundo){
    return{
        type: GET_SINGLE_MUNDO_OK,
         payload:mundo
    }
}

export function actionGetSingleMundoFail(error){
    return {
       type: GET_SINGLE_MUNDO_FAIL,
       payload:error,
    }
}



export function getSingleMundo(mundoId){
    return async (dispatch) =>{
        dispatch(actionGetSingleMundo(mundoId))
        try {
            const response = await axios.get(`http://localhost:3000/mundos/${mundoId}`)
             dispatch(actionGetSingleMundoOk(response.data))
        } catch(error){
            dispatch(actionGetSingleMundoFail(error))
        }
    }
}

