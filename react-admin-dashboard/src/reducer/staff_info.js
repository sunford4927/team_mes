import { Make_IDO } from "../make";

// Action type ( 액션 타입 )
// WRITE, CHECK, DELETE, UPDATE
const WRITE = 'STAFF_INFO/WRITE';
const CHECK = 'STAFF_INFO/CHECK';
const UPDATE = 'STAFF_INFO/UPDATE';
const DELETE = 'STAFF_INFO/DELETE';

// Action Creator Function ( 액션 함수 생성 )
export const staffWrite = (data) => ({type: WRITE, data})
export const staffCheck = (data) => ({type: CHECK, data})
export const staffDelete = (data) => ({type: DELETE, data})
export const staffUpdate = (data) => ({type: UPDATE, data})

// init State ( 초기 상태 ) 
const Initialstate = {
    staff : []
}

// Reducer function ( 리듀서 함수 )
export const staffReducer = (state=Initialstate,action) =>{
    switch(action.type){
        case WRITE:
            return {};
        case CHECK:
            let data = Make_IDO(action.data)
            return {
                ...state, 
                type : CHECK,
                staff : data, 
                };
        case UPDATE:
            return {};
        case DELETE:
            return{};
        default:
            return state
    }
}