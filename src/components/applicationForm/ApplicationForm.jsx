import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ApplicationForm = () => {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };
    return (
        <div className={'application__inner'}>
            <div className="info_part">
                    <h1>«Пестовский Лесокомбинат»</h1>
                    <h3>Cтань частью нашей команды!</h3>

            </div>
            <Link to={'/app'}>
                <button className="application_btn">Отправить  анкету</button>
            </Link>
        </div>
    );
};

export default ApplicationForm;
