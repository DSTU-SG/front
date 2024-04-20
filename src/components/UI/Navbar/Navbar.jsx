import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { AuthContext } from '../../../context';

import MyButton from '../Button/Button';
import classes from './Navbar.module.scss';
import logo from '../../../images/Centr_Invest_logo.svg';
import acc from '../../../images/acc_logo.svg';
import ext from '../../../images/exit_logo.svg';
import NavLink from 'react-router-dom/NavLink';


const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        document.cookie = "Authorization=";
    }

    return (
        isAuth?
        <div className={classes.navbar}>
                <div className={classes.navbar__logo}><img src={logo}/></div>
            <nav className={classes.navbar__links}>
             
                  <NavLink to="/news" exact className={classes.navbar__links__link} activeClassName={classes.active}>Новости</NavLink>
                  <NavLink to="/voting" className={classes.navbar__links__link} activeClassName={classes.active}>Голосование</NavLink>
                  <NavLink to="/education" className={classes.navbar__links__link} activeClassName={classes.active}>Образовательные программы</NavLink>
                  <NavLink to="/cash" className={classes.navbar__links__link} activeClassName={classes.active}>Кешбек</NavLink>
                  <NavLink to="/card" ><img src={acc}/></NavLink>
                  <NavLink to="/auth"><img  onClick={logout} src={ext}/></NavLink>
                </nav>
               
       
        </div>
        :
        <div className={classes.navbar}>
        <div className={classes.navbar__logo}><img src={logo}/></div>
    <div className={classes.navbar__links}>
        <Link to="/"><img src={acc}/></Link>
    </div>
</div>
    );
};

export default Navbar;