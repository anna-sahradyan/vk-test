import React from 'react';

const Success = () => {
    return (
        <div className={'success_inner'}>
            <div className="success_text">
                <p>Наши успехи — это заслуга замечательных людей, работающих в нашей Команде.
                </p>
                <p> У Нас всегда есть вакансии для сильных кандидатов</p>
            </div>
            <div className="screen">
                <p className="screen_text">
                    Если чувствуешь в Себе потенциал и здоровые амбиции — ждём рядом с Нами!
                </p>
                <button className="success_btn">Отправить анкету</button>
            </div>
        </div>
    );
};

export default Success;
