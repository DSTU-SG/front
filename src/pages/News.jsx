import React from "react";
import Navbar from "../components/UI/Navbar/Navbar";
import imgnews1 from "../images/news1.png";
import imgnews2 from "../images/news2.png";
import mdetails from "../images/details.svg"
import ad1 from "../images/ad1.png"
import ad2 from "../images/ad2.png"

const News = () => {
    return (
        <div>
          <Navbar/>
        <div className="info_wrap">
          <div className="col1">
            <div className="news">
              <span className="textnews">За 10 лет банк «Центр-инвест» обучил финансовой грамотности более 2 млн человек</span>
              <img className="mdetails" src={mdetails}/>
              <img className="imgnews" src={imgnews1}/>
            </div>
            <div className="news">
              <span className="textnews">Банку «Центр-инвест» присвоен ESG-рейтинг ESG-АА</span>
              <img className="mdetails" src={mdetails}/>
              <img className="imgnews" src={imgnews2}/>
            </div>
          </div>
          <div className="col23">
          <div className="col2">
            <div className="time">
            <div className='profile_info__title'>09:00 Погода <img src={mdetails}/></div> 
						<div className='profile_info__row'>До плюс 18: какой будет погода в Ростове-на-Дону в ближайшие дни</div>
            </div>
            <div className="time">
            <div className='profile_info__title'>12:00 Имущественно-земельные отношения <img src={mdetails}/></div> 
						<div className='profile_info__row'>Бизнес-центр, гостиница, школы: что построят на севере Ростова-на-Дону по городской программе</div>
            </div>
            <div className="time">
            <div className='profile_info__title'>14:00 Транспорт <img src={mdetails}/></div> 
						<div className='profile_info__row'>Более 600 тысяч поездок в день:  растет популярность трамваев</div>
            </div>
            <div className="time">
            <div className='profile_info__title'>18:00 Досуг <img src={mdetails}/></div> 
						<div className='profile_info__row'>Более 6 минут без еды: на хакатоне началась голодовка или студенты активно готовятся к пляжному сезону?</div>
            </div>
            <div className="time">
            <div className='profile_info__title'>21:00 Транспорт <img src={mdetails}/></div> 
						<div className='profile_info__row'>Спустя тысячи строк кода уставшие бедолаги могут пойти на 12 часовой перерыв</div>
            </div>
            <div className="time">
            <div className='profile_info__title'>09:00 Погода <img src={mdetails}/></div> 
						<div className='profile_info__row'>Что-то похолодало, неу жели это хакатонщики выгорели?</div>
            </div>
          </div>
          <div className="col3">
            <div className="ad"><img src={ad1}/></div>
            <div className="ad"><img src={ad2}/></div>
          </div>
          </div>
       

        </div>
      </div>
    );
};

export default News;