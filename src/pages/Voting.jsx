import React, { useState } from "react";
import Navbar from "../components/UI/Navbar/Navbar";
import Votelist from "../components/Votes/VoteList";
import VoteServ from "../API/VoteServ";



const Voting = () => {
  const [votes, setVotes] = useState([]);

  const LoadVotes = async (e) => {
    
    const res = await VoteServ.LoadVotes(1, 10, );
    console.log(res);
 
   
}

    return (
        <div>
          <Navbar/>
        <div>
         <Votelist />
        </div>
        </div>
    );
};

export default Voting;