import React from 'react';

const Header = () => {
    return (
        <header className={'header'}>
            <div className="header__inner">
                <img src="/img/menu.svg" alt="menu"/>
                <div className="menu"></div>
                <div className="logo"><img src="/img/logo.svg" alt="logo"/></div>
                <div className="phone_numbers">
                    <span>8 (812) 603-72-22</span>
                    <span>8 (499) 380-77-33</span>
                </div>
            </div>

        </header>
    );
};

export default Header;
