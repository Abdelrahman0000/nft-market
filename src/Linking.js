import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './commponant/Navbar/Navbar.tsx';
import Footer from './commponant/Footer/Footer.tsx';

// Import your components using lazy loading
const Home = lazy(() => import('./Pages/Home/Home.tsx'));

const SignUp = lazy(() => import('./Pages/SignIN/SginIn.tsx'));
const Wallet = lazy(() => import('./Pages/Wallet/Wallet.tsx'));
const Rankeing = lazy(() => import('./Pages/Rankeing/Rankeing.tsx'));

const Market = lazy(() => import('./Pages/MarketPlace/MarketPlace.tsx'));
const Artist = lazy(() => import('./Pages/ArtistProfile/ArtistProfile.tsx'));
const LogIn = lazy(() => import('./Pages/LogIn/LogIn.tsx'));


export default function Linking() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div className='all-load'><div v-if="loading" class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div></div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/log_in" element={<LogIn />} />
          <Route exact path="/artist" element={<Artist />} />
          <Route exact path="/ranking" element={<Rankeing />} />
          <Route exact path="/wallet" element={<Wallet />} />
          <Route exact path="/sign_up" element={<SignUp />} />

          <Route exact path="/marketplace" element={<Market />} />

        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}