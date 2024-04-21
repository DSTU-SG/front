import React, { useContext, useEffect, useState } from "react";
import MyInput from "../UI/Input/Input";
import MyButton from "../UI/Button/Button";
import { AuthContext } from "../../context";
import AuthServ from "../../API/AuthServ";



const AuthForm = () => {
    const [user, setUser] = useState({login:'',password:'' });
    const {isAuth, setIsAuth} = useContext(AuthContext);

    useEffect(() => {
      setIsAuth(false);
      localStorage.removeItem('auth');
      localStorage.removeItem('token');
      document.cookie = "Authorization=";
    }, [])

   

    const AuthUser = async (e) => {
        e.preventDefault()
        console.log(user);
        const res = await AuthServ.PostUser(user.login, user.password);
        console.log(res);
         setIsAuth(true);
        if(res)
        {
          let b = res.data.token_type;
          b = b[0].toUpperCase() + b.slice(1);
          document.cookie = "Authorization="+b+" "+res.data.access_token;
          setIsAuth(true);
          localStorage.setItem('auth', 'true');
          localStorage.setItem('token',b+" "+res.data.access_token );
        }
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