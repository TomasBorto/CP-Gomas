import ButtonHome from '../Home/buttonHome/Button';
import Foto2 from './assets/nosotros.jpeg'
import { Info, InfoNoLine } from './info/Info';
import './Nosotros.css'

export default function Nosotros() {
    return(
        <section id='nosotros' className="nosotros">
            <div className="texto-about">
                <h1>Nosotros</h1>
                <p>Nuestra empresa fundada en 1973 en el negocio de la venta de gomas es una historia de éxito y compromiso constante con la calidad, la innovación y la satisfacción del cliente. En nuestros comienzos trabajamos con empresas como Pirelli hasta su permanencia en Argentina.</p>
                <a href="#productos"><ButtonHome className="btn" text={"Nuestros Productos"} /></a>
            </div>
            <div className="div-img-us">
                <img src={Foto2} alt="" />
                <div className='div-info'>
                    <Info Line={true} title={"1973"} info={"Fundado"} />
                    <Info Line={true} title={"50"} info={"Años de experiencia"} />
                    <Info Line={false} title={"5"} info={"Distribuidores"} />
                    <InfoNoLine Line={true} title={"3"} info={"Distribuidors Internacionales"} />
                </div>
            </div>
        </section>
    )
}