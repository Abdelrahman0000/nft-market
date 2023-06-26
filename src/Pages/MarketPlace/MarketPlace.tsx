import React,{useState} from 'react'
import './market.css'
import Card from '../../commponant/Card/Card.tsx'
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


import {Search} from 'react-bootstrap-icons'




export default function ArtistProfile() {
const [Filter , setFilter] = useState('NFT')
  return (
    <div className="market">
      

<section className="mid">


    <h2>Animakid</h2>
<h5>Browse through more than 50k NFTs on the NFT Marketplace.</h5>

<form action="">
  <label>
    <input type="text" placeholder='Search your favourite NFTs' />
    <span > <Search /></span>
    </label>
</form>
</section>

<section className="end">

<div className="my-row titel">

<h5 onClick={()=>setFilter('NFT')}  className={` ${Filter === 'NFT' ? 'active' : ''}`} >NFTs <span>8</span></h5>

<h5 onClick={()=>setFilter('coll')}className={` ${Filter === 'coll' ? 'active' : ''}`}>Collection <span>5</span> </h5>



</div>
<div className="my-grid create" style={{display:Filter==='NFT'?'grid':'none'}}>


<Card Ex2={Ex1} Exp2={Exp1}  />

<Card Ex2={Ex2} Exp2={Exp2}  />
<Card Ex2={Ex3} Exp2={Exp1}  />
<Card Ex2={Ex4} Exp2={Exp1}  />

<Card Ex2={Ex7} Exp2={Exp1}  />

<Card Ex2={Ex5} Exp2={Exp2}  />
<Card Ex2={Ex6} Exp2={Exp1}  />
<Card Ex2={Ex7} Exp2={Exp1}  />


</div>

<div className="my-grid collec" style={{display:Filter==='coll'?'grid':'none'}}>


<Card Ex2={Ex8} Exp2={Exp1}  />

<Card Ex2={Ex4} Exp2={Exp1}  />

<Card Ex2={Ex5} Exp2={Exp2}  />
<Card Ex2={Ex6} Exp2={Exp1}  />
<Card Ex2={Ex9} Exp2={Exp2}  />



</div>
</section>




    </div>
  )
}
