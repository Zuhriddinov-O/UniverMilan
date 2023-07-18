import React from "react"
import "./Basic2.scss"
import Roboicon from "../Basic2images/roboicon.png"
import Humanicon from "../Basic2images/humanicon.png"
import map from "../Basic2images/map.png"
import Rechart from "../Basic2/reytingchart.jsx"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import telegram from "../Basic2images/telegram.png"
import instagram from "../Basic2images/instagram.png"

import milanpic1 from "../Basic2images/milanpic1.png"
import milanpic2 from "../Basic2images/milanpic2.png"
import milanpic3 from "../Basic2images/milanpic3.png"
import milanpic4 from "../Basic2images/milanpic4.png"
import milanpic5 from "../Basic2images/milanpic5.png"
import milanpic6 from "../Basic2images/milanpic6.png"
import milanpic7 from "../Basic2images/milanpic7.png"
import milanpic8 from "../Basic2images/milanpic8.png"
import milanpic9 from "../Basic2images/milanpic9.png"




const Basic2 = () => {
    return (
        <React.Fragment>
            <div className="Basic2">
                <div className="Basic2__navbar">
                    <p className="paragraph">
                        <img className="paragraph__img" src={Roboicon} alt="" />Education</p>
                    <p className="paragraph2">
                        <img className="paragraph2__img" src={Humanicon} alt="" />Nargiza Akxmedova</p>
                </div>
                <div className="UniverMilan">
                    <p className="paragraph3">University of Milan</p>
                    <div className="MilanBtn"><button className="Milanbtn__button"><h3>Подать</h3></button></div>
                </div>
                <div className="blueline">

                    <div className="blueline__footer">

                        <a style={{ color: "  color: #ffffff;" }} href="#description">Описания</a>
                    </div>

                    <div className="blueline__footer">
                        <a href="#location">Локация</a>
                    </div>

                    <div className="blueline__footer">
                        <a href="#come">Поступление</a>
                    </div>

                    <div className="blueline__footer">
                        <a href="#gallery">Галерея</a>
                    </div>
                </div>

                <div className="innerBasic">
                    <div className="innerBasic__table">
                        <div className="reyting">
                            <p className="reyting__p1">Рейтинг</p>
                            <p className="reyting__p2">235</p>
                        </div>

                        <div className="strana">
                            <p className="strana__p1">Страна</p>
                            <p className="strana__p2">Италия</p>
                        </div>

                        <div className="gorod">
                            <p className="gorod__p1">Город</p>
                            <p className="gorod__p2">Милан</p>
                        </div>

                        <div className="bakalavriyat">
                            <p className="bakalavriyat__p1">Бакалавриат</p>
                            <p className="bakalavriyat__p2">$2,875/год</p>

                        </div>

                        <div className="magistratura">
                            <p className="magistratura__p1">Магистратура</p>
                            <p className="magistratura__p2">$2,875/год</p>
                        </div>

                        <div className="tsena">
                            <p className="tsena__p1">Цена прожив-ния</p>
                            <p className="tsena__p2">$2,875/год</p>
                        </div>
                    </div>
                    <div className="About">
                        <div className="About__head"> Миланский университет или University of Milan (UNIMI) -
                        </div>
                        <div className="About__Aboutinit">
                            государственное высшее учебное заведение в Италии. Начало академической деятельности UNIMI было положено в 1924 году. Главное здание университета расположено в Милано на территории кампуса городского типа.</div>

                        <div className="About__Aboutinit2" id="description">
                            Рейтинг университета. University of Milan считается одним из самых престижных учебных заведений Италии и входит в пятёрку лучших вузов страны. Университет входит в 5% лучших высших учебных заведений мира, занимая 223 позицию. Сильными направлениями университета являются: «Искусство и Гуманитарные науки», «Инженерное дело и технологии», «Науки о жизни и медицина», «Естественные науки», «Социальные науки и менеджмент», «Математика», «Экономика и бизнес». Учебное заведение признаётся одним из самых лучших вузов по качеству образования и входит в топ 200 в мировом рейтинге по данному критерию. Миланский университет считается одним из наиболее уважаемых учебных заведений среди работодателей в Италии и по всему миру.
                            Миланский университет считается одним из наиболее уважаемых учебных заведений среди работодателей в Италии и по всему миру.</div>
                    </div>
                    <div className="map" id="location">
                        <img className="map__img" src={map} alt="This is a map img" />
                        <div className="chart">
                           <Rechart />
                            <div className="fakulteti" >
                                <p className="fakulteti__p">Факультеты</p>
                                <li className="fakulteti__li"> Факультет Науки</li>
                                <li className="fakulteti__li"> Факультет Информационных Технологий</li>
                                <li className="fakulteti__li"> Факультет Науки</li>
                                <li className="fakulteti__li"> Факультет Информационных Технологий</li>
                                <li className="fakulteti__li">Факультет Науки</li>
                                <li className="fakulteti__li" >Факультет Информационных Технологий</li>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="protsez" id="come">
                    Процесс поступления
                </div>
                <div className="USD">
                    Полное курирование поступления — от 789 USD
                    Поступление в университет - важный и ответственный шаг в жизни каждого. Позвольте профессионалам быть рядом на каждом этапе поступления.
                </div>
                <div className="spetsialisti">
                    Специалисты образовательного агентства Education:
                </div>
                <div className="spetsialisti_ol">
                    <li className="spetsialisti_li">Проконсультируют вас по вопросам образования за рубежом;</li>
                    <li className="spetsialisti_li">Подберут университеты под ваш профайл и бюджет;</li>
                    <li className="spetsialisti_li">   Подготовят необходимый комплект документов;</li>
                    <li className="spetsialisti_li">Отправят заявки в учебные заведения;</li>
                    <li className="spetsialisti_li">  Подадут документы на внутренние стипендии вузов;</li>
                    <li className="spetsialisti_li">Помогут оформить студенческую визу.</li>
                    <li className="spetsialisti_li">Мы организуем Ваше поступление за границу: для этого заполните заявку, и мы свяжемся с Вами в ближайшее время.</li>
                </div>
                <div className="dokumenti">
                    <button className="dokumenti__btn">Подать документы</button>
                </div>
                <Swiper id="gallery" className="mySwiper2"
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}

                >
                    <SwiperSlide className="swiperSlide">
                        <div className="slideimg">
                            <img className="slide2" src={milanpic1} alt="" />
                            <img className="slide2" src={milanpic2} alt="" />
                            <img className="slide2" src={milanpic3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="slideimg">
                            <img className="slide2" src={milanpic4} alt="" />
                            <img className="slide2" src={milanpic5} alt="" />
                            <img className="slide2" src={milanpic6} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="slideimg">
                            <img className="slide2" src={milanpic7} alt="" />
                            <img className="slide2" src={milanpic8} alt="" />
                            <img className="slide2" src={milanpic9} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="lastfooter">
                    {/*  */}
                    <div className="lastfooterinit1">
                        <div className="education">
                            <p className="education__p">Education Getaway</p>
                        </div>
                        <div className="address">
                            <p className="address__p">Наш адрес:</p>
                            <h4 className="address__h4">  Muqumiy ko'chasi, 54a uy, Toshkent, Uzbekistan</h4>
                        </div>
                        <div className="pochta">
                            <p className="pochta__p">
                                Почта для связи:</p>
                            <h4 className="pochta__h4">Education_gateway@gmail.com</h4>
                        </div>
                        <div className="number">
                            <p className="number__p">Номер для связи:</p>
                            <h4 className="number__h4"> +998 55 503 1010</h4>
                        </div>
                        <div className="worktime">
                            <p className="worktime__p">Часы работы:</p>
                            <h4 className="worktime__h4">   c понедельника по субботу c 9:00 до 18:00 </h4>
                        </div>
                    </div>
                    {/*  */}
                    <div className="lastfooterinit2">
                        <p className="onas">
                            О нас
                        </p>
                        <div className="eduget">
                            <h4>
                                Education Geteway - Ита́лия (итал.  Italia ), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [respublika Italiana]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО c момента их создания, является третьей по величине экономикой еврозоны.
                            </h4>
                        </div>

                        <div className="granits">
                            <h4>
                                Гpaничитc Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км).
                            </h4>
                        </div>
                        <div className="ending">© 2021 All rights reserved</div>
                    </div>
                    <div className="lastfooterinit3">
                        <p className="novosti">Еженедельные новости
                        </p>
                        <div className="potpishites">
                            Подпишитесь на еженедельную рассылку чтобы быть в курсе отличных акций
                        </div>
                        <div className="emailbtn">
                            <input type="email" placeholder=" Ваш e-mail адрес" />
                        </div>
                        <button className="potpisatsiyabtn">
                            <p>Подписаться</p>
                        </button>
                        <p className="politika">Политика конфедициальности</p>
                        <div className="footericons">
                            <img className="telegramicon" src={telegram} alt="" />
                            <img className="instagramicon" src={instagram} alt="" />
                            <img className="telegramicon" src={telegram} alt="" />
                            <img className="instagramicon" src={instagram} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Basic2;

//////////////


