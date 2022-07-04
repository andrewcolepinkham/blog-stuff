import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsCooks() {
  return (
    <div className='cards'>
      <h1>This is some cooking related stuff I've been upto!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/under-construction.png'
              text='Lemmon Grass Bahn Mi'
              label='Cooking'
              path='/cook'
            />
            <CardItem
              src='images/under-construction.png'
              text='Wood Fired Pizza Dough'
              label='Cooking'
              path='/cook'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/under-construction.png'
              text='My Kitchen Gear List'
              label='Cooking'
              path='/cook'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsCooks;
