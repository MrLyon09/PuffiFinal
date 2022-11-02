import React from "react";
import "./Home.css";
import Umbrella from '../../assets/img/Umbrella_ico.png'
import puff from '../../assets/img/puf.png'
import bag from '../../assets/img/bag.png'
import nap from '../../assets/img/napa.png'


function Home() {
  return (
    <>
      <section className="grid-container">

        <div className="umbrellas" >
          <button className="btn-umbrellas" type="submit" >
          <span className="text-umbrella">SHOP</span>
          </button>
        </div> 
        
        <div className="container-Umbrella">
          <img src={Umbrella} alt="mini-umbrella"/>
          
          <span>Pufi RAIN</span>
          <p>Repel Umbrella Windproof Travel Umbrella - Wind Resistant, Small - Compact, Light, Automatic, Strong Steel Shaft, Mini, Folding and Portable - Backpack, Car, Purse Umbrellas for Rain - Men and Women</p>
          <h4>VER MAS</h4>
        </div>
        
        <div className="container-pufi">
          <img src={puff} alt="puff"/>
          <span>Pufi PUFF</span>
          <p>ZWIFEJIANQ 2020 - Bolsa de almacenamiento para sofá perezoso, impermeable, para sala de estar marrón, S 27.6 x 31.5 in</p>
          <h4>VER MAS</h4>
        </div>
        
        <div className="cat"></div>
        <div className="bolsas"></div>
        <div className="container-bag">
          <img src={bag} alt="bag"/>
          <span>Pufi CART</span>
          <p>Carro de compras Dbest Dolly, para tienda de comestibles, plegable, para apartamento, modelo apto para escaleras</p>
          <h4>VER MAS</h4>
        </div>

        <div className="container-nap">
          <img src={nap} alt="napa"/>
          <span>Pufi NAP</span>
          <p>Saco de sofá - Puff de felpa ultra suave para niños, con espuma viscoelástica y funda de micro-gamuza, mueble rellenos de espuma y accesorios para habitaciones de los niños - 2 pies, chocolate</p>
          <h4>VER MAS</h4>
        </div>
        <div className="cute"></div>
      
      </section>
    </>
  );
}

export default Home;
