import React from 'react'
import './Wallet.css'
import Back from '../../Images/back.PNG'
import Fox from '../../Images/fox.png'
import Conn from '../../Images/Conn.png'
import Wall from '../../Images/wall.png'

export default function Wallet() {
  return (
   
<div className="signin">
<div className="my-row">
<div className="left">
    <img src={Back} alt="" />
</div>

<section className="right">
<h2>
Connect wallet
</h2>
<h5>Choose a wallet you want to connect. There are several wallet providers.</h5>

<div className="inner">

<div className="box my-row">
  <img src={Fox} alt="" />
  <h5>Metamask</h5>
</div>



<div className="box my-row">
  <img src={Wall} alt="" />
  <h5>Wallet Connect</h5>
</div>

<div className="box my-row">
  <img src={Conn} alt="" />
  <h5>Coinbase</h5>
</div>
</div>
</section>
</div>
</div>

  )
}
