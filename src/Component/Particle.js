import Particles from "react-particles";
import { loadFull } from "tsparticles"
import { useCallback } from "react"

const Particle = () => {
    const options = {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: ["#f8f8ff", "#a9a9a9", "#f5f5f5", "#dcdcdc "]
          },
          shape: {
            type: "square"
          },
          opacity: {
            value: 0.8
          },
          size: {
            value: { min: 1, max: 8 }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              // enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            },
            push: {
              quantity: 4
            }
          }
        }
      };
    const particlesInit = useCallback(async (engine) => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            // loaded={particlesLoaded}
            options={options}
            // style={{
            //     width: "100%",
            //     height: "100vh",
            //     position: "absolute",
            //     top: "0",
            //     left: "0"
            // }}
            // params={{...}}
        />
    );
};

export default Particle
