import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import img1 from './SliderImage/img1.jpg';
import img2 from './SliderImage/img1.jpg';
import img3 from './SliderImage/img1.jpg';

export default function Slider() {
  return (
    <div className="conatiner" >
    <Carousel >
      <Carousel.Item interval={6000} >
        <img
          className="d-block w-100 image-fluid"
          src={img1}
          alt="First slide"
          style={{ objectFit: 'cover', height: '60vh' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100 image-fluid"
          src={img2}
          alt="Second slide"
          style={{ objectFit: 'cover', height: '60vh' }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100 image-fluid"
          src={img3}
          alt="Third slide"
          style={{ objectFit: 'cover', height: '60vh' }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
