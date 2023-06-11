import React from "react"; 
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 

const particleBackground = () => {
    
    const particlesInit = async (main) => { 
        await loadFull(main); 
      }; 
      const particlesLoaded = (container) => { 
        console.log(container); 
      }; 
    return ( 
          <Particles 
            
            id="tsparticles" 
            init={particlesInit} 
            loaded={particlesLoaded} 
            options={{ 
                
                fullScreen: {enable: false},
              background: { 
                color: "transparent", 
              }, 
              fpsLimit: 60, 
              particles: { 
                shape: { 
                  type: "circle", 
                }, 
                size: { 
                  random: { 
                    enable: true, 
                    minimumValue: 1, 
                  }, 
                  value: 2, 
                }, 
                color: { 
                  value: "#b3caff", 
                }, 
                number: { 
                  density: { 
                    enable: true, 
                    area: 700, 
                  }, 
                  limit: 0, 
                  value: 500, 
                }, 
                opacity: { 
                  animation: { 
                    enable: true, 
                    minimumValue: 0.3, 
                    speed: 1.3, 
                    sync: false, 
                  }, 
                  random: { 
                    enable: true, 
                    minimumValue: 0.1, 
                  }, 
                  value: 1, 
                }, 
                interactivity: { 
                  detectsOn: "canvas", 
                  events: { 
                    resize: true, 
                  }, 
                }, 
              }, 
            }} 
          />
      ); 
  }; 

export default particleBackground