import React from 'react';
import { useState } from 'react';
import '../Css/Stylenav.css'

export const Navbar=()=> {
  const [nav, setNav] = useState(false)
const stylenav=()=>{
 setNav(!nav);
}
  return (
    <>
 <div className="nav" > 
            <ul>
            <div id="title1">
                
                <li>
                <a href='#home'>

                    <h2><span>Port</span>folio</h2>
                </a>
                    </li>
            </div>
            
            <div id='title2'>
            <i className="fa fa-bars" onClick={stylenav} style={{color:"white"}}></i>
            <div className={nav?"screen1":"screen2"}>
            <li>
                    

                    <a href='#skill'>
                    
                                        <h3  >
                                    Skills
                                    </h3>
                      
                    </a>
                                       </li>
                                         <li>
                                         <a href='#projects'>
                    
                                        <h3 > 
                                        Project
                                        </h3>
                                         </a>
                                       </li>
                                             <li>
                         
                                        <a href="#contact">
                                        <h3> 
                    
                                   Contact
                                   </h3>
                                        </a>
                                       </li>
                    
            </div>
                       </div>
                     
             
              
            </ul> 

          </div>
    </>
  )
}
