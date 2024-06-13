import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {dataProd} from "../data/data";
import Slider from "react-slick";

const SlideProd = () => {
    const [dotsVisible, setDotsVisible] = useState(false);

    const toggleDotsVisibility = () => {
        setDotsVisible(!dotsVisible);
    };
    var settings = {
        dots: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <div className={`custom-dot ${dotsVisible ? 'visible' : 'hidden_dots'}`}
                 onClick={toggleDotsVisibility}></div>
        ),
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
        <div className={'slider'}>
            <Slider {...settings}>
                {dataProd.map((item, index) => (
                    <div className="top-slider__item" key={`${item}_${index}`}>
                        <div className={"top-slider__title"}>{item.title}</div>

                    </div>))}

            </Slider>

        </div>
        </div>
        </>
    );
};
const CustomNextArrow = (props) => (
    <div className={'arrow_container'}>
    <div className="custom-arrow box_btn-prev">
        <button className="custom-arrow prev" onClick={props.onClick}>
            <img src={"/img/arrow.svg"} alt="next"/>
        </button>
    </div>
    </div>
);

const CustomPrevArrow = (props) => (
    <div className={'arrow_container'}>
        <div className="custom-arrow box_btn-next">
            <button className="custom-arrow next" onClick={props.onClick}>
                <img src="/img/arrow.svg" alt="next" className={"prevImg"}/>
            </button>
        </div>
    </div>
        );


        export default SlideProd;
