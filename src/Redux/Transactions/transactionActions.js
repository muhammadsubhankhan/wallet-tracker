import { firestore } from "../../Firebase/firebase"
import { ADD_TRANSACTION, SET_TRANSACTIONS } from "./transactionConstant"

export var addTransaction  = (transactionObj)  => async (dispatch) => {

    try {
        await firestore.collection("transactions").add(transactionObj)
        console.log(transactionObj)
        //upadate app state
        dispatch({
            type : ADD_TRANSACTION,
            payload:{
                transaction: transactionObj
                
            }
            
        })
        console.log(transactionObj)
        
    } catch (error) {
        console.log(error)
    }
    


    }
    export var fetchTransactions = (uid) => async (dispatch) =>{
        try {
            
            var transactions = []; 
            var transactionSnap = await firestore.collection("transactions").where("addedBy","==",uid).orderBy("createdAt","desc").get();
            transactionSnap.forEach((doc) => {
                transactions.push({...doc.data(), transacionId: doc.id});
            }) 
            
            dispatch({
                type: SET_TRANSACTIONS,
                payload: {
                    transactions
                }
            })
            console.log(transactions)

        } catch (error) {
            console.log(
                error
            )
        }
    }