import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsClimbs() {
  return (
    <div className='cards'>
      <h1>Climbing Trip Writeups and Beta</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/under-construction.png'
              text='Graham El Crapped his Pants, March 2022'
              label='Climbing'
              path='/climb'
            />
            <CardItem
              src='images/under-construction.png'
              text='Washington Shenanagins, July 2022'
              label='Climbing'
              path='/climb'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/under-construction.png'
              text='BugaDudes: August 2022'
              label='Climbing'
              path='/climb'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsClimbs;
