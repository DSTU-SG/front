import axios from "axios";

export default class VoteServ
{
    static async GetVotes(pageId, limit, token)
    {
        try{
            {}
    const response = await axios.get('http://127.0.0.1:8000/votes', {
        params: {
            page: pageId,
            count: limit,
            authorization: token,
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
            const response = await axios.post('http://127.0.0.1:8000/consonants/'+id, {
                id_: id,
                authorization: token,
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
        alert('Ошибка получения данных');
    }
    }


    static async PostDislike(id, token)
    {
        try{
            {}
            const response = await axios.post('http://127.0.0.1:8000/dissenters/'+id, {
                id_: id,
                authorization: token,
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
        alert('Ошибка получения данных');
    }
    }
}