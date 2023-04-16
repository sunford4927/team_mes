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





// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const staffConfig = {
//     key : 'staff',
//     storage : storage,
//     timeout : null,
//     whitelist : ["staffReducer"]
// }
// const customerConfig = {
//     key : 'customer',
//     storage : storage,
//     timeout : null,
//     whitelist : ["customerReducer"]
// }
// const machineConfig = {
//     key : 'machine',
//     storage : storage,
//     timeout : null,
//     whitelist : ["machineReducer"]
// }
// const itemConfig = {
//     key : 'item',
//     storage : storage,
//     timeout : null,
//     whitelist : ["itemReducer"]
// }
// const orderConfig = {
//     key : 'order',
//     storage : storage,
//     timeout : null,
//     whitelist : ["orderReducer"]
// }
// const planConfig = {
//     key : 'plan',
//     storage : storage,
//     timeout : null,
//     whitelist : ["planReducer"]
// }
// const materialsConfig = {
//     key : 'materials',
//     storage : storage,
//     timeout : null,
//     whitelist : ["materialsReducer"]
// }
// const noticeConfig = {
//     key : 'notice',
//     storage : storage,
//     timeout : null,
//     whitelist : ["noticeReducer"]
// }
// const monitoringConfig = {
//     key : 'monitoring',
//     storage : storage,
//     timeout : null,
//     whitelist : ["monitoringReducer"]
// }




// export const rootReducer = combineReducers({
//     staff : persistReducer(staffConfig, staffReducer),
//     customer : persistReducer(customerConfig, customerReducer),
//     machine : persistReducer(machineConfig, machineReducer),
//     item : persistReducer(itemConfig, itemReducer),
//     order : persistReducer(orderConfig, orderReducer),
//     plan : persistReducer(planConfig, planReducer),
//     materials : persistReducer(materialsConfig, materialsReducer),
//     notice : persistReducer(noticeConfig, noticeReducer),
//     materials : persistReducer(materialsConfig, materialsReducer),
//     monitoring : persistReducer(monitoringConfig, monitoringReducer),
// });

