import React, { useState } from "react";
import Proyectos from './components/proyectos';
import Footer from "./components/Footer";
import AboutMe from "./components/Aboutme";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Home from "./components/Home";
import { useContext } from 'react';
import { IdiomaContext } from "./components/IdiomaContext";

export const SelectorIdioma = () => {
  const { idioma, setIdioma } = useContext(IdiomaContext);

  const cambiarIdioma = () => {
    setIdioma((idiomaAnterior) => (idiomaAnterior === 'es' ? 'en' : 'es'));
  };

  return (
    <button onClick={cambiarIdioma}>
      {idioma === 'es' ? 'ES' : 'EN'}
    </button>
  );
};
/*----------------------------*/

function App() {
  // {idioma === 'es' ? () : ()}
  const { idioma } = useContext(IdiomaContext);
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const [component, setComponent] = useState('home')
  const handleLinkClick = (component) => {
    setComponent(component);
    setShowLinks(false);
  };

  return (
    <div>
      <nav>
          <h1 className='header-h1' onClick={() => handleLinkClick('home')}>Pedro</h1>
        <div className='links'>
          <button onClick={() => handleLinkClick('proyectos')} 
            className={(component === 'proyectos') ? 'active' : 'inactive'}>
            {idioma === 'es' ? 'Proyectos' : 'Projects'} 
          </button>
          <button onClick={() => handleLinkClick('aboutme')}
            className={(component === 'aboutme') ? 'active' : 'inactive'}>
            {idioma === 'es' ? 'Sobre mí' : 'About me'} 
          </button>
          <div className="barras" onClick={toggleLinks}><FontAwesomeIcon icon={faBars} /></div>
        </div>
        {showLinks && (
              <div className="links-mobile">
                <button onClick={() => handleLinkClick('proyectos')} 
              className={(component === 'proyectos') ? 'active' : 'inactive'}>
              {idioma === 'es' ? 'Proyectos' : 'Projects'} 
              </button>
              <button onClick={() => handleLinkClick('aboutme')}
                className={(component === 'aboutme') ? 'active' : 'inactive'}>
                {idioma === 'es' ? 'Sobre mí' : 'About me'} 
              </button>
            </div>
          )}
      </nav>
      <div className="fixed-button">
        {SelectorIdioma()}
      </div>
      {component === 'home' && <Home />}
      {component === 'proyectos' && <Proyectos />}
      {component === 'aboutme' && <AboutMe />}
      <Footer />
    </div>
  )
}

export default App
