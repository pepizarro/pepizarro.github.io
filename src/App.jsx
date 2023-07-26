import React, { useState } from "react";
import Proyectos from './components/proyectos';
import Footer from "./components/Footer";
import AboutMe from "./components/Aboutme";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Home from "./components/Home";





/*----------------------------*/

function App() {

  const [component, setComponent] = useState('home')
  const handleLinkClick = (component) => {
    setComponent(component);
  };

  return (
    <div>
      <nav>
          <h1 className='header-h1' onClick={() => handleLinkClick('home')}>Pedro Pizarro</h1>
        <div className="links">
          <button onClick={() => handleLinkClick('proyectos')}>Proyectos</button>
          <button onClick={() => handleLinkClick('aboutme')}>Sobre mi</button>
          <div className="barras"><FontAwesomeIcon icon={faBars} /></div>
        </div>
      </nav>
      {component === 'home' && <Home />}
      {component === 'proyectos' && <Proyectos />}
      {component === 'aboutme' && <AboutMe />}
      <Footer />
    </div>
  )
}

export default App
