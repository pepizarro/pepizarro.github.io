import reactLogo from '../assets/react.svg'
import nextLogo from '../assets/nextjs.svg'
import mongodbLogo from '../assets/mongodb.svg'
import azureLogo from '../assets/azure.svg'

export default function Proyectos(){

    return (
        <div className="proyectos-container">
            <h1 className="proyectos-title">Proyectos</h1>
            <div className="Milia">
                <div className="miliaInfoContainer">
                    <h2>Milia</h2>
                    <p>
                    Sitio web de <span>ecommerce </span> creado para un comercio pequeño, consta de dos aplicaciones.
                    La primera permite la gestión de la base de datos de productos, personalización 
                    del aspecto de la página y visualización de órdenes y pagos. 
                    La segunda es una plataforma de comercio electrónico para los clientes, 
                    ofreciendo una experiencia de compra segura y fluida. 
                        </p>
                    <div className="miliaTecnologias">
                        <h3>Tecnologías</h3>    
                        <div className='logos'>
                            <img src={reactLogo} alt="react" className='react-logo tech-logo' />
                            <img src={nextLogo} alt="nextjs" className='next-logo tech-logo' />
                            <img src={mongodbLogo} alt="mongodb" className='mongodb-logo tech-logo' />
                            <img src={azureLogo} alt="azure" className='azure-logo tech-logo' />
                        </div>
                    </div>
                </div>
                <div className="miliaImgContainer">
                    <div className='small-img card'>
                        {/* <img src="https://imagenesportfolio.blob.core.windows.net/imgs/admin-milia.png" alt="image" /> */}
                    </div>
                    <div className='big-img2 card'>
                        {/* <img src="https://imagenesportfolio.blob.core.windows.net/imgs/admin-milia2.png" alt="image" /> */}
                    </div>
                    <div className='big-img card'>
                        
                        {/* <img src="https://imagenesportfolio.blob.core.windows.net/imgs/front-emi.png" alt="image" /> */}
                    </div>
                </div>

                
            </div>
        </div>
    )
}