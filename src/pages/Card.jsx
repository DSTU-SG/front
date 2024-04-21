import React from "react";
import Navbar from "../components/UI/Navbar/Navbar";
import Plastik from "../images/card.png";
import Credit from "../images/credit.png";

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
							<div className='profile_info__row'>Фамилия</div>
							<div className='profile_info__row'>Имя</div>
							<div className='profile_info__row'>Отчество</div>
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
					<div className='card actions'></div>
					<div className='card plastik-details'></div>
					<div className='card plastik-operations'></div>
					<div className='card plastik-settings'></div>
				</div>
			</div>
		</div>
	);
};

export default Card;
