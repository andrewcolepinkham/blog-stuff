import React from 'react';
import './Footer.css';
import './Cards.css';
import './ProfileImage.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import ProfileImage from './ProfileImage';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className='profile-image'>
          <div className='profile__container'>
              <ul className='profile__items'>
                <ProfileImage/>
                <li className='profile__item'>
                  <div className='profile__text__header'>Who really is this Andrew guy?
                    <p className='profile__text__paragraph'>
                    - Unimportant meduim-tall white male originally from the San Francisco Bay Area. <br/><br/>
                    - Recently reported to have graduated from Colorado College with a degree in computer science and a minor in mathematics. <br/><br/>
                    - Unfortunatly the person in question is useless at math. <br/><br/>
                    - Subject was last seen chasing powder and splitter cracks somewhere in the rocky mountains outside of Boulder CO. <br/><br/>
                    - Reports indicate that delicious food left out in the open may lure the subject into civilization. <br/><br/>
                    </p>
                  </div>
              </li>
              </ul>
          </div>
        </div>
      </section>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div> */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='navbar-logo'>
              ANDREW PINKHAM 
            <i class="fa-solid fa-fw fa-person-hiking"></i>
            </Link>
          </div>
          <small class='website-rights'>2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/andrew.pinkham.9'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/andrew_pinkham/?hl=en'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link github'
              to='https://github.com/andrewcolepinkham'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/andrew-pinkham-53309a167/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
