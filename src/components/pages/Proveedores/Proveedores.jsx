import "./Proveedores.css";
import Pirelli from "./assets/pirelli.png";
import Dayco from "./assets/Dayco.png";
import Dunlop from "./assets/dunlop.png";

export default function Proveedores() {
    return(
        <section className="section-prov">
            <div className="proveedores">
                <img src={Pirelli} alt="" />
                <img src={Dayco} alt="" />
                <img src={Dunlop} alt="" />
            </div>
        </section>
    )
}