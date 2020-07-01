import React, {Component} from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Switch } from 'react-router-dom';
import transaction from './Pages/Transactions/Transactions';
import EditTransaction from './Pages/EditTransaction/EditTransaction';
import { auth, firestore } from './Firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser , removeCurrentUser } from "./Redux/user/userActions";
import Navbar from './Components/Navbar/Navbar';
class App extends Component {
 componentDidMount() {
  auth.onAuthStateChanged(async (user) => {
   try {if(user) {
      var { uid} = user;
     
      if(uid) {
        var userSnap = await  firestore.collection("users").doc(uid).get();
        if(userSnap.exists) {
          var userData = userSnap.data();
          var userObj = {
            fullname: userData.fullname,
            uid,
            email : userData.email
          }
//          console.log(userObj)
          this.props.setCurrentUser(userObj)
    
        } 
      }
          }
    else {
      this.props.removeCurrentUser();
    }
  }   catch(error){
    console.log(error)

  }
})

 }
 
 render(){
  return (

    <div>
    <Navbar/>
    <Switch>
     <Route path="/" component={Home} exact />
     <Route path="/dashboard/:uid/transactions" component={transaction} exact />
     <Route path="/dasboard/:uid/transactions/:transactionId" component={EditTransaction} />
     </Switch>


 

    </div>
  );
 }
}
var actions = {
  setCurrentUser ,
  removeCurrentUser
}

export default connect(null, actions) (App);
