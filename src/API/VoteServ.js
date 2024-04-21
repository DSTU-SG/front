import axios from "axios";

export default class VoteServ
{
  

    static async PostVote(vote)
    {
      console.log(vote);
        try{   
           const response = await axios.post('http://127.0.0.1:8000/votes',vote,
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
          }
        }
        );
        console.log(response);
        return response;
    }
    catch(e)
    {
        alert('Ошибка отправления данных');
    }
    }

    static async GetVotes(pageId, limit, token)
    {
        try{
            console.log(pageId, limit, token);
    const response = await axios.get('http://127.0.0.1:8000/votes', {
        params: {
            page: pageId,
            count: limit,
          },
          headers: {
            'Authorization': token,
          }
    })
        return response;
    }
    catch(e)
    {
        alert('Ошибка получения данных');
    }
    }
    

    static async PostLike(id, token)
    {
        try{
            {}
            const response = await axios.post('http://127.0.0.1:8000/votes/consonants/'+id, {
                id_: id,
              },
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
        alert('Ошибка получения данных');
    }
    }


    static async PostDislike(id, token)
    {
        try{
            {}
            const response = await axios.post('http://127.0.0.1:8000/votes/dissenters/'+id, {
                id_: id,
       
              },
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
        alert('Ошибка получения данных');
    }
    }
}