import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import Navbar from "../components/UI/Navbar/Navbar";

const Auth = () => {
    return (
        <div className="authPage">
            <Navbar/>
            <div className="auth">
       <AuthForm/>
        </div>
        </div>

      

    );
};

export default Auth;