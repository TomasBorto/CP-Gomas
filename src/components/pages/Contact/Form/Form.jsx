import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import  './Form.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegMessage, FaRegUser } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';



//   const rhf = useForm();
//   console.log("conole log de useForm:",rhf);

export const ContactUs = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const badRequest = (texto) => {
    toast.error(texto, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const goodRequest = () => {
    toast.success('Mensaje enviado, le responderemos a la brevedad.', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  

  const sendEmail = (e) => {
    e.preventDefault();

    if(name.length > 0 && email.length > 0 && message.length > 9) {
      emailjs.sendForm('service_ybyc45g', 'template_hton2ar', form.current, 'ErzDqZ5NrvYES3Jzr')
      .then((result) => {
          console.log(result.text);
          console.log(`La persona ${name} con el mail ${email} envio el siguiente mensaje ${message}`)
          goodRequest()         
          setName('')
          setEmail('')
          setMessage('')
          
      }, (error) => {
          console.log(error.text);
      });
    } else if(name.length === 0){
        badRequest("Completar con su nombre")
    } else if(email.length === 0){
      badRequest("Completar con su mail")
    } else if(message.length <= 9){
      badRequest("El texto debe tener minimo 10 caracteres")
    }

    
  };

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label className='flex'><span><FaRegUser/></span>Nombre</label>
      <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="user_name" />
      <label className='flex'><span><MdOutlineEmail/></span>Email</label>
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="user_email" />
      <label className='flex'><span><FaRegMessage/></span>Mensaje</label>
      <textarea className='flex' onChange={(e) => setMessage(e.target.value)} value={message} name="message" />
      <input className='button-form' type="submit" value="Enviar" />
      <ToastContainer />
    </form>
  );
};