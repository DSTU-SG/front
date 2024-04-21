import axios from "axios";


export default class ServiceServ {

    static async GetService(token)
    {
        try{
            
    const response = await axios.get('http://127.0.0.1:8000/services', 
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
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