import React from 'react';
import RodCard from "./RodCard";
import ReelCard from "./ReelCard";

const ReelCardList = ({cards}) => {
    if (cards.length === 0) {
        return  <h1> Товары не найдены!</h1>;
    }

    return (

        <div>

            {cards.map(card=>
                <div key={card.id}>
                    {<ReelCard card = {card}/>}
                </div>)}
        </div>
    );
};

export default ReelCardList;