import React from 'react'
import TransactionListItem from '../TransactionListItem/TransactionListItem'

const TransationList = (props) => {
    var {transactions} = props
    console.log(transactions)
    return (
        <div>
        <h1>TransationList</h1>
        {transactions.map
        ((transaction) =>
         <TransactionListItem 
         key={transaction.transactionId} 
         transaction= {transaction} />)}
        </div>
    )
}

export default TransationList
