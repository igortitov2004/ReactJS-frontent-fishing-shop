import React from 'react';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const OrderForm = ({order,nameOfItem}) => {
    return (
        <Card className="ms-2 m-3" style={{width: '29rem', height: '9rem'}}>
            {nameOfItem.includes('reel') ?
                <div className="d-flex">
                    <Card.Img variant="top" src={order.reel.link} style={{
                        width: '9rem',
                        height: '8.95rem',
                        border: '2px solid black',
                        borderRadius: '3px'
                    }}/>
                    <div className="mx-2">
                        <Card.Body>
                            <h6>{order.reel.name}</h6>
                            <span>Стоимость: {order.reel.price} BYN</span> <br/>
                            <span>Производитель: {order.reel.manufacturer.name}</span><br/>
                            <div className="d-flex">
                                <span>Количество: {order.amount}</span>
                            </div>

                        </Card.Body>
                    </div>
                </div> :
                <div className="d-flex">
                    <Card.Img variant="top" src={order.rod.link} style={{
                        width: '9rem',
                        height: '8.95rem',
                        border: '2px solid black',
                        borderRadius: '3px'
                    }}/>
                    <div className="mx-2">
                        <Card.Body>
                            <h6>{order.rod.name}</h6>
                            <span>Стоимость: {order.rod.price} BYN</span> <br/>
                            <span>Производитель: {order.rod.manufacturer.name}</span><br/>
                            <div className="d-flex">
                                <span>Количество: {order.amount}</span>
                            </div>
                        </Card.Body>

                    </div>

                </div>}

        </Card>
    );
};

export default OrderForm;