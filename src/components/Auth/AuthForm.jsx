import React, { useContext, useState } from "react";
import MyInput from "../UI/Input/Input";
import MyButton from "../UI/Button/Button";
import { AuthContext } from "../../context";
import AuthServ from "../../API/AuthServ";



const AuthForm = () => {
    const [user, setUser] = useState({login:'',password:'' });
    const {isAuth, setIsAuth} = useContext(AuthContext);



    const AuthUser = async (e) => {
        e.preventDefault()
        console.log(user);
        const res = await AuthServ.PostUser(user.login, user.password);
        console.log(res);
        if(res)
        {
          document.cookie = "Authorization="+res.data.token_type+" "+res.data.access_token;
          setIsAuth(true);
        //  localStorage.setItem('auth', 'true');
        //}
        setUser({login: '', password: ''})
    }

    return (
        <form className="auth__form">
          <div className="auth__form__head"><h1>Авторизация</h1></div>
          <div className="auth__form__input">
            <div className="auth__form__input__one">
            <span>Введите логин</span>
          <MyInput
        value={user.login}
        onChange={e => setUser({...user, login: e.target.value})}
           type = "text"
            />
            </div>
           
          <div className="auth__form__input__one">
            <span>Введите пароль</span>
            <MyInput
           value={user.password}
           onChange={e => setUser({...user, password: e.target.value})}
           type = "password" 
           />
          </div>
        <div className="auth__form__input__link"><a href="#">Забыли пароль?</a></div>
         
          </div>
         
          <MyButton onClick={AuthUser}>Войти</MyButton>
     
         
        </form>

    );
};

export default AuthForm;