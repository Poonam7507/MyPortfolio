import React from 'react'
import gsap from 'gsap'
import skillimg from '../assets/skillimg.jpg'
import logoreact from '../assets/react.png'
import logoredux from '../assets/redux.png'
import logogsap from '../assets/gsap.png'
import logofigma from '../assets/figma.png'
import logohtml from '../assets/html.png'
import logocss from '../assets/css.png'
import logogithub from '../assets/github.png'
import logojs from '../assets/js.png'

import { useState } from 'react'


export  const Skill=()=> {
    const [over, setOver] = useState(1);
    const [over1, setOver1] = useState(0);
    const [over2, setOver2] = useState(0);
    const [over3, setOver3] = useState(0);
    const [over4, setOver4] = useState(0);
    const [over5, setOver5] = useState(0);
    const [over6, setOver6] = useState(0);
    const [over7, setOver7] = useState(0);
    const [over8, setOver8] = useState(0);

    const float=()=>{
   
        const k=gsap.timeline();
        k.to(".title",{
            scale:0.8,
            marginBottom:"10%"
        })
        k.fromTo(".skill_list li",{
            display:"none",
            x:50,
            
        },{
          display:"block",
          x:10,
       transform:"none",
          
           yoyo:true,
        //    repeat:-1,
        ease:"ease-in",
        //    ease:'elastic(1,0,5)',
           stagger:{
            amount:5
           }
        })
    }
   
  return (
    <>
<div className='skill' id='skill'>
<div className='skill_list' >
<li 
 onMouseOver={() => {setOver1(1)
                    setOver(0)}
 
 }
      onMouseOut={() => {setOver1(0)
                          setOver(1)
      }
      
      }
 id="react ">React Js</li>
    <li 
    onMouseOver={() =>{ setOver2(1)
                        setOver(0)
    }}
      onMouseOut={() => {setOver2(0)
      setOver(1)}}
    >Redux</li>
    <li  onMouseOver={() =>{ setOver3(1)
                        setOver(0)
    }}
      onMouseOut={() => {setOver3(0)
      setOver(1)}}>GSAP</li>
    <li   onMouseOver={() =>{ setOver4(1)
                        setOver(0)
    }}
      onMouseOut={() => {setOver4(0)
      setOver(1)}}>Html5</li>
</div>
<div className='title'  onClick={float} >
<div>

    <h2   >My Skills</h2>
</div>
   
<div>

        <img  src={skillimg}  alt=" " style={{opacity:over}}  />
        <img src={logoreact} alt=" " style={{opacity:over1}} />
        <img src={logoredux} alt=" " style={{opacity:over2}}/>
        <img src={logogsap} alt=" " style={{opacity:over3}}/>
        <img src={logohtml} alt=" " style={{opacity:over4}} />
        <img src={logocss} alt=" " style={{opacity:over5}}/>
        <img src={logogithub} alt=" " style={{opacity:over6}}/>
        <img src={logofigma} alt=" " style={{opacity:over7}}/>
        <img src={logojs} alt=" " style={{opacity:over8}}/>

   
</div>
    {/* <div className='skillimg'>
    </div> */}
    {/* <h2 className='text2'>My Skills</h2> */}
</div>

<div className='skill_list'>
    {/* <li>React Js</li>
    <li>Redux</li>
    <li>GSAP</li>
    <li>Html5</li> */}
    <li  onMouseOver={() =>{ setOver5(1)
                        setOver(0)
    }}
      onMouseOut={() => {setOver5(0)
      setOver(1)}}>CSS3</li>

<li  onMouseOver={() =>{ setOver8(1)
                        setOver(0)
    }}
      onMouseOut={() => {setOver8(0)
      setOver(1)}}>Javascript</li>
    <li  onMouseOver={() =>{ setOver6(1)
                        setOver(0)
    }}
    
      onMouseOut={() => {setOver6(0)
      setOver(1)}}>Github</li>

    <li  onMouseOver={() =>{ setOver7(1)
                        setOver(0)
    }}
      onMouseOut={() => {setOver7(0)
      setOver(1)}}>Figma</li>
   
    {/* <li></li> */}
</div>
</div>
    </>
  )
}
