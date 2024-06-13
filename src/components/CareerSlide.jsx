import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {careerData} from "../data/careerData";

const CareerSlide = () => {
    var settings = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        qcustomPaging: () => <ul className="custom-dot"></ul>,
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>,
        responsive: [
            {
                breakpoint: 991,
                settings: {},
            },
        ],
    };

    return (
        <>
            <div className="wrapper">
                <div className={"career_inner"}>
                    <div className="career_title_box">
                        <h3>Карьерный рост</h3>
                        <div className="text_box">
                            <p>Наша Компания является ярким примером, где достойные люди смело и заслуженно поднимаются
                                по карьерной лестнице.
                                Мы ценим стремление к развитию и предоставляем все необходимые для этого условия.</p>
                            <p>Наша Компания является ярким примером, где достойные люди смело и заслуженно поднимаются
                                по карьерной лестнице. Мы ценим стремление к развитию и предоставляем все необходимые
                                для этого условия</p>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {careerData.map((item, index) => (
                            <div key={item.id} className={"career_slide_innerBox"}>
                                <div className="img_box">
                                    <img src={item.imgSrc} alt={item.name}/>
                                </div>
                                <div className="career_name">
                                    <span>{item.name}</span>
                                </div>
                                <div className="pro_text">
                                    {item.pro}
                                </div>
                                <div className="career_text_box">
                                    <ul className={"career_list"}>
                                        <li className="career_li">{item.textOne}</li>
                                        <li className="career_li">{item.textTwo}</li>
                                        <li className="career_li">{item.textThree}</li>
                                    </ul>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );

};

const CustomNextArrow = (props) => (
    <>
        <div className="career_slide box_next">
            <button className="career_custom-arrow career_next" onClick={props.onClick}>
                <img src={"/img/arrow.svg"} alt="next" className={"careerImg"}/>
            </button>
        </div>
    </>
);

const CustomPrevArrow = (props) => (
    <>
        <div className="career_slide box_prev">
            <button className="career_custom-arrow career_prev" onClick={props.onClick}>
                <img src="/img/arrow.svg" alt="prev" className={"careerImg"}/>
            </button>
        </div>

    </>
);

export default CareerSlide;
