import React, { useRef, useState } from 'react';

const FormData = ({ onFormSubmit, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const filePicker = useRef();
  const handleSubmit = () => {
    onFormSubmit();
  };
  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleClick = () => {
    filePicker.current.click();
  };
  return (
    <div className={'wrapper'}>
      <div className='form__inner'>
        <div className='form__header'>
          <span className='img_close' onClick={onClose}>
            <img src='/img/close-form.svg' alt='close' />
          </span>
        </div>
        <div className='title_box'>
          <h3>заполните анкету</h3>
        </div>
        <div className='form__part'>
          <form onSubmit={handleSubmit}>
            <div className='input_part'>
              <input type='text' defaultValue='Ф.И.О' />
              <input type='tel' defaultValue='Телефон' />
            </div>
            <div className='sub_title_box'>
              <h4>Отклик на вакансию</h4>
            </div>
            <div className='select_part'>
              <select name='' id=''>
                <option value='Выберите вакансию'>Выберите вакансию</option>
              </select>
              <div className='sub_title_box'>
                <h4>Ваше резюме</h4>
              </div>
              <div className='text__part'>
                <p>Есть резюме в формате .pdf или .doc?</p>
                <p>Приложите и отправьте его нам.</p>
              </div>
            </div>
            <div className='upload__file'>
              <input
                type='file'
                ref={filePicker}
                className={'hidden_send_form'}
                onChange={handleFileChange}
              />

              <button className={'upload_btn'} onClick={handleClick}>
                Загрузить файл
              </button>
            </div>
            <div className='text__agree'>
              <div className='check_box'>
                <input type='checkbox' defaultChecked={false} />
                <span>
                  Я прочитал(а), ознакомился(лась) и согласен(на) с Политикой
                  конфиденциальности, Согласием на обработку персональных данных
                  физическим лицом. Я осознаю, что даю Согласие на обработку
                  персональных данных для использования предоставляемых
                  возможностей Веб-сервиса.
                </span>
              </div>
              <div className='check_bottom_span'>
                <span>Я достиг(ла) 18-летнего возраста</span>
              </div>
            </div>
            <div className='send__button'>
              <button onClick={onFormSubmit}>ОТПРАВИТЬ АНКЕТУ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormData;
