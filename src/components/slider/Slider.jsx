import React from 'react'
import {Carousel} from 'react-bootstrap'

import Navbar from '../navbar/Navbar';

function Slider() {
  return (
    <>
        <Navbar />
        <Carousel>

            <Carousel.Item interval={2000}>
            
                <img
                className="d-block w-100"
                
                src="https://images.pexels.com/photos/4553656/pexels-photo-4553656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="First slide"
                
                />
                
                <div className='carousel-caption'>
                    <h1 className='text-slider'>ESTAR COMODO, <br></br>NUNCA FUE TAN FACIL</h1>
                    <button className="btn-slider">SHOP</button>
                </div>

                
            </Carousel.Item>

            <Carousel.Item interval={2000}>
            
                <img
                className="d-block w-100"
                
                src="https://images.pexels.com/photos/6633132/pexels-photo-6633132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="First slide"
                
                />
                <Carousel.Caption>
                <div className='carousel-caption'>
                    <h1 className='text-slider'>ESTAR COMODO, <br></br>NUNCA FUE TAN FACIL</h1>
                    <button className="btn-slider">SHOP</button>
                </div>

                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item interval={2000}>
            
                <img
                className="d-block w-100"
                
                src="https://images.pexels.com/photos/3355734/pexels-photo-3355734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="First slide"
                
                />
                <Carousel.Caption>
                
                <div className='carousel-caption'>
                    <h1 className='text-slider'>ESTAR COMODO, <br></br>NUNCA FUE TAN FACIL</h1>
                    <button className="btn-slider">SHOP</button>
                </div>

                </Carousel.Caption>
            </Carousel.Item>
            
         </Carousel>

    </>
  )
}

export default Slider;