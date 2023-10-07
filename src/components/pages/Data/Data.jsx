import { FaBars, FaShoppingCart, FaWarehouse } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import Avatar from "./Avatar";
import './Data.css'

export default function Data() {
    return(
        <section className="section-data">
            <Avatar 
              titulo={"50+"}
              texto={"Años de experiencia"}
              icon={<MdOutlineWork />}
            />
            <Avatar 
              titulo={"20+"}
              texto={"Marcas"}
              icon={<FaWarehouse />}
            />
            <Avatar 
              titulo={"200+"}
              texto={"Variedad de productos"}
              icon={<FaShoppingCart />}
            />
            <Avatar 
              titulo={"5+"}
              texto={"Marcas internacionales"}
              icon={<BiWorld />}
            />
        </section>
    )
}