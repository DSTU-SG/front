import React, { useContext, useState } from "react";
import MyInput from "../UI/Input/Input";
import MyButton from "../UI/Button/Button";
import { AuthContext } from "../../context";


const AuthForm = () => {
    const [user, setUser] = useState({login:'',password:'' });
    const {isAuth, setIsAuth} = useContext(AuthContext);



    const AuthUser = (e) => {
        e.preventDefault()
        console.log(user);
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
      
        setUser({login: '', password: ''})
    }

    return (
        <form className="auth__form">
          <h1>Авторизация</h1>
          <MyInput
        value={user.login}
        onChange={e => setUser({...user, login: e.target.value})}
           type = "text"
            placeholder ="Введите логин"/>
          <MyInput
           value={user.password}
           onChange={e => setUser({...user, password: e.target.value})}
           type = "password" 
           placeholder ="Введите пароль"/>
          <MyButton onClick={AuthUser}>Войти</MyButton>
        </form>

    );
};

export default AuthForm;