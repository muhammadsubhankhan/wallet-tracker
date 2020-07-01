import React from 'react'
import { Link, withRouter } from 'react-router-dom';


const TransactionListItem = (props) => {
    var {transaction: {title,cost,type,createdAt,transactionId },

    location: {pathname}

} = props;

console.log(props.transaction)
console.log(transactionId)



    return (
        <div>
            <div style= {{display : 'flex'}}>

    <h3>{title}---</h3>
        
    <h3>{cost}---</h3>
        
    <h3>{type}---</h3>
    <h3>{transactionId}---</h3>
  
        <Link to={`${pathname}/${transactionId}`}><button>Edit </button></Link>
            </div>

        </div>
    )
}

export default withRouter(TransactionListItem)