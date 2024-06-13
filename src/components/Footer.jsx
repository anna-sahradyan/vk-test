import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className={'footer_inner'}>
        <div className='footer_title'>
          <h3>КОНТАКТЫ</h3>
        </div>
        <div className='footer__btn'>
          <button className={'city_btn'}>санкт-петербург</button>
          <button className={'city_btn'}>москва</button>
        </div>

        <div className='footer_contact_box'>
          <div className=' footer_contact_inner phone_box'>
            <span>
              <img src='/img/mob-phone.svg' alt='phone' />
            </span>
            <span>8 (812)602-77-60</span>
          </div>
          <div className=' footer_contact_inner letter_box'>
            <span>
              <img src='/img/mail-mob.svg' alt='letter' />
            </span>
            <span>info@pplk.ru</span>
          </div>
          <div className=' footer_contact_inner avatar_box '>
            <span>
              <img src='/img/map-mob.svg' alt='map' />
            </span>
            <span>ул. Заозёрная, д. 8 к. 2, офис 202 </span>
            <span> (7 мин. пешком от метро Фрунзенская)</span>
          </div>
        </div>
        <div className='footer_social'>
          <img src='/img/you.svg' alt='youtube' />
          <img src='/img/uil_vk.svg' alt='vk' />
          <img src='/img/tel.svg' alt='tel' />
        </div>
        <div className='footer_map'>
          <img src='/img/map.webp' alt='map' />
        </div>
        <div className='footer_bottom'>
          <div className='copy_right'>
            © 2023 Пестовский Лесокомбинат. Все права защищены.
          </div>
          <div className='footer_link'>
            <Link to={'/'}>Реквизиты</Link>
            <Link to={'/'}> Политика конфиденциальности</Link>
          </div>
          <div className='alpha'>
            <img src='/img/alpha.webp' alt='alpha' />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
