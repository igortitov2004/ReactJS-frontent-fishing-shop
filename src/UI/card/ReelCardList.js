import React from 'react';
import RodCard from "./RodCard";
import ReelCard from "./ReelCard";
import Row from "react-bootstrap/Row";

const ReelCardList = ({cards}) => {
    if (cards.length === 0) {
        return  <h1> Товары не найдены!</h1>;
    }

    return (

        <div>
            <Row md={2} className="g-3">
                {cards.map(card=>
                    <div key={card.id}>
                        {<ReelCard card = {card}/>}
                    </div>)}
            </Row>
        </div>
    );
};

export default ReelCardList;