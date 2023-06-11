
import profilepic from './images/pedro.png'
import particleBackground from './components/particleBackground'
import React from "react";

function Header(){
  return (
    <nav>
      <h1>Pedro Pizarro</h1>
      <div className="links">
        <a>Proyectos</a>
        <a>Sobre mi</a>
      </div>
    </nav>
  )
}



function Hero() {
  return (
    <div className="heroContainer">
      <div className='profilePicContainer'>
        <img src={profilepic} alt="image" className='profilePic'/>
      </div>
      <div className='heroDescription'>
        <h2>Estudiante y aspirante a ingeniero de software</h2>
      </div>
      <div className='fondoHero' id='particleFondo'>
        {particleBackground()}
        </div>
    </div>
  );
}

function Content(){
  return (
    <div className='contentContainer'>
      <p>Content</p>
    </div>
  )
}

function Footer(){
  return (
    <footer>Footer</footer>
  )
}

/*----------------------------*/

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  )
}

export default App
