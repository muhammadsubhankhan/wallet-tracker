import {combineReducers} from "redux";
import userReducer from './user/userReducer';
import transactionReducer from "./Transactions/transactionReducer";

var rootReducer = combineReducers ({
    user: userReducer , 
    transactions : transactionReducer
})

export default rootReducer;