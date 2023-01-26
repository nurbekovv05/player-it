import React from 'react';
import Logo from './../../image/логотип.png'
const Header = () => {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <div className="header-left">
                            <div className="header-left_logo">
                                 <img src={Logo} alt=""/>
                            </div>
                            <div className="header-left_links">
                                <a href='#' className="nav-header">О школе</a>
                                <a href="#" className="nav-header" >Наши курсы</a>
                                <a href="#" className="nav-header" >О нас</a>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="header-right_buttons">
                                <a href="#" className="nav-right">Войти</a>
                                <button className="button-header">Подписаться</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
};

export default Header;