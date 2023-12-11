import ButtonHome from '../Home/buttonHome/Button';
import Foto2 from './assets/nosotros.jpeg'
import { Info, InfoNoLine } from './info/Info';
import './Nosotros.css'

export default function Nosotros() {
    return(
        <section id='nosotros' className="nosotros">
            <div className="texto-about">
                <h1>Nosotros</h1>
                <p>Empresa fundada en 1973 dedicada a la venta y distribución de productos de goma. Historia de éxito y compromiso con la calidad e innovación para la satisfacción del cliente. Fuimos distribuidores  de INDUSTRIAS PIRELLI SAIC hasta su permanencia en la Argentina, a posterior pasamos a formar parte de la distribución de DUNLOP ARGENTINA SA.</p>
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