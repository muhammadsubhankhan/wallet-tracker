import React from 'react'
import { connect } from 'react-redux'
import { signout } from "./../../Redux/user/userActions";
const Navbar = (props) =>  {
    var {signout ,  } = props
    return (
       <div>
        <h3>Navbar</h3>
        <button onClick={()=>{signout()}}
            >Signout</button>

    </div>
    
    )
    
    
}

var actions = {
    signout
}

export default connect(null, actions) (Navbar)