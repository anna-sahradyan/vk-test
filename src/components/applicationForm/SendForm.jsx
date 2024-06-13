import React from 'react';

const SendForm = ({ onClose }) => {
  return (
    <div className={'wrapper'}>
      <div className='send__inner'>
        <div className='form__header'>
          <img
            src='/img/close-form.svg'
            alt='close'
            onClick={onClose}
            className={'close_icon_send'}
          />
        </div>
        <div className='send__title'>
          <h3>Анкета отправлена</h3>
        </div>
        <div className='send_success'>
          <img src='/img/success.svg' alt='success' />

          <div className='send__text'>
            <p>Благодарим завашотклик иинтерес.</p>
            <p> Мы изучим вашу анкету исвяжемся свами втечении 2х дней.</p>
          </div>
        </div>
        <div className='home__btn'>
          <button onClick={onClose}>на главную</button>
        </div>
      </div>
    </div>
  );
};

export default SendForm;
