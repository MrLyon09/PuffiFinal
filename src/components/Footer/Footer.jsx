import './Footer.css'
import  facebook from '../../assets/img/faces.ico'
import  instagram from '../../assets/img/instagram.ico'
import  twi from '../../assets/img/twi.ico'
import  bran from '../../assets/img/bran.png'
import  QR from '../../assets/img/QR.ico'
import  shield from '../../assets/img/shield.ico'



function Footer() {
  return (
    <div>
        <div className="container-main">

        <div className="footerlogo">
            <span>Pufi*</span>
        </div>

        <div>
        <ul>
            <li>PUFI RAIN</li>
            <li>PUFI PUFF</li>
            <li>PUFI CART</li>
            <li>PUFI NAP</li>
        </ul>
        </div>

        <div>
        <ul>
            <li>CONTACTO</li>
            <li>AYUDA</li> 
            <li>CÓMO COMPRAR</li>
            <li>TÉRMINOS Y CONDICIONES</li>
        </ul>
        </div>

        <div className="secure-shop">
        <p>
            COMPRA 100% SEGURA <br></br>
            <img src={QR} alt='' /> {""}
            <img src={shield} alt=''/>{" "}
            <span>
            COMPRA CON <br></br>GARANTIA DE PUFI
            </span>
        </p>
        </div>

        <div className="net">
        <p>
            SIGUENOS EN <img src={instagram} alt=''/>{" "}
            <img src={facebook} alt='' />{" "}
            <img src={twi} alt=''/>
        </p>
        </div>
        </div>

        <div className="container-copy">
        <p className="copyright">
        PUFI Copyright 2017 - Todos los derechos reservados
        </p>
        <img src={bran} alt="" className="brandlive" />
        </div>
    </div>
  )
}

export default Footer