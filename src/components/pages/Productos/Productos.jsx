import Producto from "./Producto";
import "./Productos.css"
import Burlete from "./assets/burlete-re.png";
import CañoGoma from "./assets/cañosGoma.png";
import CorreaInd from "./assets/CorreaIndustrial.png";
import PisoGoma from "./assets/pisoGoma.png";
import PlanchaGoma from "./assets/planchaGoma.png";
import VariosGoma from "./assets/variosGomas.png";

export default function Productos() {
    return (
        <section id="productos" className="section-product">
              <h1>Nuestros Productos</h1>
              <div className="productos">
                <Producto altt={"burletes"} img={Burlete} product={"Burletes"}/>
                <Producto altt={"caños de goma"} img={CañoGoma} product={"Caños de Goma"}/>
                <Producto altt={"correas industriales"} img={CorreaInd} product={"Correas Industriales"}/>
                <Producto altt={"pisos de goma"} img={PisoGoma} product={"Pisos de Goma"}/>
                <Producto altt={"planchas de goma"} img={PlanchaGoma} product={"Planchas de Goma"}/>
                <Producto altt={"productos de goma"} img={VariosGoma} product={"Productos varios de goma"}/>
              </div>
        </section>
    )
}