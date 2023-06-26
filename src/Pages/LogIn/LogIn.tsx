import React from 'react'
import './Login.css'
import Back from '../../Images/back.PNG'
import {Person , Envelope , Lock} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function LogIn() {
  return (
   
<div className="signin">
<div className="my-row">
<div className="left">
    <img src={Back} alt="" />
</div>

<section className="right">
<h2>
LogIn
</h2>
<h5>Hello again, enter your data and complete your journey</h5>
<form action="">
    
 
<label htmlFor="">
       <span> <Envelope /> </span>
<input type="email" placeholder=' Your Email' />
</label>

<label htmlFor="">
       <span> <Lock />  </span>
<input type="password" placeholder=' Subject' />

</label>

<div className="above">
<Link to='/' className="my-btn">Log In</Link>
</div>

<div className="above">
<Link to='/sign_up' style={{backgroundColor:'transparent' , border:' rgba(162, 89, 255, 1) solid 2px'}} className="my-btn">Sign UP</Link>
</div>
</form>

</section>
</div>
</div>

  )
}
