import React, { useEffect, useState } from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './styles/App.scss';
import { AuthContext } from "./context";

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
        setIsAuth(true)
    }
    setLoading(false);
}, [])


  return (
    <div className="App">
    <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
    <BrowserRouter>
   <AppRouter/>
   </BrowserRouter>
    </AuthContext.Provider>

    </div>
  );
}

export default App;
