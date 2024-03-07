import React from 'react';
import RodCard from "./RodCard";
import Row from "react-bootstrap/Row";


const RodCardsList = ({cards}) => {

    if (cards.length === 0) {
        return  <h1> Товары не найдены!</h1>;
    }
    return (

            <div>
                <Row xs={1} md={2} className="g-4">
                {cards.map(card=>
                    <div key={card.id}>
                        {<RodCard card = {card}/>}
                    </div>)}
                </Row>
            </div>
    );
};

export default RodCardsList;