import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from "./../../Redux/user/userActions";
//import {setCurrentUser} from

export class SigninForm extends Component {
state = {
        fullname: "",
        email: "",
        password:""
};



handleFormInput = (e) => {
    var {name,value} = e.target;
    this.setState((prevState)=>
    ({
        [name]:value
    }))
}

handleFormSubmit = (e) => {
    e.preventDefault();
    var {email,password} = this.state;
    var userObj = {
        
        password : password,
        email: email,
    }
    this.props.signin(userObj);
}
render() {
    return(
        <div>
            <h1>Signin Form</h1>
            <form onSubmit =  {this.handleFormSubmit}>
            
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
     <button type = "submit" >Signin  </button>
</form>
        </div>
    )
    }
}
var actions = {
    signin
}

export default connect(null, actions)(SigninForm)