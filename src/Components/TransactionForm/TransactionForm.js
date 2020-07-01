import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addTransaction} from './../../Redux/Transactions/transactionActions'
import { withRouter } from 'react-router-dom';
import { serverTimestamp, serverTimeStamp } from '../../Firebase/firebase';

 class TransactionForm extends Component {
    state={
        title: '',
        cost: 0,
        type : 'income'
    }

    handleFormInput = (e)=> {
        var {name,value} = e.target;
        this.setState({
            [name]: value, 
        })
    }

        handleSubmit = (e) =>  {
            e.preventDefault();
            var {title,cost,type} = this.state
            var {addTransaction,match : { params : {uid}}} = this.props
            var transactionObj = {
                title,
                cost,
                type,
                addedBy : uid,
                createdAt : serverTimeStamp()
            }
            
            console.log(transactionObj)
            addTransaction(transactionObj)

        }
    render() {
        var { title, cost, type } = this.state;
        return (

            <div>
             <form onSubmit = {this.handleSubmit}>
             <input type= "text"
               name= "title"
                  value= {title}
                   placeholder = "title"
                    onChange = {this.handleFormInput}
                    />


                    <input type= "text"
               name= "cost"
                  value= {cost}
                   placeholder = "cost"
                    onChange = {this.handleFormInput}
                    />
                    <select value= {type} onChange= {this.handleFormInput} name = "type">
                       <option value ="expense">
                           Expense
                       </option>

                          <option value ="income">
                           Income
                       </option>
                       
                       
                        </select>
                    <button type="submit"> ADD </button>
             </form>
            </div>
        )
    }
}
var actions = {
 addTransaction
}

export default connect(null,actions)(withRouter(TransactionForm))