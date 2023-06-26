import React from "react";
import "./Home.css";

import { Brush, Palette2, Camera, MusicNoteBeamed, CameraVideo, Eyedropper, Dribbble, Globe, Eye } from 'react-bootstrap-icons'
import Img from "../../Images/3d.gif";
import { Link } from "react-router-dom";
import { Rocket } from "react-bootstrap-icons";
import Im1 from '../../Images/im1.png'
import Im2 from '../../Images/im2.png'
import Im3 from '../../Images/im3.png'
import Im4 from '../../Images/im4.png'
import Im5 from '../../Images/im5.png'
import Im6 from '../../Images/im6.png'
import Im7 from '../../Images/im7.png'
import Im8 from '../../Images/im8.png'
import Im9 from '../../Images/im9.png'
import Im11 from '../../Images/im11.png'
import Im12 from '../../Images/im12.png'
import Im10 from '../../Images/im10.png'
import Br1 from '../../Images/br1.png'
import Br2 from '../../Images/br2.png'
import Br3 from '../../Images/br3.png'
import Br4 from '../../Images/br4.png'
import Br5 from '../../Images/br5.png'
import Br6 from '../../Images/br6.png'
import Br7 from '../../Images/br7.png'
import Br8 from '../../Images/br8.png'
import Ex1 from '../../Images/ex1.png'
import Ex2 from '../../Images/ex2.png'
import Ex3 from '../../Images/ex3.png'
import Exp1 from '../../Images/exp1.png'
import Exp2 from '../../Images/exp2.png'
import Exp3 from '../../Images/exp3.png'
import DateBeforeBlock from "../../commponant/Date/DateBeforeBlock.tsx";

import Icon1 from '../../Images/ico1.png'
import Icon2 from '../../Images/ico2.png'
import Icon3 from '../../Images/ico3.png'
import Em from '../../Images/em.png'








export default function Home() {
  return (
    <div className="Home">
      <section>
        <div className="my-row Discover">
          <div className="Left">
            <h1>Discover digital art & Collect NFTs</h1>
            <h5>
              NFT marketplace UI created with Abdelrahman Khalifa . Collect, buy and
              sell art from more than 20k NFT artists.
            </h5>
            <div className="colection-1">
              <div className="above">
                <Link className="my-btn" to="#">
                  {" "}
                  <Rocket /> Get Started{" "}
                </Link>
              </div>
              <div className="my-row" style={{ width: '100%', justifyContent: 'space-between' }}>
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
            </div>

          </div>

          <div className="Right">
            <img src={Img} alt="" style={{ width: "100%" }} />
            <div className="colection-2">
              <div className="above">
                <Link className="my-btn" to="#">
                  {" "}
                  <Rocket /> Get Started{" "}
                </Link>
              </div>
              <div className="my-row" style={{ width: '100%', justifyContent: 'space-between' }}>
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
            </div>

          </div>
        </div>

        {/* /////////////////////////////////////////////// Trending ///////////////////////////////////////////////////////////////// */}

        <div className="Trending">
          <h4 style={{ fontWeight: 'bold' }}>Trending Collection</h4>
          <p className="my-p">Checkout our weekly updated trending collection.</p>

          <div className="my-grid">
            <Link to={'/artist'} className="trend1">
              <div className="image">
                <img src={Im1} alt="" />
              </div>

              <div className="my-row" style={{ justifyContent: 'space-between' }}>
                <div className="sm-img">
                  <img src={Im2} alt="" />
                </div>
                <div className="sm-img">
                  <img src={Im3} alt="" />
                </div>
                <div className="sm-bg">
                  <span>1025+</span>
                </div>
              </div>

              <h5>DSGN Animals</h5>
              <div className="my-row" style={{ justifyContent: 'start' }}>
                <div className="person">
                  <img src={Im10} alt="" style={{ width: '100%' }} />
                </div>
                <p className="my-p2">MrFox</p>
              </div>

            </Link>

            <Link to={'/artist'} className="trend2">
              <div className="image">
                <img src={Im4} alt="" />
              </div>

              <div className="my-row" style={{ justifyContent: 'space-between' }}>
                <div className="sm-img">
                  <img src={Im5} alt="" />
                </div>
                <div className="sm-img">
                  <img src={Im6} alt="" />
                </div>
                <div className="sm-bg">
                  <span>1025+</span>
                </div>
              </div>
              <h5>Magic Mushrooms</h5>
              <div className="my-row" style={{ justifyContent: 'start' }}>
                <div className="person">
                  <img src={Im11} alt="" style={{ width: '100%' }} />
                </div>
                <p className="my-p2">Shroomie</p>
              </div>
            </Link>
            <Link to={'/artist'} className="trend3">
              <div className="image">
                <img src={Im7} alt="" />
              </div>

              <div className="my-row" style={{ justifyContent: 'space-between' }}>
                <div className="sm-img">
                  <img src={Im8} alt="" />
                </div>
                <div className="sm-img">
                  <img src={Im9} alt="" />
                </div>
                <div className="sm-bg">
                  <span>1025+</span>
                </div>
              </div>
              <h5>Disco Machines</h5>
              <div className="my-row" style={{ justifyContent: 'start' }}>
                <div className="person">
                  <img src={Im12} alt="" style={{ width: '100%' }} />
                </div>
                <p className="my-p2">BeKind2Robots</p>
              </div>
            </Link>



          </div>




        </div>
        {/* /////////////////////////////////////////////// Creators ///////////////////////////////////////////////////////////////// */}


        {/* /////////////////////////////////////////////// Browes ///////////////////////////////////////////////////////////////// */}
        <div className="Browse">

          <h4 style={{ fontWeight: 'bold' }}>Browse Categories</h4>
          <div className="my-grid">

            <Link className="browse-box" to={""}>
              <div className="browse-inner">
                <div className="image">
                  <img src={Br2} alt="" />
                  <div className="image-inner">
                    <span> <Brush />  </span>
                  </div>
                </div>
                <h5>Art</h5>
              </div>

            </Link>


            <Link className="browse-box" to={""}>
              <div className="browse-inner">
                <div className="image">
                  <img src={Br1} alt="" />
                  <div className="image-inner">
                    <span> <Palette2 /> </span>
                  </div>
                </div>
                <h5>Collectibles</h5>
              </div>

            </Link>

            <Link className="browse-box" to={""}>
              <div className="browse-inner">
                <div className="image">
                  <img src={Br3} alt="" />
                  <div className="image-inner">
                    <span> <MusicNoteBeamed /> </span>
                  </div>
                </div>
                <h5>Music </h5>
              </div>

            </Link>

            <Link className="browse-box" to={""}>
              <div className="browse-inner">
                <div className="image">
                  <img src={Br4} alt="" />
                  <div className="image-inner">
                    <span> <Camera /> </span>
                  </div>
                </div>
                <h5>Photography</h5>
              </div>

            </Link>

            <Link className="browse-box" to={""}>
              <div className="browse-inner">
                <div className="image">
                  <img src={Br5} alt="" />
                  <div className="image-inner">
                    <span> <CameraVideo /> </span>
                  </div>
                </div>
                <h5>Video</h5>
              </div>

            </Link>

            <Link className="browse-box" to={""}>
              <div className="browse-inner">
                <div className="image">
                  <img src={Br6} alt="" />
                  <div className="image-inner">
                    <span><Eyedropper />  </span>
                  </div>
                </div>
                <h5>Utility</h5>
              </div>

            </Link>

            <Link className="browse-box" to={""}>
              <div className="browse-inner">
                <div className="image">
                  <img src={Br7} alt="" />
                  <div className="image-inner">
                    <span> <Dribbble /> </span>
                  </div>
                </div>
                <h5>sport</h5>
              </div>

            </Link>

            <Link className="browse-box" to={""}>
              <div className="browse-inner">
                <div className="image">
                  <img src={Br8} alt="" />
                  <div className="image-inner">
                    <span> <Globe /> </span>
                  </div>
                </div>
                <h5>Virtual Worlds</h5>
              </div>

            </Link>

          </div>


        </div>

        {/* /////////////////////////////////////////////// Creators ///////////////////////////////////////////////////////////////// */}

        <div className="Trending Explore">
          <h4 style={{ fontWeight: 'bold' }}>Trending Collection</h4>
          <p className="my-p">Checkout our weekly updated trending collection.</p>

          <div className="my-grid">
            <Link to={'/artist'} className="trend1">
              <div className="trend-inner">
                <div className="image">
                  <img src={Ex1} alt="" />
                </div>

                <h5>DSGN Animals</h5>
                <div className="my-row" style={{ justifyContent: 'start' }}>
                  <div className="person">
                    <img src={Exp1} alt="" style={{ width: '100%' }} />
                  </div>
                  <p className="my-p2">MrFox</p>
                </div>
                <div className="my-row" style={{ justifyContent: 'space-between' }}>
                  <div className="my-col"> <p className="price">Price</p> <p className="num">1.63 ETH</p>   </div>
                  <div className="my-col"> <p className="price">Highest Bid</p> <p className="num">0.33 wETH</p>   </div>
                </div>


              </div>
            </Link>

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

            <Link to={'/artist'} className="trend1">
              <div className="trend-inner">
                <div className="image">
                  <img src={Ex3} alt="" />
                </div>

                <h5>DSGN Animals</h5>
                <div className="my-row" style={{ justifyContent: 'start' }}>
                  <div className="person">
                    <img src={Exp3} alt="" style={{ width: '100%' }} />
                  </div>
                  <p className="my-p2">MrFox</p>
                </div>

                <div className="my-row" style={{ justifyContent: 'space-between' }}>
                  <div className="my-col"> <p className="price">Price</p> <p className="num">1.63 ETH</p>   </div>
                  <div className="my-col"> <p className="price">Highest Bid</p> <p className="num">0.33 wETH</p>   </div>
                </div>
              </div>
            </Link>


          </div>




        </div>

        {/* /////////////////////////////////////////////// magice ///////////////////////////////////////////////////////////////// */}
      </section>
      <div className="magice">
        <div className="magic-1 my-row">
          <div className="my-col">

            <div className="my-row man" style={{ justifyContent: 'start' }}>
              <div className="person">
                <img src={Exp1} alt="" style={{ width: '100%' }} />
              </div>
              <p className="my-p2">MrFox</p>
            </div>
            <div className="my-h1">Magic Mashrooms</div>
            <Link to={'#'} className="above no1">
              <button className="my-btn2 my-row"> <Eye /> <p> See NFT </p></button>
            </Link>

          </div>

          <div className="date2">

            <DateBeforeBlock />


            <Link to={'#'} className="above no2">
              <button className="my-btn2 my-row"> <Eye /> <p> See NFT </p></button>
            </Link>
          </div>


        </div>


      </div>

<section>
<div className="Creators find">

<h4 style={{ fontWeight: 'bold' }}>How it works</h4>
<p className="my-p">Find out how to get started</p>


<div className="my-grid">


  <Link to={'#'} className="creator-box">
    <div className="creator-inner">
      <div className="image">
        
        <img src={Icon1} alt="" />
      </div>

      <div className="my-col">
        <h5 style={{ fontWeight: '600' }}>Setup Your wallet</h5>

        <p ><span>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</span></p>

      </div>
    </div>
  </Link>
  <Link to={'#'} className="creator-box">
    <div className="creator-inner">
      <div className="image">
        
        <img src={Icon2} alt="" />
      </div>

      <div className="my-col">
        <h5 style={{ fontWeight: '600' }}>Create Collection</h5>

        <p ><span>Upload your work and setup your collection. Add a description, social links and floor price.Add a description</span></p>

      </div>
    </div>
  </Link>
  <Link to={'#'} className="creator-box">
    <div className="creator-inner">
      <div className="image">
        
        <img src={Icon3} alt="" />
      </div>

      <div className="my-col">
        <h5 style={{ fontWeight: '600' }}>Start Earning</h5>

        <p ><span>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</span></p>

      </div>
    </div>
  </Link>
</div>



</div>

<div className="join">
<div className="image">
  <img src={Em} alt="" />
</div>
<div className="right-side">
  <h1>Join our weekly digest</h1>
  <p>Get exclusive promotions & updates straight to your inbox.</p>
  <form>
    <div className="form-inner">
      <input type="text" placeholder="Enter Your Email Address" />
      <button> submit </button>
    </div>
  </form>
</div>

</div>



</section>

    </div>
  );
}
