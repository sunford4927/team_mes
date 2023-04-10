import { Make_ID } from "../make";

// Action type ( 액션 타입 )
// WRITE, CHECK, DELETE, UPDATE
const WRITE = 'ORDER_MANAGEMENT/WRITE';
const CHECK = 'ORDER_MANAGEMENT/CHECK';
const UPDATE = 'ORDER_MANAGEMENT/UPDATE';
const DELETE = 'ORDER_MANAGEMENT/DELETE';

// Action Creator Function ( 액션 함수 생성 )
export const orderWrite = (data) => ({type: WRITE, data})
export const orderCheck = (data) => ({type: CHECK, data})
export const orderDelete = (data) => ({type: DELETE, data})
export const orderUpdate = (data) => ({type: UPDATE, data})

// init State ( 초기 상태 ) 
const Initialstate = {
    order : []
}

// Reducer function ( 리듀서 함수 )
export const orderReducer = (state=Initialstate,action) =>{
    switch(action.type){
        case WRITE:
            return {};
        case CHECK:
            let data = Make_ID(action.data)
            return {
                ...state, 
                type : CHECK,
                order : data, 
                };
        case UPDATE:
            return {};
        case DELETE:
            return {};
        default:
            return state
    }
}