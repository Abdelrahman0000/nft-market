import React from 'react'
import './SignIn.css'
import Back from '../../Images/back.PNG'
import {Person , Envelope , Lock} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function SginIn() {
  return (
   
<div className="signin">
<div className="my-row">
<div className="left">
    <img src={Back} alt="" />
</div>

<section className="right">
<h2>
Create account
</h2>
<h5>Welcome! enter your details and start creating, collecting and selling NFTs.</h5>
<form action="">
    
 
    <label htmlFor="">
       <span> <Person /> </span>
<input type="text" placeholder=' Your Name' />
</label>
<label htmlFor="">
       <span> <Envelope /> </span>
<input type="email" placeholder=' Your Email' />
</label>

<label htmlFor="">
       <span> <Lock />  </span>
<input type="password" placeholder=' Subject' />

</label>

<label htmlFor="">
       <span> <Lock />  </span>
<input type="password" placeholder=' Subject' />

</label>
<div className="above">
<Link to='/' className="my-btn">Sign Up</Link>
</div>

<div className="above">
<Link to='/log_in' style={{backgroundColor:'transparent' , border:' rgba(162, 89, 255, 1) solid 2px'}} className="my-btn">Log In</Link>
</div>
</form>

</section>
</div>
</div>

  )
}
