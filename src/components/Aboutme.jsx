import uaiLogo from '../images/uailogo.png'
import jsLogo from '../assets/js.svg'
import { IdiomaContext } from './IdiomaContext';
import { useContext } from 'react';

export default function AboutMe(){
    const { idioma } = useContext(IdiomaContext);

    return (
        <div className="aboutme-container">
            <h1 className="page-header">{idioma === 'es' ? 'Sobre mí' : 'About me'}</h1>
            <div className="aboutme-info">
                <div className="aboutme-info-p">
                    {idioma === 'es' ? (<p>
                        Mi nombre es <span>Pedro Pizarro</span>, tengo 21 años y soy de Santiago, Chile. Soy un estudiante de <span>
                        Ingeniería Civil Informática</span> en la 
                        <span> Universidad Adolfo Ibáñez</span>,
                        actualmente en el tercer año.
                    </p>) : (
                        <p>
                        My name is <span>Pedro Pizarro</span>, I am 21 years old, and I am from Santiago, Chile. 
                        I am a student of <span>Civil Computer Engineering</span> at <span>
                        Adolfo Ibáñez University</span>, currently in my third year.
                    </p>
                    )}
                    
                </div>
                <div className='aboutme-info-uai'>
                    <div className="aboutme-info-img">
                        <img src="https://www.uai.cl/assets/themes/uai-central/img/logo.svg" alt="uai" />
                    </div>
                    <span>2021 - {idioma === 'es' ? 'Presente' : 'Present'}</span>
                </div>
            </div>
            <div className='aboutme-skills'>
                {idioma === 'es' ? (
                    <>
                    <h1>Habilidades</h1>
                    <p>Según que tan cómodo me siento trabajando con ellas:</p>
                    </>
                ) : (
                    <>
                    <h1>Skills</h1>
                    <p>Based on how comfortable I feel working with them:</p>
                    </>
                )}
                <div className='aboutme-skills-languages'>
                    <div className='skill-container'>
                        <img src='https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png' alt='javascript'></img>
                        <div class="skill-bar">
                            <div class="skill-level"></div>
                        </div>
                    </div>
                    <div className='skill-container'>
                        <img src='https://cdn.icon-icons.com/icons2/112/PNG/512/python_18894.png' alt='python'></img>
                        <div class="skill-bar">
                            <div class="skill-level"></div>
                        </div>
                    </div>
                    <div className='skill-container'>
                        <img src='https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_logo_icon_146458.png' alt='Java'></img>
                        <div class="skill-bar">
                            <div class="skill-level"></div>
                        </div>
                    </div>
                    <div className='skill-container'>
                        <img src='https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png' alt='React'></img>
                        <div class="skill-bar">
                            <div class="skill-level"></div>
                        </div>
                    </div>
                </div>
                <div className='aboutme-skills-others'>
                    {idioma === 'es' ? (
                        <>
                        <h3>Otros</h3>
                        <p>SQL, Git, C, Azure, C++, Inglés.</p>
                        </>
                    ) : (
                        <>
                        <h3>Others</h3>
                        <p>SQL, Git, C, Azure, C++, English.</p>
                        </>
                    )}
                    
                </div>

            </div>
            <div className='aboutme-certificados'>
                {idioma === 'es' ? (
                    <h1>Certificados</h1>
                    ) : (
                    <h1>Certificates</h1>
                )}
                <div className='aboutme-certificados-dp900'>
                    <div className='aboutme-certificados-dp900-img'>
                        <a target='_blank' href='https://www.credly.com/badges/d882b355-a591-45ce-a2c5-66a8247e4265/public_url'>
                            <img src='https://images.credly.com/size/680x680/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png' alt='dp900'></img>
                        </a>
                    </div>
                    <div>
                        <h3>Azure Data Fundamentals </h3>
                        <p>Microsoft</p>
                    </div>
                </div>
                <div className='aboutme-certificados-cursos'>
                    {idioma === 'es' ? (
                        <>
                            <h1>Cursos</h1>
                            <ul>
                                <li>Estructuras de datos y algoritmos</li>
                                <li>Bases de datos</li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <h1>Courses</h1>
                            <ul>
                                <li>Data structures and algorithms</li>
                                <li>Databases</li>
                            </ul>
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}