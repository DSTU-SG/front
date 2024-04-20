import React, { useState } from "react";
import MyInput from "../UI/Input/Input";
import MyButton from "../UI/Button/Button";


const AuthForm = () => {
    const [user, setUser] = useState({login:'',password:'' });

    const AuthUser = (e) => {
        e.preventDefault()
        console.log(user);
        setUser({login: '', password: ''})
    }

    return (
        <form className="auth__form">
          <h1>Authorization</h1>
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