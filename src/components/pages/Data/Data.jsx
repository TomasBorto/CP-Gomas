import { FaShoppingCart, FaWarehouse } from "react-icons/fa";
import { FaPlane, FaShop } from "react-icons/fa6";
import { MdOutlineWork, MdMoneyOff  } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { Avatar1, Avatar2 } from "./Avatar";
import './Data.css'

export function Data1() {
    return(
        <section className="section-data">
            <Avatar1 
              titulo={"50+"}
              texto={"Años de experiencia"}
              icon={<MdOutlineWork />}
            />
            <Avatar1 
              titulo={"20+"}
              texto={"Marcas"}
              icon={<FaWarehouse />}
            />
            <Avatar1 
              titulo={"200+"}
              texto={"Variedad de productos"}
              icon={<FaShoppingCart />}
            />
            <Avatar1 
              titulo={"5+"}
              texto={"Marcas internacionales"}
              icon={<BiWorld />}
            />
        </section>
    )
}

export function Data2() {
  return(
      <section className="section-data">
          <Avatar2 
            titulo={"Envios a Todo el Pais"}
            icon={<FaPlane />}
          />
          <Avatar2 
            titulo={"Envios Gratis al AMBA"}
            icon={<MdMoneyOff  />}
          />
          <Avatar2 
            titulo={"Local Fisico"}
            icon={<FaShop  />}
          />
      </section>
  )
}