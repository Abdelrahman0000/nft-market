import React, { useState, useEffect } from 'react';
import './Date.css'
export default function DateBeforeBlock() {
  const [countdown, setCountdown] = useState({ hours: 2, minutes: 0, seconds: 0 });
  useEffect(() => {
   const interval = setInterval(() => {
     if (countdown.seconds > 0) {
       setCountdown(prevCountdown => ({
         ...prevCountdown,
         seconds: prevCountdown.seconds - 1
       }));
     } else if (countdown.minutes > 0) {
       setCountdown(prevCountdown => ({
         ...prevCountdown,
         minutes: prevCountdown.minutes - 1,
         seconds: 59
       }));
     } else if (countdown.hours > 0) {
       setCountdown(prevCountdown => ({
         ...prevCountdown,
         hours: prevCountdown.hours - 1,
         minutes: 59,
         seconds: 59
       }));
     } else {
       clearInterval(interval);
     }
   }, 1000);
   return () => {
     clearInterval(interval);
   };
 }, [countdown]);
  return (
   <div className='timer'>
     <h6>Auction ends in:</h6>
     <div className="my-row">
      <div className="my-col">
     <p className='time-p'>{`${countdown.hours} : `} </p>
     <p>hours</p>
</div>
<div className="my-col">
     <p className='time-p'>{`${countdown.minutes} : `} </p>
     <p>Minutes</p>
</div>
<div className="my-col">
     <p className='time-p'>{`${countdown.seconds}`} </p>
     <p>secondes</p>
</div>


</div>
   </div>
 );
}