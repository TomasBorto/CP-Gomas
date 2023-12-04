import { FaAlignRight, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import './Navbar.css'

function Navbar () {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const checkNavbar = () =>{
        if(navRef.current.classList.contains('responsive_nav')){
            navRef.current.classList.toggle("responsive_nav")
        }
    }

    return(
        <header>
            <h3>CP</h3>
            <nav ref={navRef}>
                <a onClick={checkNavbar} href="#home">Home</a>
                <a onClick={checkNavbar} href="#online">Compra Online</a>
                <a onClick={checkNavbar} href="#nosotros">Nosotros</a>
                <a onClick={checkNavbar} href="#productos">Productos</a>
                <a onClick={checkNavbar} href="#contactanos">Contactanos</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaAlignRight />
            </button>
        </header>
    )
}

export default Navbar;