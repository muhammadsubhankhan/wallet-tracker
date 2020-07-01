import React, { Component } from 'react'
import {connect} from "react-redux"
 import { signup  } from './../../Redux/user/userActions';
import { withRouter } from 'react-router-dom';


export class SignupForm extends Component {
state = {
        fullname: "",
        email: "",
        password: ""
};

handleFormInput = (e) => {
    var {name,value} = e.target;
    this.setState((prevState) => ({
        [name]: value
    }) )
}

handleFormSubmit =  (e) => {

    e.preventDefault();

    var {fullname, email, password} = this.state;
   var userObj = { 
       fullname,
       email , 
       password
        };
        var {signup , history} = this.props;
        signup(userObj , () => {
            history.push('/dashboard/123/transactions')
        })
};

render(){
    return(

        <div>
     <h1>Signup Forms</h1>

     <form onSubmit= {this.handleFormSubmit}>
     <input
     type= "text"
     name="fullname"
     placeholder="Full Name"
     value={this.state.fullname}
     onChange={this.handleFormInput}
     />
     <input
     type= "text"
     name="email"
     placeholder="email"
     value={this.state.email}
     onChange={this.handleFormInput}
     />
     <input
     type= "password"
     name="password"
     placeholder="password"
     value={this.state.password}
     onChange={this.handleFormInput}
     />
     <button type = "submit" >Signup </button>
</form>
        </div>
    );
}

}
var actions = {
    signup
}

export default connect(null,actions)(withRouter(SignupForm))
 