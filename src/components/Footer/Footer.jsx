import Logo from '../Navbar/assets/Logo-tb-removebg-preview.png';
import './Footer.css';

export default function Footer() {
    return(
        <footer>
          <h3>CP</h3>
          <ul className="footer__menu-container">
            <li className="footer__item">
              <a href="#home">Home</a>
            </li>
            <li className="footer__item">
              <a href="#productos">Productos</a>
            </li>
            <li className="footer__item">
              <a href="#nosotros">Nosotros</a>
            </li>
            <li className="footer__item">
              <a href="#contactanos">Contactanos</a>
            </li>
          </ul>
          <p className="coded-by">Diseñado y programado por <a href="https://bortodev.com/" target="_blank">BORTO DEV</a></p>
          <span className="copyright">&copy;2023, CP Goma. Todos los derechos reservados</span>
        </footer>
    )
}