import React from 'react';
import {NavLink} from "react-router-dom";
import image from './../../image/логотип.png'
import {AiFillInstagram} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {SiTiktok} from "react-icons/si"
import {ImTelegram} from "react-icons/im"
import {CgMail} from "react-icons/cg"
import {IoMdCall} from "react-icons/io"
import {MdLocationOn} from "react-icons/md"

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer-logo">
                        <img src={image}  alt=""/>
                        <div>
                            <button>KG</button>
                            <button>RU</button>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h3>Быстрые ссылки</h3>
                        <NavLink className="nav-footer" to={"/School"}>О школе</NavLink>
                        <NavLink className="nav-footer" to={"/Course"}>Наши курсы</NavLink>
                        <NavLink className="nav-footer" to={"/About"}>О нас</NavLink>
                    </div>
                    <div className="footer-social">
                        <h3>Социальные сети</h3>
                        <div className="footer-social_icons">
                            <AiFillInstagram/>
                            <AiFillYoutube/>
                            <AiFillFacebook/>
                            <AiFillTwitterCircle/>
                            <SiTiktok/>
                            <ImTelegram/>
                        </div>

                    </div>
                    <div className="footer-contact">
                        <h3>Контакты</h3>
                        <div className="footer-contact_top-group">
                            <CgMail className="icon"/>
                            <p>@motionwebteam@gmail.com</p>
                        </div>
                        <div className="footer-contact_bot-group">
                            <IoMdCall className="icon"/>
                            <p>+996 559 - 69 - 26 - 26</p>
                        </div>
                    </div>
                    <div className="footer-address">
                        <h3>Адреса</h3>
                        <div className="location">
                            <MdLocationOn className="location-icon"/>
                            Турусбекова 109 / 3
                        </div>
                        <div className="number">
                            Идентификационный код: 1234567890
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;