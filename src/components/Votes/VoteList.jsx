import React from "react";
import VoteItem from "./VoteItem";


const Votelist = ({votes}) => {

    return(
        <div className="Votelisted"> 

           {votes.map((vote, index) =>
                        <VoteItem key = {vote.id} vote={vote} />
                )}

        </div>  
    );
    };

export default Votelist;