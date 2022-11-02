// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import './Form.css'
import { useForm, ValidationError } from '@formspree/react';
import {BsArrowRightCircleFill} from 'react-icons/bs'


function Form() {
  const [state, handleSubmit] = useForm("xrgdaeon");
  if (state.succeeded) {
      return <p className='answer'>Thanks for joining!</p>;
  }


  return (
      <form onSubmit={handleSubmit}>

        <div className='news'>
          <span className='news-container'>
            <p>NEWSLETTER</p>
            <span>SUSCRIBITE</span>
            <h5>Y enterate de las novedades</h5> 
          </span>
        </div>

      
        <div className="container-send">
          <input id="email" type="email" name="email" placeholder="Ingresa tu Email"/>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          
          <button className='btn-send' type="submit" disabled={state.submitting}>
            ENVIAR
            {" "} <BsArrowRightCircleFill />
          </button>

        </div>

    </form>
  );
}

export default Form;
