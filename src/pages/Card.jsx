import React from "react";
import Navbar from "../components/UI/Navbar/Navbar";
import Plastik from "../images/card.png";
import Credit from "../images/credit.png";
import Blockc from "../images/Block.svg";
import Newc from "../images/Newc.svg";
import Freez from "../images/Freez.svg";



const Card = () => {
	return (
		<div>
			<Navbar />
			<div className='info_wrapper'>
				<div className='col'>
					<div className='card profile'>
						<div className='profile_avatar'>
							<div className='profile_avatar__placeholder'></div>
							<button className='profile_avatar__change'>Изменить фото</button>
						</div>
						<div className='profile_info'>
							<div className='profile_info__title'>Личные данные</div>
              <input className="Fio" type="text" defaultValue="Фамилия" readonly="readonly" />
              <input className="Fio" type="text" defaultValue="Имя" readonly="readonly" />
              <input className="Fio" type="text" defaultValue="Отчество" readonly="readonly" />
						</div>
					</div>
					<div className='card settings'>
						<div className='card_title'>Настройки профиля</div>
						<div className='settings_row'>E-mail</div>
						<div className='settings_row'>Номер телефона</div>
						<div className='settings_row'>Паспортные данные</div>
						<div className='settings_row'>Адрес регистрации</div>
						<div className='settings_row'>Адрес проживания</div>
					</div>
				</div>
				<div className='col'>
					<img
						className='card plastik'
						src={Plastik}
						alt=''
					/>
					<div className='card category'>
						<div className='card_title'>Категория кэшбэка в апреле</div>
						<div className='category_card'>
							<img
								src=''
								alt=''
								className='category_img'
							/>
							<span className='category_text'>Транспорт</span>
						</div>
						<div className='category_card'>
							<img
								src=''
								alt=''
								className='category_img'
							/>
							<span className='category_text'>Канецелярия</span>
						</div>
						<div className='category_card'>
							<img
								src=''
								alt=''
								className='category_img'
							/>
							<span className='category_text'>Рестораны</span>
						</div>
						<div className='category_card'>
							<img
								src=''
								alt=''
								className='category_img'
							/>
							<span className='category_text'>Все покупки</span>
						</div>
					</div>
					<img
						className='card credit'
						src={Credit}
						alt=''
					/>
				</div>
				<div className='col'>
					<div className='card_actions'>
          <div className='action_card'>
							<img
								src={Blockc}
								className='action_img'
							/>
							<span className='action_text'>Заблокировать</span>
           </div>
          <div className='action_card'>
							<img
								src={Newc}
								className='action_img'
							/>
							<span className='action_text'>Перевыпустить</span>
           </div>
          <div className='action_card'>
							<img
								src={Freez}
								className='action_img'
							/>
							<span className='action_text'>Заморозить</span>
						</div>
            </div>
					<div className='card_plastik-details'>
          <div className='card_info__title'>Реквизиты карты</div> <span>показать</span>
          <div className="cardinfo">
          <input className="number_card" type="text" placeholder="**** **** **** ****" readonly="readonly" />
          <input className="date_card" type="text" placeholder="**/**" readonly="readonly" />
          <input className="cvv_card" type="text" placeholder="***" readonly="readonly" />
          </div>
          </div>
					<div className='card_plastik-operations'>
            <div className="profile_info__title">Операции по карте</div>
            <div className="profile_info__row">Траты за апрель</div>
            <div className="profile_info__row">21673,52</div>
            <input className="cashdeal" readonly="readonly"/>
          </div>
					<div className='card_plastik-settings'>
          <div className='card_title'>Настройки карты</div>
						<div className='settings_row'>Дизайн карты</div>
						<div className='settings_row'>Изменить ПИН-код</div>
						<div className='settings_row'>Тарифные лимиты</div>
						<div className='settings_row'>Оповещения об операциях</div>
						<div className='settings_row'>ПИН-код при оплате картой</div>
          </div>
				</div>
			</div>
		</div>
	);
};

export default Card;
