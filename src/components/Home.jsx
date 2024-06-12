import React from 'react';
import ApplicationForm from "./applicationForm/ApplicationForm";
import Company from "./Company";
import Advantages from "./Advantages";

const Home = () => {
    return (
        <div>
            <ApplicationForm/>
            <Company/>
            <Advantages/>
        </div>
    );
};

export default Home;
