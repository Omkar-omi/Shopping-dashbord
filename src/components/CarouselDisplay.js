import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import blackimg from '../images/blackimg.png'
import '../index.css'

const CarouselDisplay = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img className="d-block w-100 carousel-height " src={blackimg} alt="First slide" />
          <Carousel.Caption>
            <h3 className='text-success'>Diwali offers</h3>
            <p>Get flat 20% on all electronic items <small className='terms'>(upto ₹2000*)</small></p>
            <div className='terms'>T&C apply*</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-height" src={blackimg} alt="Second slide" />
          <Carousel.Caption>
            <h3 className='text-success'>Get upto ₹1000 CASHBACK</h3>
            <p>on first purchase. No minimum order.</p>
            <div className='terms'>T&C apply*</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-height" src={blackimg} alt="Third slide" />
          <Carousel.Caption>
            <h3 className='text-success'>Big Million days</h3>
            <p>No shipping charges apply from October 1 to October31</p>
            <div className='terms'>T&C apply*</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CarouselDisplay;