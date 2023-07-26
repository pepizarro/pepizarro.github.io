import AboutMe from "./Aboutme";
import Hero from "./Hero";
import Proyectos from "./proyectos";


export default function Home(){
    return (
        <div className="home-container">
            <Hero />
            <div className='contentContainer'>
                <AboutMe />
                <Proyectos />
            </div>
        </div>
    )
}