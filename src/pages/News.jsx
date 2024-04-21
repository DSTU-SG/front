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
        <div className="info_wrapper">
          <div className="col">
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
          <div className="col">
            <div className="time">
            <div className='profile_info__title'>09:00 Погода <img src={mdetails}/></div> 
						<div className='profile_info__row'>До плюс 18: какой будет погода в Ростове-на-Дону в ближайшие дни</div>
            </div>
            <div className="time">
            <div className='profile_info__title'>09:00 Погода <img src={mdetails}/></div> 
						<div className='profile_info__row'>До плюс 18: какой будет погода в Ростове-на-Дону в ближайшие дни</div>
            </div>
            <div className="time">
            <div className='profile_info__title'>09:00 Погода <img src={mdetails}/></div> 
						<div className='profile_info__row'>До плюс 18: какой будет погода в Ростове-на-Дону в ближайшие дни</div>
            </div>
            <div className="time">
            <div className='profile_info__title'>09:00 Погода <img src={mdetails}/></div> 
						<div className='profile_info__row'>До плюс 18: какой будет погода в Ростове-на-Дону в ближайшие дни</div>
            </div>
            <div className="time">
            <div className='profile_info__title'>09:00 Погода <img src={mdetails}/></div> 
						<div className='profile_info__row'>До плюс 18: какой будет погода в Ростове-на-Дону в ближайшие дни</div>
            </div>
            <div className="time">
            <div className='profile_info__title'>09:00 Погода <img src={mdetails}/></div> 
						<div className='profile_info__row'>До плюс 18: какой будет погода в Ростове-на-Дону в ближайшие дни</div>
            </div>
          </div>
          <div className="col">
            <div className="ad"><img src={ad1}/></div>
            <div className="ad"><img src={ad2}/></div>
          </div>

        </div>
      </div>
    );
};

export default News;