import particleBackground from './particleBackground'
import profilepic from '../images/pedro.png'

export default function Hero(){
    return (
        <div className="heroContainer">
          <div className='heroInfoContainer'>
            <div className='profilePicContainer'>
                <img src={profilepic} alt="image" className='profilePic'/>
            </div>
            <div className='heroDescription'>
                <h2>Estudiante y aspirante a <span className='swe'>ingeniero de software</span>.</h2>
            </div>
          </div>
          <div className='fondoHero' id='particleFondo'>
            {particleBackground()}
            </div>
        </div>
      );
}