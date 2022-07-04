import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsHikes() {
  return (
    <div className='cards'>
      <h1>Assorted stories and beta from hikes I've done. Take a peak...</h1>
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
              text='Sierra High Route Pt2: Hypothermia, ass-kicking, and dealing with loss, August 2021'
              label='Hiking'
              path='/hike'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/under-construction.png'
              text='Sierra High Route Pt1: Blisters, Bears, Barely Escaping Fire, September 2020'
              label='Hiking'
              path='/hike'
            />
            <CardItem
              src='images/under-construction.png'
              text='Yosemite High Country: A very steep windy col, mosquitos, hooked on hiking, June 2020'
              label='Hiking'
              path='/hike'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsHikes;
