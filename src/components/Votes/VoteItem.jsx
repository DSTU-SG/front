import React from "react";
import MyButton from "../UI/Button/Button";


const VoteItem = (props) => {

    return(
        <div className="Voteitem">
            <div className="Voteitem__header"><h2>{props.vote.header}</h2></div>
            <div className="Voteitem__body">
                <div className="Voteitem__body__text">{props.vote.text}</div>
                <div className="Voteitem__body__people">
                    <div className="Voteitem__body__people__likes">за {props.vote.consonants}</div>
                    <div className="Voteitem__body__people__dislikes">против {props.vote.dissenters}</div>
                </div>
            </div>
            <div className="Voteitem__btns">
                <MyButton>За</MyButton>
                <MyButton>Против</MyButton>
            </div>
        </div>
    );
    };

export default VoteItem;