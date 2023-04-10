import { Make_ID } from "../make";

// Action type ( 액션 타입 )
// WRITE, CHECK, DELETE, UPDATE
const WRITE = 'MACHINE_INFO/WRITE';
const CHECK = 'MACHINE_INFO/CHECK'; 
const DELETE = 'MACHINE_INFO/DELETE';
const UPDATE = 'MACHINE_INFO/UPDATE';


// Action Creator Function ( 액션 함수 생성 )
export const machineWrite = (data) => ({type : WRITE, data})
export const machineCheck = (data) => ({type : CHECK, data})
export const machineDelete = (data) => ({type : DELETE, data})
export const machineUpdate = (data) => ({type : UPDATE, data})


// init State ( 초기 상태 ) 
const Initialstate = {
    machine : []
}


// Reducer function ( 리듀서 함수 )
export const machineReducer=(state=Initialstate, action)=> {
    switch(action.type){
        case WRITE:
            return {};
        case CHECK:
            let data = Make_ID(action.data)
            return {
                ...state, 
                type : CHECK,
                machine : data, 
                };
        case DELETE:
            return {};
        case UPDATE:
            return {};
        default: 
            return state;
    }
}