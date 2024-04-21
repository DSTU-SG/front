import React from "react";
import MyButton from "../UI/Button/Button";
import VoteServ from "../../API/VoteServ";


const VoteItem = (props) => {

  

    const PostLike = async (e) => {
       
        const res = await VoteServ.PostLike(props.vote.id,localStorage.getItem('token') );
        console.log(res);
    }

    const PostDislike = async (e) => {
       
    
        const res = await VoteServ.PostDislike(props.vote.id,localStorage.getItem('token') );
        console.log(res);
    
    }



    return(
        <div className="Voteitem">
            <div className="Voteitem__header"><h2>{props.vote.header}</h2></div>
            <div className="Voteitem__body">
            <div className="Voteitem__body__text">{props.vote.text}</div>
            <div className="Voteitem__body__part">
            <div className="Voteitem__body__part__people">
                    <div className="Voteitem__body__part__people__likes"><span>Проголовали за</span> <h3>{props.vote.consonants}</h3></div>
                    <div className="Voteitem__body__part__people__likes"><span>Проголовали против</span> <h3>{props.vote.dissenters}</h3></div>
                </div>
                <div className="Voteitem__body__part__btns">
                <MyButton onClick={PostLike}>За</MyButton>
                <MyButton onClick={PostDislike}>Против</MyButton>
            </div>

            </div>
                
               
            </div>
           
        </div>
    );
    };

export default VoteItem;