import React from 'react';

const Company = () => {
    return (
        <div className={"company__inner"}>
            <div className="item__inner">
                <h3>о компании</h3>
                <div className="item">
                    <div className="square__item"><span>2</span>
                    </div>
                    <p className={'item__text'}>Города присутствия:
                        Санкт-Петербург и Москва</p>
                </div>

                <div className="item">
                    <div className="square__item"><span> >30</span>
                    </div>
                    <p className={'item__text'}>Лет среди лидеров рынк</p>
                </div>
                <div className="item">
                    <div className="square__item"><span>100</span>
                    </div>
                    <p className={'item__text'}>Домов и бань сдаём ежегодно</p>
                </div>
            </div>
            <div className="division">
                <h3>Выбери подразделение:</h3>
                <div className="menu">
                    <ul className={'ul_list'}>
                        <li className={'li_item'}>Строительный отдел</li>
                        <li className={'li_item'}>офис</li>
                        <li className={'li_item'}>финансовый отдел</li>
                        <li className={'li_item'}>Отдел продаж</li>
                        <li className={'li_item'}>внештатный сотрудник</li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <p className={'card_text'}><span><img src="/img/vk.svg" alt="vk"/></span>Прораб</p>
                <p className={'card_text'}><span><img src="/img/price.svg" alt=""/></span>от 00 000 руб</p>
                <button className={'more_btn'}><img src="/img/more.svg" alt=""/></button>
            </div>
            <div className="card">
                <p className={'card_text'}><span><img src="/img/vk.svg" alt="vk"/></span>Специалист службы снабжения</p>
                <p className={'card_text'}><span><img src="/img/price.svg" alt=""/></span>от 00 000 руб</p>
                <button className={'more_btn'}><img src="/img/more.svg" alt=""/></button>
            </div>
            <div className="card">
                <p className={'card_text'}><span><img src="/img/vk.svg" alt="vk"/></span>Логист</p>
                <p className={'card_text'}><span><img src="/img/price.svg"alt=""/></span>Обсуждается на собеседовании
                </p>
                <button className={'more_btn'}><img src="/img/more.svg" alt=""/></button>
            </div>
            <div className="card">
                <p className={'card_text'}><span><img src="/img/vk.svg" alt="vk"/></span>Проектировщик</p>
                <p className={'card_text'}><span><img src="/img/price.svg" alt=""/></span>от 00 000 руб</p>
                <button className={'more_btn'}><img src="/img/more.svg" alt=""/></button>
            </div>
            <div className="btn_box">
            <button className={'coll_btn'}>откликнуться на вакансию</button>
            </div>
        </div>
    );
};

export default Company;
