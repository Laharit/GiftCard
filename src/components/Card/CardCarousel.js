import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './Card';
import Balance from '../Balance/Balance';

const CardCarousel = () => {
  const cards = [
    { balance: '$10,300', number: '**** **** **** 1753', expiry: '08/24' },
    { balance: '$12,400', number: '**** **** **** 1234', expiry: '09/25' },
  ];

  return (
    <div className="container mx-auto px-4" >
      <Carousel
        showArrows={false}
        showStatus={false}
        infiniteLoop={false}
        useKeyboardArrows={true}
        showThumbs={false}
        swipeable={true}
      >
        {cards.map((card, index) => (
          <div key={index} className="outline-none focus:outline-none">
            <Card card={card} />
          </div>
        ))}
      </Carousel>
      <Balance/>
    </div>
  );
};

export default CardCarousel;
