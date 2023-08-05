import { useContext, useEffect, useState } from "react";
import AboutMe from "./Aboutme";
import Hero from "./Hero";
import Proyectos from "./proyectos";
import { IdiomaContext } from "./IdiomaContext";


export default function Home(){
    const { idioma } = useContext(IdiomaContext);


    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [messagesent, setMessagesent] = useState(false)

    function handleSubmit(){
        const formData = {
            name: nombre,
            email: email,
            message: mensaje
        }
        fetch('https://portfoliocontactapi.azurewebsites.net/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data); // Handle the API response
            })
            .catch((error) => {
              console.error('Error:', error);
        });
        setNombre('')
        setEmail('')
        setMensaje('')
        setMessagesent(true)
    }
    useEffect(() => {
        setNombre(nombre);
      }, [nombre]);
    
      useEffect(() => {
        setEmail(email);
      }, [email]);
    
      useEffect(() => {
        setMensaje(mensaje);
      }, [mensaje]);

    return (
        <div className="home-container">
            <Hero />
            <div className='contentContainer'>
                {idioma === 'es' ? (
                <h2>Estoy en busca de pasantías en ingeniería de software. 
                    Poseo habilidades técnicas sólidas y estoy listo para aprender
                    y aportar valor en proyectos innovadores.</h2>
                ) : (
                  <h2>I am in search of software engineering internships. 
                    I possess strong technical skills and I am
                     ready to learn and contribute value to innovative projects.</h2>
                )}
                <div className="form-container">
                    {idioma === 'es' ? (
                      <h1>Contacto</h1>
                      ) : (
                      <h1>Contact</h1>
                    )}
                        {idioma === 'es' ? (
                          <label>Nombre:</label>
                        ) : (
                          <label>Name:</label>
                        )}
                        <input 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)} 
                            type="text" 
                            name="name" 
                            />
                        <label>Email:</label>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            name="email" 
                            />
                        {idioma === 'es' ? (
                          <label>Mensaje:</label>
                        ) : (
                          <label>Message:</label>
                        )}
                        <textarea 
                            name="message" 
                            placeholder=""
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            >    
                        </textarea>
                        
                        <button onClick={handleSubmit}>{idioma === 'es' ? 'Enviar' : 'Submit'} </button>
                        {messagesent ? (
                          <h3>{idioma === 'es' ? 'Mensaje enviado' : 'Message sent'}</h3>
                        ) : (
                          <></>
                        )}
                </div>
            </div>
        </div>
    )
}