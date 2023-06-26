import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export default function Card({Ex2,Exp2}) {
  return (
    <Link to={'/artist'} className="trend1">
              <div className="trend-inner">
                <div className="image">
                  <img src={Ex2} alt="" />
                </div>

                <h5>DSGN Animals</h5>
                <div className="my-row" style={{ justifyContent: 'start' }}>
                  <div className="person">
                    <img src={Exp2} alt="" style={{ width: '100%' }} />
                  </div>
                  <p className="my-p2">MrFox</p>
                </div>

                <div className="my-row" style={{ justifyContent: 'space-between' }}>
                  <div className="my-col"> <p className="price">Price</p> <p className="num">1.63 ETH</p>   </div>
                  <div className="my-col"> <p className="price">Highest Bid</p> <p className="num">0.33 wETH</p>   </div>
                </div>
              </div>
            </Link>
  )
}
