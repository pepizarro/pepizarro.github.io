import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Proyectos from './components/proyectos';
import Hero from "./components/Hero";
import Footer from "./components/Footer";




function Header(){
  return (
    <nav>
      <h1>Pedro Pizarro</h1>
      <div className="links">
        <a>Proyectos</a>
        <a>Sobre mi</a>
        <div className="barras"><FontAwesomeIcon icon={faBars} /></div>
      </div>
    </nav>
  )
}

function Content(){
  return (
    <div className='contentContainer'>
      <Proyectos />
    </div>
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
