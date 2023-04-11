import { combineReducers } from 'redux';
import { staffReducer } from './staff_info';
import { customerReducer } from './customer_info';
import { machineReducer } from './machine_info';
import { itemReducer } from './item_info';
import { orderReducer } from './order_management';
import { planReducer } from './plan_management';
import { materialsReducer } from './materials_info';
import { noticeReducer } from './notice_info';
import { monitoringReducer } from './monitoring_info';



// import { rootReducer } from "./index"






export const rootReducer = combineReducers({
    staffReducer,
    customerReducer,
    machineReducer,
    itemReducer,
    orderReducer,
    planReducer,
    materialsReducer,
    noticeReducer,
    monitoringReducer,
});

