import React,{useState} from 'react'
import './ArtistProfile.css'
import Back from '../../Images/back2.png'
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











import Per from '../../Images/per1.png'
import {Files , Globe , Discord , Youtube , Twitter , Instagram} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'



export default function ArtistProfile() {
const [Filter , setFilter] = useState('cre')
  return (
    <div className="artist">
        <div className="image">
            <img src={Back} alt="" />
            <div className="abs"></div>
        </div>

<section className="mid">
<div className="person">
<img src={Per} alt="" />
</div>

<div className="my-row no3">
    <h2>Animakid</h2> <div className="all-btn my-row" style={{gap:'1.5rem'}}>

<div className="above ab1">
<div className="my-btn"> <span><Files /> </span> 0xc0E3...B79C</div>
</div>
<div className="above ">
    
<div  style={{backgroundColor:'transparent' , border:' rgba(162, 89, 255, 1) solid 2px'}} className="my-btn"> <span style={{color:'rgba(162, 89, 255, 1)'}}>+</span>  Follow</div>

</div>

    </div>
</div>

<div className="my-row no1" style={{  justifyContent: 'space-between' }}>
                <div className="my-col">
                  {" "}
                  <h4>240k+ </h4> <h4>Total Sale</h4>{" "}
                </div>{" "}


                <div className="my-col">
                  {" "}
                  <h4>100k+</h4> <h4>Auctions</h4>{" "}
                </div>
                <div className="my-col">
                  {" "}
                  <h4>240k+ </h4> <h4>Artists</h4>{" "}
                </div>
              </div>
              
<h5 style={{color:'rgba(133, 133, 132, 1)'}}>Bio</h5>

<h5 style={{color:'#FFFFFF'}}>The internet's friendliest designer kid.</h5>


<h5 style={{color:'rgba(133, 133, 132, 1)'}}>Links</h5>

<h5 style={{color:'rgba(133, 133, 132, 1)'}}> <Link to={'#'}> <Globe /> </Link>    <Link to={'#'}> <Discord /> </Link>     <Link to={'#'}> <Youtube /> </Link>    <Link to={'#'}><Twitter /> </Link>  <Link to={'#'}><Instagram /> </Link>  </h5>
</section>

<section className="end">

<div className="my-row titel">

<h5 onClick={()=>setFilter('cre')}  className={` ${Filter === 'cre' ? 'active' : ''}`} >Created <span>7</span></h5>
<h5 onClick={()=>setFilter('own')} className={` ${Filter === 'own' ? 'active' : ''}`} > owned  <span>4</span>  </h5>
<h5 onClick={()=>setFilter('coll')}className={` ${Filter === 'coll' ? 'active' : ''}`}>Collection <span>2</span> </h5>



</div>
<div className="my-grid create" style={{display:Filter==='cre'?'grid':'none'}}>


<Card Ex2={Ex1} Exp2={Exp1}  />

<Card Ex2={Ex2} Exp2={Exp2}  />
<Card Ex2={Ex3} Exp2={Exp1}  />
<Card Ex2={Ex4} Exp2={Exp1}  />

<Card Ex2={Ex5} Exp2={Exp2}  />
<Card Ex2={Ex6} Exp2={Exp1}  />
<Card Ex2={Ex7} Exp2={Exp1}  />


</div>

<div className="my-grid owend" style={{display:Filter==='own'?'grid':'none'}}>


<Card Ex2={Ex4} Exp2={Exp1}  />

<Card Ex2={Ex5} Exp2={Exp2}  />
<Card Ex2={Ex6} Exp2={Exp1}  />
<Card Ex2={Ex7} Exp2={Exp1}  />



</div>
<div className="my-grid collec" style={{display:Filter==='coll'?'grid':'none'}}>


<Card Ex2={Ex8} Exp2={Exp1}  />

<Card Ex2={Ex9} Exp2={Exp2}  />



</div>
</section>




    </div>
  )
}
