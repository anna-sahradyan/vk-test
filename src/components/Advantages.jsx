import React from 'react';
import SlideProd from "./SlideProd";

const Advantages = () => {
    return (
        <div className={'advantages__inner'}>
            <div className={"title_box"}><h3>Преимущества Компании</h3></div>

            <div className="advantages__menu">
                <ul className="advantages_list">
                    <li className="advantages_li">
                        <span>Качество продукта</span>
                        <button className={'adv_btn'}><img src="/img/more.svg" alt=""/></button>
                    </li>
                    <hr/>
                    <li className="advantages_li"><span>Популярность бренда в сети</span>
                        <button className={'adv_btn'}><img src="/img/more.svg" alt=""/></button>
                    </li>
                    <hr/>
                    <li className="advantages_li"><span>Передовое рабочее место</span>
                        <button className={'adv_btn'}><img src="/img/more.svg" alt=""/></button>
                    </li>
                    <hr/>
                    <li className="advantages_li"><span>Свои автоматизированные системы обучения</span>
                        <button className={'adv_btn'}><img src="/img/more.svg" alt=""/></button>
                    </li>
                    <hr/>
                    <li className="advantages_li"><span>Свои автоматизированные системы обучения</span>
                        <button className={'adv_btn'}><img src="/img/more.svg" alt=""/></button>
                    </li>
                    <hr/>
                </ul>
            </div>
            <div className="products__inner">
                <h3>продукты компании</h3>
                <div className="prod__btn">
                    <button className={'bath_btn'}>БАНИ</button>
                    <button className={'home_btn'}>ДОМА</button>
                </div>
                <div className="slide__box">
                    <SlideProd/>
                </div>

            </div>
        </div>
    );
};

export default Advantages;
