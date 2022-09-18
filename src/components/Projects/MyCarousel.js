import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactImageMagnify from 'react-image-magnify';
function MyCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        {props.prototype.map((item, index)=>{
            return <Carousel.Item>
                    <img
                        className="d-block w-100"
                        id='my-carousel'
                        src={item}
                        alt={index}
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
        })}
    </Carousel>
  );
}

export default MyCarousel;