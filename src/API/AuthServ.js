import axios from "axios";


export default class AuthServ {

    static async PostUser(login, password)
    {
        try{
            
    const response = await axios.post('http://127.0.0.1:8000/auth/login', {
    username: login,
    password: password
  },
  {
    headers: {
      'Content-Type': 'application/json'
    }
  });
        return response;
    }
    catch(e)
    {
        alert('Ошибка входа!');
    }
    }

  
}