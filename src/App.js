
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Contact } from './Component/Contact';
import Particle from './Component/Particle';
// import Particles from 'react-tsparticles';
// import Particles from "react-tsparticles";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles"
// import { useCallback } from "react"





function App() {
  // const options = {
  //   background: {
  //     color: "#0d47a1",
  //   },
  //   interactivity: {
  //     events: {
  //       onClick: {
  //         enable: true,
  //         mode: "push",
  //       },
  //       onHover: {
  //         enable: true,
  //         mode: "repulse",
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       bubble: {
  //         distance: 400,
  //         duration: 2,
  //         opacity: 0.8,
  //         size: 40,
  //       },
  //       push: {
  //         quantity: 4,
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4,
  //       },
  //     },
  //   },
  //   particles: {
  //     color: {
  //       value: "#ffffff",
  //     },
  //     links: {
  //       color: "#ffffff",
  //       distance: 150,
  //       enable: true,
  //       opacity: 0.5,
  //       width: 1,
  //     },
  //     collisions: {
  //       enable: true,
  //     },
  //     move: {
  //       direction: "none",
  //       enable: true,
  //       outMode: "bounce",
  //       random: false,
  //       speed: 6,
  //       straight: false,
  //     },
  //     number: {
  //       density: {
  //         enable: true,
  //         value_area: 800,
  //       },
  //       value: 80,
  //     },
  //     opacity: {
  //       value: 0.5,
  //     },
  //     shape: {
  //       type: "circle",
  //     },
  //     size: {
  //       random: true,
  //       value: 5,
  //     },
  //   },
  // };
  return (
    <div className="App">
      <Routes>
      
      <Route  exact path="/"  element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />

</Routes>
 <Particle/>
    


    </div>
  );
}

export default App;
