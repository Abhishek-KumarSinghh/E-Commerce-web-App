import Carousel from 'react-bootstrap/Carousel';

import React from 'react'

const Slider = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item interval={4000}>
        <img
              src="https://images.unsplash.com/photo-1567958451986-2de427a4a0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100"
              height="400"
              alt="..."
            />
        <Carousel.Caption>
          <h3 style={{color:"white"}}>Shop Now</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
              src="https://images.unsplash.com/photo-1567958436049-f2903793328b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100"
              height="400"
              alt="..."
            />
        <Carousel.Caption>
          <h3 style={{color:"white"}}>Latest Trends</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
              src="https://images.unsplash.com/photo-1567958528086-8d8324137918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100"
              height="400"
              alt="..."
            />
        <Carousel.Caption>
          <h3 style={{color:"white"}}>All at one Place</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider;
