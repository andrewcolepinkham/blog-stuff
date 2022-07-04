import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsAll() {
  return (
    <div className='cards'>
      <h1>Here are some random posts</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/dolo.jpeg'
              text='Dolomighty Steep: Thru Hiking the Alta Via 2, June 2022'
              label='Hiking'
              path='/hike'
            />
            <CardItem
              src='images/under-construction.png'
              text='Graham El Crapped his Pants, March 2022'
              label='Climbing'
              path='/climb'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default CardsAll;
