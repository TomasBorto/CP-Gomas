import { SiMercadopago } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import MercadoLibre from '../../../../assets/MercadoLibre.png';
import Local from '../../../../assets/Local.jpg';

export const MlCard = () => {
  return (
    // <!-- component -->
    <div className="flex items-center justify-center mb-12">
    
      <card className="relative h-[30rem] sm:h-96 w-[35rem] rounded-lg max-sm:rounded-none">
    
        {/* <!-- Background Image --> */}
        <img src={MercadoLibre} alt="cp goma mercado libre" className="object-cover w-full h-full rounded-lg max-sm:rounded-none" />
        
        {/* <!-- Content --> */}
        <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-fuchsia-700/30 to-violet-600 rounded-lg flex flex-col items-center justify-center text-center max-sm:rounded-none">
        
            {/* <!-- Company Logo --> */}
            <div className="flex text-[#ffe600] text-4xl">
              <h2 className="ml-2 text-4xl">Tienda Online</h2>
            </div>
    
            {/* <!-- Quotes --> */}
            <p className="text-2xl px-14 text-gray-200 mt-10">
              Compra en nuestra tienda oficial con descuentos.
            </p>
    
            <button className="group relative h-12 w-60 overflow-hidden rounded-lg bg-white text-lg shadow mt-10">
              <div className="absolute inset-0 w-3 bg-[#ffe600] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <a className="relative text-black group-hover:text-white" href="https://cpgoma.mercadoshops.com.ar/" target="_blank">Ir a la tienda</a>
            </button>
    
        </div>
    
      </card>
    
    </div>
  )
}

export const MlCard2 = () => {
  return (
    // <!-- component -->
    <div className="flex items-center justify-center mb-12">
    
      <card className="relative h-[30rem] sm:h-96 w-[35rem] rounded-lg max-sm:rounded-none">
    
        {/* <!-- Background Image --> */}
        <img src={Local} alt="cp goma" className="object-cover w-full h-full rounded-lg max-sm:rounded-none" />
        
        {/* <!-- Content --> */}
        <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-fuchsia-700/30 to-violet-600 rounded-lg max-sm:rounded-none flex flex-col items-center justify-center text-center">
        
            {/* <!-- Company Logo --> */}
            <div className="flex text-[#25D366] text-4xl">
              <FaWhatsapp />
              <h2 className="ml-2 text-4xl">WhatsApp</h2>
            </div>
    
            {/* <!-- Quotes --> */}
            <p className="text-2xl px-14 text-gray-200 mt-10">
              Hacenos tu pedido a través de nuestro WhatsApp.
            </p>
    
            <button className="group relative h-12 w-60 overflow-hidden rounded-lg bg-white text-lg shadow mt-10">
              <div className="absolute inset-0 w-3 bg-[#25D366] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <a className="relative text-black group-hover:text-white" href="https://wa.link/p9hkjb" target="_blank">Ir a WhatsApp</a>
            </button>
    
        </div>
    
      </card>
    
    </div>
  )
}