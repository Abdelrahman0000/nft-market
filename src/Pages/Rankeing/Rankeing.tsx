import React, { useState } from 'react'
import './Rankeing.css'
import Back from '../../Images/back3.png'
import Card from '../../commponant/Card/Card.tsx'
import Data from '../../commponant/Date/DateBeforeBlock.tsx'
import Exp1 from '../../Images/exp1.png'
import Ex1 from '../../Images/ex1.png'
import Exp2 from '../../Images/exp2.png'
import Ex2 from '../../Images/ex2.png'
import Ex3 from '../../Images/ex3.png'
import Ex4 from '../../Images/ex4.png'
import Ex5 from '../../Images/ex5.png'
import Ex6 from '../../Images/ex6.png'
import Ex7 from '../../Images/ex7.png'
import Ex8 from '../../Images/ex8.png'
import Ex9 from '../../Images/ex9.png'


import Per from '../../Images/per1.png'
import {  Globe } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'



export default function Rankeing() {
  const [Filter, setFilter] = useState('cre')
  return (
    <div className="rank">
      <div className="image">
        <img src={Back} alt="" />

      </div>

      <section className="mid">


        <div className="my-row no3">
          <h2>The Orbitians</h2> <div className="all-btn ">
            <div className="dat-iiner">
              <Data />
              <div className="above ab1">
                <div className="my-btn">  Place Bid</div>
              </div>
            </div>
          </div>
        </div>




<div className="all-h5">
        <h5 style={{ color: 'rgba(133, 133, 132, 1)' , marginTop:'1.5rem' }}>Minted on Sep 30, 2022</h5>

        <h5 style={{ color: 'rgba(133, 133, 132, 1)' }}>Created By</h5>
        <h5 style={{ color: '#FFFFFF' }}>Orbitian</h5>


        <h5 style={{ color: 'rgba(133, 133, 132, 1)' }}>Description</h5>

        <h5 style={{ color: '#FFFFFF' }}>The Orbitians
          is a collection of 10,000 unique NFTs on the Ethereum blockchain,</h5>

        <h5 style={{ color: '#FFFFFF' }}>There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.  </h5>

        <h5 style={{ color: '#FFFFFF' }}>   They live in a metal space machines, high up in the sky and only have one foot on Earth.
          These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</h5>
          <h5 style={{ color: 'rgba(133, 133, 132, 1)' , marginTop:'1.5rem'}}>Details</h5>
          <h5 style={{ color: '#FFFFFF' }}> <span> <Globe /> </span>   View on Etherscan</h5>
          <h5 style={{ color: '#FFFFFF' }}> <span> <Globe /> </span>   View Original</h5>
         

</div>
      </section>

      <section className="end">

        <div className="my-row titel" style={{justifyContent:'space-between'}}>
<h3>More from this artist</h3>

<div className="above my-ab2">

        <div  style={{backgroundColor:'transparent' , border:' rgba(162, 89, 255, 1) solid 2px'}} className="my-btn "> <span style={{color:'rgba(162, 89, 255, 1)',marginRight:'10px'}}>{'>'}</span>  Follow</div>
</div>

        </div>
        <div className="my-grid create" style={{ display: Filter === 'cre' ? 'grid' : 'none' }}>


          <Card Ex2={Ex1} Exp2={Exp1} />

          <Card Ex2={Ex2} Exp2={Exp2} />
          <Card Ex2={Ex3} Exp2={Exp1} />
          <Card Ex2={Ex4} Exp2={Exp1} />

          <Card Ex2={Ex5} Exp2={Exp2} />
          <Card Ex2={Ex6} Exp2={Exp1} />
          <Card Ex2={Ex7} Exp2={Exp1} />




        </div>

<div className="above  me1">

        <div  style={{backgroundColor:'transparent' , border:' rgba(162, 89, 255, 1) solid 2px'}} className="my-btn"> <span style={{color:'rgba(162, 89, 255, 1)',marginRight:'10px'}}>{'>'}</span>  Follow</div>
</div>
      </section>




    </div>
  )
}