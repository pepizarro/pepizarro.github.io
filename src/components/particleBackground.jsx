import React from "react"; 
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 

const particleBackground = () => {
    
    const particlesInit = async (main) => { 
        await loadFull(main); 
      }; 
      const particlesLoaded = (container) => { 
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
                    minimumValue: 0.1, 
                  }, 
                  value: 1, 
                }, 
                color: { 
                  value: "#c2d4ff", 
                }, 
                number: { 
                  density: { 
                    enable: true, 
                    area: 400, 
                  }, 
                  limit: 0, 
                  value: 3000, 
                }, 
                opacity: { 
                  animation: { 
                    enable: true, 
                    minimumValue: 1, 
                    speed: 2, 
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
                    resize: false, 
                  }, 
                }, 
              }, 
            }} 
          />
      ); 
  }; 

export default particleBackground