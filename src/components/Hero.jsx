import particleBackground from './particleBackground'
import profilepic from '../images/pedro.jpg'
import { useContext, useEffect, useState } from 'react';
import { IdiomaContext } from './IdiomaContext';

export default function Hero(){
  const { idioma } = useContext(IdiomaContext);
  const [particleFondo, setParticleFondo] = useState(null);

  useEffect(() => {
    setParticleFondo(particleBackground());
  }, []);

    return (
        <div className="heroContainer">
          <div className='heroInfoContainer'>
            <div className='profilePicContainer'>
                <img src={profilepic} alt="image" className='profilePic'/>
            </div>
            <div className='heroDescription'>
              {idioma === 'es' ? (
                <h2>Estudiante y aspirante a <span className='swe'>ingeniero de software</span>.</h2>
              ) : (
                <h2>Student and aspiring <span className='swe'>software engineer</span>.</h2>
              )}
            </div>
          </div>
          <div className='fondoHero' id='particleFondo'>
            {particleFondo}
            </div>
        </div>
      );
}