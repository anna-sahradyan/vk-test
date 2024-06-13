
import React, { useState } from 'react';
import { employees } from '../data/employees';

const Company = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const toggleCardDetails = (index) => {
        if (selectedEmployee === index) {
            setSelectedEmployee(null);
        } else {
            setSelectedEmployee(index);
        }
    };

    return (
        <>
        <div className={"company__inner"}>
            <div className="item__inner">
                <h3>о компании</h3>
                <div className="item">
                    <div className="square__item"><span>2</span></div>
                    <p className={'item__text'}>Города присутствия: Санкт-Петербург и Москва</p>
                </div>
                <div className="item">
                    <div className="square__item"><span> >30</span></div>
                    <p className={'item__text'}>Лет среди лидеров рынк</p>
                </div>
                <div className="item">
                    <div className="square__item"><span>100</span></div>
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
            {employees.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="card">
                        <p className={'card_text'}><span><img src={item.imgSrc} alt="vk" /></span>{item.title}</p>
                        <p className={'card_text'}><span><img src="/img/price.svg" alt="" /></span>{item.price}</p>
                        <button className={'more_btn'} onClick={() => toggleCardDetails(index)}>
                            <img src="/img/more.svg" alt="more" />
                        </button>
                    </div>
                    {selectedEmployee === index && (
                        <div className="expanded_card">
                            <div className="card">
                                <p className={'card_text'}><span><img src={employees[selectedEmployee].imgSrc}
                                                                      alt="vk"/></span>{employees[selectedEmployee].title}
                                </p>
                                <p className={'card_text'}><span><img src="/img/price.svg"
                                                                      alt=""/></span>{employees[selectedEmployee].price}
                                </p>
                                <button className={'close_btn'} onClick={() => setSelectedEmployee(null)}>
                                    <img src="/img/close.svg" alt="close"/>
                                </button>


                                <div className="employees_box">
                                <section className="list tasks">
                                    <ul>
                                        <li className={'list_title'}>Задачи</li>
                                        {employees[selectedEmployee].tasks.map((task, i) => (
                                            <li key={i} className={'list_item'}>{task}</li>
                                        ))}
                                    </ul>
                                </section>
                                <section className="list offer">
                                    <ul>
                                        <li className={'list_title'}>Мы предлагаем</li>
                                        {employees[selectedEmployee].offer.map((offer, i) => (
                                            <li key={i} className={'list_item'}>{offer}</li>
                                        ))}
                                    </ul>
                                </section>
                                <section className="list expectation">
                                    <ul>
                                        <li className={'list_title'}>Наши ожидания</li>
                                        {employees[selectedEmployee].expectations.map((expectation, i) => (
                                            <li key={i} className={'list_item'}>{expectation}</li>
                                        ))}
                                    </ul>
                                </section>
                                </div>
                            </div>

                        </div>
                    )}
                </React.Fragment>
            ))}
            <div className="btn_box">
                <button className={'coll_btn'}>откликнуться на вакансию</button>
            </div>
        </div>

            </>
    );
};

export default Company;
