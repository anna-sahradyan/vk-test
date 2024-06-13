import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormData from './FormData';
import SendForm from './SendForm';

const ApplicationForm = () => {
  const [showFormData, setShowFormData] = useState(false);
  const [showSendForm, setShowSendForm] = useState(false);
  const switchComponent = () => {
    setShowFormData(prev => !prev);
  };

  const handleFormSubmit = () => {
    setShowFormData(false);
    setShowSendForm(true);
  };

  const closeSendForm = () => {
    setShowSendForm(false);
    setShowFormData(false);
  };
  const closeFormData = () => {
    setShowFormData(false);
  };
  return (
    <div className={'application__inner'}>
      {!showFormData && !showSendForm && (
        <div className='info_part'>
          <h1>«Пестовский Лесокомбинат»</h1>
          <h3>Cтань частью нашей команды!</h3>
        </div>
      )}
      {!showFormData && !showSendForm && (
        <Link to={'#'}>
          <button className='application_btn' onClick={switchComponent}>
            Отправить анкету
          </button>
        </Link>
      )}
      {showFormData && (
        <FormData onClose={closeFormData} onFormSubmit={handleFormSubmit} />
      )}
      {showSendForm && <SendForm onClose={closeSendForm} />}
    </div>
  );
};

export default ApplicationForm;
