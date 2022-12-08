import React from 'react'
import {gsap} from 'gsap';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import aboutimg from '../assets/images.png'
import girlimg from '../assets/girl.png'
import ScrollTrigger from 'gsap/ScrollTrigger';

export const About=()=> {

  const show=()=>{
    
      const t=gsap.timeline();

      t.to(".btn",{
        rotate:"270deg",
        opacity:0

      })
      t.to(".imgbox",{
        rotate:"360deg",
        opacity:0
      })
      t.fromTo(".myinfo",{
        opacity:0,
        width:"0%",
        scale:0.2,
        delay:"2s"
      
      },{
        opacity:1,
        scale:0.9,
        // ease:'elastic',
    width:"70%"
    
        // x:"2.5vw",
      })
     
    
    }
    const close=()=>{
     const p=gsap.timeline();
     p.to(".myinfo",{
      opacity:0
     })
     p.to(".btn",{
       opacity:1,
       rotate:"0deg"
     })
     p.to(".imgbox",{
      rotate:"0deg",
      opacity:1
     })
     
    }
   



  return (
    <>
    <div className='box'>

   
    <div className='me' onClick={show}>
<div className='btngrp'>

      <button className='btn' ><img src={aboutimg} alt="" /></button>
</div>
<div  className='imgbox'>
  <img src={girlimg}  alt=" "/>
</div>
    </div>
    <div  className='myinfo' id='info' >
    <i className='fa fa-window-close' onClick={close}></i>
    <div className='header'>
    <h2>  I am   </h2>
    <h2 className='typer'>
    <Typewriter
  options={{
    strings: ['React js developer.','c / c++ coder.','creative.'],
    autoStart: true,
    loop: true,
    delay:25,
  }}
/>
    </h2>
    </div>
    
 
    <p>I love designing creative, interactive and organised site.</p>
    <p> I have implemented Redux and GSAP animation in various react projects also.</p>
     <p> Currently I am learning express js.Till now I have basic idea of node js. </p>
  
       {/* I am a creative React js developer.I love creative, interactive and organised sites. I have implemented Redux and GSAP animation in various react projects also. Currently I am learning express js. Till now I have basic idea of node js. */}
    </div>
    </div>
    </>
  )
}
