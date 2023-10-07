import './home.css'
import Foto1 from './assets/Home.jpeg'
import ButtonHome from './buttonHome/Button';
import Gallery from './Gallery/Gallery';

export default function Home(texto) {
    return(
        <section id='home' className="home">
            <div className="texto-home">
                <h1>CP Goma</h1>
                <p>Somos una empresa con mas de 50 años de experiencia dedicados a la comercializacion de articulos de goma para la industria del automotor y para el hogar.</p>
                <a href="#contactanos"><ButtonHome className="btn" text={"Contactanos"} /></a>
            </div>
            <div className="div-img">
                <Gallery />
            </div>
        </section>
    )
}