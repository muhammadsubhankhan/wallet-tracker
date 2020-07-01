import React from 'react'
import  SignupForm  from '../../Components/SignupForm/SignupForm'
import  SigninForm  from '../../Components/SigninForm/SigninForm'
import GoogleSignin from '../../Components/GoogleSignin/GoogleSignin'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Home = (props) => {
  //   console.log(props.user)
     var {user}= props;
     

    return (
        <div>
      {user ? (  <Redirect to={`/dashboard/${user.uid}/Transactions`}/>)      
      :
      ( <div>
          <h1>Home Page</h1>       
    <SignupForm/>
    <SigninForm/>
    <GoogleSignin/>
     </div>
      )} 
        </div>
    )
}

  var mapStateToProps = (state) =>({
      user : state.user.currentUser
  })

    // console.log(mapStateToProps)
    
export default connect(mapStateToProps)(Home);
