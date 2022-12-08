import React from 'react'
import '../Css/Style.css'
import { Navbar } from './Navbar'
import { useState,useRef,useEffect } from 'react'
import img from '../assets/img1.jpg'
import hi from '../assets/hello-hi.gif'
import { About } from './About'
// import Particles from "react-tsparticles";
import gsap from 'gsap'
import Typewriter from 'typewriter-effect';
import { Skill } from './Skill'
import Project from './Project'
import Contactme from './Contactme'

export const Home=()=> {
 
  
   
        useEffect(() => {
         const p= gsap.timeline()

  //        l.to(".imagebox",  {transformOrigin: "50% 100%", scaleY:0.25, yoyo:true, repeat:1})
  // .to(".imagebox",{y:-400, ease:"Bounce.easeOut", yoyo:true, repeat:1});
      p.fromTo(".imagebox",{
                opacity:0,
                scale:0.1,
                rotation:-5
                // y:-350,
                // rotate:"0deg",
              },{
                opacity:1,
                scale:1,
                rotation:5,
                // y:100,
                // rotate:"360deg",
                transformOrigin: "50% 100%", scaleY:0.25, yoyo:true,
      
      
      })
         
        }, [])
      
      
  return (
    <>
        <div className='frame' >
        
           <Navbar/>
           
           <div className='imagebox'  >
           <div className='text' >
           <h1>Poonam Kumari</h1>

           <Typewriter
  options={{
    strings: ['Web Developer'],
    autoStart: true,
    loop: true,
  }}
/>
<div  className='contactimg'>
<a href='#contact'><img src={hi} alt=" "/></a>



</div>
            {/* <h2>Web Developer</h2> */}
            {/* <button onClick={changelook}>Hello !!</button> */}
           </div>
          <div className='image' >
            <img src={img} alt=" "/>
          </div>
           </div> 
        </div>
        <About/>
        <Skill/>
        <Project/>
        <Contactme/>
    </>
  )
}
