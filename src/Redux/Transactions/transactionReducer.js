import { ADD_TRANSACTION, SET_TRANSACTIONS } from "./transactionConstant";

var initialState = [];

var transactionReducer = (state = initialState, actions) => {
    var {type , payload } = actions
    switch (type) {
        case ADD_TRANSACTION:
            return [...state , {...payload.transaction, cretedAt: new Date().toISOString.split('T')[0]}]
            case SET_TRANSACTIONS:
            return [...payload.transactions]
        default:
        return state;
    }
}

export default transactionReducer;