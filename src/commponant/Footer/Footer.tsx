import React from 'react'
import './Footer.css'

import {Files , Globe , Discord , Youtube , Twitter , Instagram} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import { ShopWindow } from 'react-bootstrap-icons'
export default function Footer() {
  return (
    <section className="footer">
        <div className="my-row no1">
<div className="box">
<div className="logo">
        <Link to="/"> <h4> <ShopWindow /> {' '} NFT Marketplace </h4></Link>
      </div>
<h5>NFT marketplace UI created with Abdelrahman Khalifa.</h5>
<h5>Join our community</h5>


<h5 style={{color:'rgba(133, 133, 132, 1)'}}> <Link to={'#'}> <Globe /> </Link>    <Link to={'#'}> <Discord /> </Link>     <Link to={'#'}> <Youtube /> </Link>    <Link to={'#'}><Twitter /> </Link>  <Link to={'#'}><Instagram /> </Link>  </h5>

</div>

<div className="box">
    <h4>Explore</h4>
<h5 > <Link to='/marketplace' style={{color:'rgba(133, 133, 132, 1)'}}>Marketplace</Link> </h5>

<h5> <Link to='/ranking' style={{color:'rgba(133, 133, 132, 1)'}}>Rankings</Link> </h5>

<h5> <Link to='/wallet' style={{color:'rgba(133, 133, 132, 1)'}}>Connect a wallet</Link> </h5>
</div>
<div className="box box3">
    <h4>Join our weekly digest</h4>
  

<h5 style={{color:'rgba(133, 133, 132, 1)'}}> Get exclusive promotions & updates straight to your inbox.</h5>

<form>
    <div className="form-inner">
      <input type="text" placeholder="Enter Your Email Address" />
      <button> submit </button>
    </div>
  </form>
</div>
        </div>
        <h5 className='h5-border'>Ⓒ NFT Market. Use this template freely.</h5>
    </section>
  )
}
