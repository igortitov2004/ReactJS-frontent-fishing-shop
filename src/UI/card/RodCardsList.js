import React from 'react';
import RodCard from "./RodCard";


const RodCardsList = ({cards}) => {

    if (cards.length === 0) {
        return  <h1> Товары не найдены!</h1>;
    }
    return (

            <div>
                {cards.map(card=>
                    <div key={card.id}>
                        {<RodCard card = {card}/>}
                    </div>)}

            </div>
    );
};

export default RodCardsList;