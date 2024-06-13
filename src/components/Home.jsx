import React from 'react';
import ApplicationForm from './applicationForm/ApplicationForm';
import Company from './Company';
import Advantages from './Advantages';
import Success from './Success';

const Home = () => {
  return (
    <div>
      <ApplicationForm />
      <Company />
      <Advantages />
      <Success />
    </div>
  );
};

export default Home;
