import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import { Data1, Data2 } from './components/pages/Data/Data';
import Nosotros from './components/pages/Nosotros/Nosotros';
import Productos from './components/pages/Productos/Productos';
import Proveedores from './components/pages/Proveedores/Proveedores';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Ml from './components/pages/ml/Ml';
import ContactFixed from './components/ContactFixed/ContactFixed';

function App() {
  return (
    <>
      <Navbar className="Navbar" />
      <Home />
      <ContactFixed />
      <Data2 />
      <Ml />
      <Data1 />
      <Nosotros />
      <Productos />
      <Contact />
      <Proveedores />
      <Footer />
    </>
  );
}

export default App;
