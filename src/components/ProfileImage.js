import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import './ProfileImage.css';

function ProfileImage() {
  return (
    <>
      <li className='profile__item'>
            <figure className='profile__item__pic-wrap'>
              <img
                className='profile__item__img'
                alt='Andrew Image'
                src="images/andrew.JPG"
              />
            </figure>
        </li>
    </>
  );
}

export default ProfileImage;
