import React from "react";
import Navbar from "../components/UI/Navbar/Navbar";
import Votelist from "../components/Votes/VoteList";

const Voting = () => {



    return (
        <div>
          <Navbar/>
        <div>
         <Votelist/>
        </div>
        </div>
    );
};

export default Voting;