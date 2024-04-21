import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/UI/Navbar/Navbar";
import Votelist from "../components/Votes/VoteList";
import VoteServ from "../API/VoteServ";
import Pagination from "../components/UI/Pagination/Pagination";
import PaginationV from "../components/UI/PaginationV/PoginationV";

const votes1 =[
  {
    "header": "Исследование медицинских наук",
    "text": "Исследование последних тенденций и достижений в области медицинских наук."
  },
  {
    "header": "Развитие искусства",
    "text": "Анализ влияния современных технологий на развитие сферы искусства."
  },
  {
    "header": "Экологические вызовы и решения",
    "text": "Обсуждение экологических проблем и поиск оптимальных путей их решения."
  },
  {
    "header": "Технологии будущего",
    "text": "Исследование перспективных технологий, которые изменят мир в будущем."
  },
  {
    "header": "Инновации в образовании",
    "text": "Анализ новаторских методов и подходов к обучению и развитию образовательной системы."
  },
  {
    "header": "Бизнес-стратегии в цифровую эпоху",
    "text": "Обсуждение стратегий и тактик, необходимых для успешного ведения бизнеса в современном цифровом мире."
  },
  {
    "header": "Международные отношения в современном мире",
    "text": "Анализ взаимоотношений между государствами и регионами в условиях современной глобализации."
  },
  {
    "header": "Тренды в мировой моде",
    "text": "Исследование последних трендов и инноваций в мировой модной индустрии."
  },
  {
    "header": "Спортивные достижения и технологии",
    "text": "Обсуждение современных достижений в спорте и технологических инноваций, повышающих эффективность тренировок."
  },
  {
    "header": "Культурное разнообразие и глобализация",
    "text": "Анализ влияния глобализации на культурное разнообразие и сохранение национальных идентичностей."
  },
  {
    "header": "Туризм и путешествия в эпоху изменений",
    "text": "Исследование тенденций и вызовов в сфере туризма и путешествий в современном мире."
  },
  {
    "header": "Гендерные исследования",
    "text": "Анализ роли гендера в современном обществе и выявление проблем неравенства."
  },
  {
    "header": "Финансовая стабильность и инвестиции",
    "text": "Обсуждение факторов, влияющих на финансовую стабильность и успешные инвестиционные стратегии."
  },
  {
    "header": "Инновационные решения в городском планировании",
    "text": "Исследование современных тенденций и инновационных подходов в городском планировании и развитии городов."
  },
  {
    "header": "Психология и эмоциональное благополучие",
    "text": "Анализ факторов, влияющих на психологическое и эмоциональное благополучие в современном обществе."
  },
  {
    "header": "Этика и технологии",
    "text": "Обсуждение этических вопросов, связанных с использованием современных технологий."
  },
  {
    "header": "Политические трансформации в современном мире",
    "text": "Исследование процессов политических трансформаций и изменений в международной политике."
  },
  {
    "header": "Индустрия развлечений и медиа",
    "text": "Анализ последних тенденций и инноваций в индустрии развлечений и медиа."
  },
  {
    "header": "Наука и технологии в борьбе с изменением климата",
    "text": "Обсуждение роли науки и технологий в борьбе с изменением климата и сохранении окружающей среды."
  },
  {
    "header": "Социальные движения и активизм",
    "text": "Исследование социальных движений и активистских инициатив в современном обществе."
  }
]



const Voting = () => {
  const [votes, setVotes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [limit, setLimit] = useState(10);
  const [totalCount, setTotalCount] = useState(10);


  // async function PostVotes(votes)
  // {
  //   console.log(votes);
  //   for (let i=0;i<votes.length;++i)
  //   {
  //       const res = await VoteServ.PostVote(votes[i]);
  //   }
 
  // }

  async function GetVotes(pageId,limit, token)
  {
    const res = await VoteServ.GetVotes(pageId, limit,token);
    let v = [];
    console.log(res);
    let a = 10*(page-1);
    for (let i =1+a;i<=limit+a;++i)
    {
      console.log(res.data.votes[i]);
      v.push(res.data.votes[i]);
    }

    setVotes([...v]); 
    console.log("votes "+votes); 
    setTotalPages(Math.ceil(res.data.total/limit));
    console.log("page= "+page);
    console.log("total page="+totalPages);

}


// useEffect(() => {
//   // PostVotes(votes2);
//   // setTotalPages(getPageCount(votes2.length, limit));
// }, [])

useEffect(()=> {
  GetVotes(page, limit, localStorage.getItem('token'));
  
}, [page])


const changePage = (page) => {
  setPage(page)
}

    return (
        <div>
          <Navbar/>
          <PaginationV
                page={page}
                changePage={changePage}
                totalPages={10}
            />
         <Votelist votes={votes} />
    
        
   
      
        
        </div>
    );
};

export default Voting;