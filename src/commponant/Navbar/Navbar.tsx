import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import {Person , ShopWindow , List , X} from 'react-bootstrap-icons'
import './Navbar.css'
export default function Navbar() {
const [isClose , setClose]=useState(false)

  return (
    <nav className='Navbar'>
      <div className="nav-inner ">
        <div className="my-list" >
      <div className="logo">
        <Link to="/"> <h3> <ShopWindow /> {' '} NFT Marketplace </h3></Link>
      </div>

<div className="list">
  <h4 onClick={()=>setClose(!isClose)}> {isClose? <X/> :<List />  } </h4>
</div>
</div>

      <div className="links my-row d-none-first">
        <ul className='my-row'>
          <li>
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link to="/ranking">Rankings</Link>
          </li>
          <li>
            <Link to="/wallet">Connect a Wallet</Link>
          </li>
        </ul>
      
      <div className='above' >
        <Link to="/sign_up" className="my-btn "><Person /> {' '} Sign up</Link>
      </div>
      </div>

      <div className={`links my-column d-none-saconde ${isClose?`animate`:`noneHight`}`}>
        <ul className='my-column'>
          <li>
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link to="/ranking">Rankings</Link>
          </li>
          <li>
            <Link to="/wallet">Connect a Wallet</Link>
          </li>
        </ul>
      
      <button className="my-btn ">
        <Link to="/sign_up"><Person /> {' '} Sign up</Link>
      </button>
      </div>


      </div>
    </nav>
  )
}
