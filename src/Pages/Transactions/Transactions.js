import React ,{Component} from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import TransactionForm from '../../Components/TransactionForm/TransactionForm'
import { fetchTransactions } from "./../../Redux/Transactions/transactionActions";
import TransationList from '../../Components/TransactionList/TransationList';

class transaction extends Component {
    componentDidMount() {
         var {fetchTransactions , match: {params: {uid}}} = this.props
         fetchTransactions(uid)
    }
    
    render() {
    var {user , transactions} = this.props
    
        return (
            <div>
            {user  ? (
                <div>
                <h1> transaction page.</h1>
                <TransactionForm/>
                <TransationList transactions={transactions} />
                 </div>
                
            )
            : ( <Redirect to="/"/>) 
            }
                
            </div>
        )
    }
}

var mapStateToProps = (state) =>({
    user : state.user.currentUser , 
    transactions: state.transactions
})
var actions = {
    fetchTransactions
}

export default connect(mapStateToProps, actions ) (withRouter(transaction))
