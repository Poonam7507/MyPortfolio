import React, { useState } from 'react'

import gsap from 'gsap';

export default function Project() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
 
  const linkshow1=()=>{
  setIsActive1(!isActive1);
  const t=gsap.timeline();
  t.fromTo("#L1",{
    translateX:"-10vw",
   },{
     translateX:"-4vw",
    
  })
  .to(".content1",{
    display:"block"
  })
  const p=gsap.timeline();

  p.to(".content2",{
    display:"none"
  })
  .to("#L2",{
  //   translateX:"-40px",
  //  },{
     translateX:"-23vw",
    
  })
  }
  const linkshow2=()=>{
  setIsActive2(!isActive2);
  const t=gsap.timeline();
  t.fromTo("#L3",{
    translateX:"-10vw",
   },{
     translateX:"-4vw",
    
  })
  .to(".content3",{
    display:"block"
  })
  const p=gsap.timeline();

  p.to(".content4",{
    display:"none"
  })
  .to("#L4",{
  //   translateX:"-40px",
  //  },{
     translateX:"-23vw",
    
  })
  }
  const linkshow3=()=>{
  setIsActive3(!isActive3);
  const t=gsap.timeline();
  t.fromTo("#L5",{
    translateX:"-10vw",
   },{
     translateX:"-4vw",
    
  })
  .to(".content5",{
    display:"block"
  })
  const p=gsap.timeline();

  p.to(".content6",{
    display:"none"
  })
  .to("#L6",{
  //   translateX:"-40px",
  //  },{
     translateX:"-23vw",
    
  })
  }
  const linkshow4=()=>{
  setIsActive4(!isActive4);
  const t=gsap.timeline();
  t.fromTo("#L7",{
    translateX:"-10vw",
   },{
     translateX:"-4vw",
    
  })
  .to(".content7",{
    display:"block"
  })
  const p=gsap.timeline();

  p.to(".content8",{
    display:"none"
  })
  .to("#L8",{
  //   translateX:"-40px",
  //  },{
     translateX:"-23vw",
    
  })
  }
  const linkshow5=()=>{
  setIsActive5(!isActive5);
  const t=gsap.timeline();
  t.fromTo("#L9",{
    translateX:"-10vw",
   },{
     translateX:"-4vw",
    
  })
  .to(".content9",{
    display:"block"
  })
  const p=gsap.timeline();

  p.to(".content10",{
    display:"none"
  })
  .to("#L10",{
  //   translateX:"-40px",
  //  },{
     translateX:"-23vw",
    
  })
  }
  const linkshow6=()=>{
  setIsActive6(!isActive6);
  const t=gsap.timeline();
  t.fromTo("#L11",{
    translateX:"-10vw",
   },{
     translateX:"-4vw",
    
  })
  t.to(".content11",{
    display:"block"
  })
  const p=gsap.timeline();

  p.to(".content12",{
    display:"none"
  })
  .to("#L12",{
  //   translateX:"-40px",
  //  },{
     translateX:"-23vw",
    
  })
  }
 
  return (
    <>
<div className='projects' id="projects">
<h1>Projects</h1>
<div className='project'>
<div className='proj1'>
<li onClick={linkshow1} > <h2>E-commerce website (React js,Redux,GSAP)</h2></li>
<li className='link1' id={isActive1?"L2":"L1"}><p className={isActive1?"content2":"content1"}><a href='https://startling-starship-2dfb50.netlify.app'  target="_blank"><button className='btn'>View</button></a></p></li>
</div>
<div className='proj1'>
<li onClick={linkshow2}> <h2>Animated Site using Gsap</h2></li>
<li className='link1' id={isActive2?"L4":"L3"}><p className={isActive2?"content4":"content3"}><a href='https://teal-hummingbird-29a02d.netlify.app' target="_blank"><button className='btn'>View</button></a></p></li>
</div>
<div className='proj1'>
<li onClick={linkshow3}><h2>Pokemon App</h2></li>
<li className='link1' id={isActive3?"L6":"L5"}><p className={isActive3?"content6":"content5"}><a href='https://sparkly-kelpie-a9675e.netlify.app' target="_blank"><button className='btn'>View</button></a></p></li>

</div>
<div className='proj1'>
<li onClick={linkshow4}><h2>Quiz Game</h2></li>
<li className='link1' id={isActive4?"L8":"L7"}><p className={isActive4?"content8":"content7"}><a href='https://modest-neumann-966291.netlify.app' target="_blank"><button className='btn'>View</button></a></p></li>


</div>
{/* <div className='proj1'>
<li onClick={linkshow5}><h2>Skill analyser</h2></li>
<li className='link1' id={isActive5?"L10":"L9"}><p className={isActive5?"content10":"content9"}><a href='https://startling-starship-2dfb50.netlify.app'><button className='btn'>View</button></a></p></li>


</div> */}
<div className='proj1'>
<li onClick={linkshow6}><h2>Weather App</h2></li>
<li className='link1' id={isActive6?"L12":"L11"}><p className={isActive6?"content12":"content11"}><a href='https://inspiring-pasteur-d485d0.netlify.app' target="_blank"><button className='btn'>View</button></a></p></li>


</div>

   
    
    
    
    
</div>
   
</div>
    </>
  )
}
