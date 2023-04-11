import axios from 'axios';
import { Make_ID } from '../make';

// Action type ( 액션 타입 )
// WRITE, CHECK, DELETE, UPDATE
const WRITE = 'MATERIALS_INFO/WRITE';
const CHECK = 'MATERIALS_INFO/CHECK'; 
const DELETE = 'MATERIALS_INFO/DELETE';
const UPDATE = 'MATERIALS_INFO/UPDATE';


// Action Creator Function ( 액션 함수 생성 )
export const materialsWrite = (data) => ({type : WRITE, data})
export const materialsCheck = (data) => ({type : CHECK, data})
export const materialsDelete = (data) => ({type : DELETE, data})
export const materialsUpdate = (data) => ({type : UPDATE, data})

const data = axios.get("http://127.0.0.1:8000/mes/materials/")
// init State ( 초기 상태 ) 
const Initialstate = {
    materials : [],
    test : [data]
}
console.log(Initialstate);
// Reducer function ( 리듀서 함수 )
export const materialsReducer = (state=Initialstate,action) => {
    console.log(action)
    if(action.type === WRITE){
        return {...state, 
            type : WRITE,
            content : action.data, 
        }
    }
    if(action.type === CHECK){
        let data = Make_ID(action.data)
        return {...state, 
            type : CHECK,
            materials : data, 
        }
    }
    if(action.type === DELETE){
        return {...state, 
            type : 'ADDORDER',
            order : action.content, 
        }
    }
    if(action.type === UPDATE){
        return {...state, 
            type : 'ADDCUSTOMER',
            customers : action.content, 
        }
    }
    return state
}


