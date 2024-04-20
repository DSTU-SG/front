import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { AuthContext } from '../../../context';
import MyButton from '../Button/Button';
import classes from './Navbar.module.scss';


const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className={classes.navbar}>
  
            <div className={classes.navbar__links}>
                <Link to="/news">Новости</Link>
                <Link to="/voting">Голосование</Link>
                <Link to="/education">Образовательные программы</Link>
                <Link to="/cash">Кешбек</Link>
                <Link to="/card">Данные по карте</Link>
            </div>
            <div className={classes.navbar__btn}>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            </div>

        </div>
    );
};

export default Navbar;