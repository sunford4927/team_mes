import { Make_ID } from "../make";

// Action type ( 액션 타입 )
// WRITE, CHECK, DELETE, UPDATE
const WRITE = 'PLAN_MANAGEMENT/WRITE';
const CHECK = 'PLAN_MANAGEMENT/CHECK';
const UPDATE = 'PLAN_MANAGEMENT/UPDATE';
const DELETE = 'PLAN_MANAGEMENT/DELETE';

// Action Creator Function ( 액션 함수 생성 )
export const planWrite = (data) => ({type: WRITE, data})
export const planCheck = (data) => ({type: CHECK, data})
export const planDelete = (data) => ({type: DELETE, data})
export const planUpdate = (data) => ({type: UPDATE, data})

// init State ( 초기 상태 ) 
const Initialstate = {
    plan : []
}

// Reducer function ( 리듀서 함수 )
export const planReducer = (state=Initialstate,action) =>{
    switch(action.type){
        case WRITE:
            return {};
        case CHECK:
            let data = Make_ID(action.data)
            return {
                ...state, 
                type : CHECK,
                plan : data, 
                };
        case UPDATE:
            return {};
        case DELETE:
            return {};
        default:
            return state
    }
}