import React from 'react';
import CartForm from "./CartForm";
import Row from "react-bootstrap/Row";
import OrderForm from "./OrderForm";
import {Button} from "react-bootstrap";
import OrderService from "../../API/OrderService";
import {useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";

const OrderFormList = ({order}) => {
    const navigate = useNavigate();
    const deleteOrder=(event)=>{
        OrderService.delete(order.id).then(r => console.log(r))
        navigate('/orders')
    }
    return (

            <div style={{border:"2px solid black",borderRadius:"2%",margin:" 1% 1% 1% 1%",width:"98%"}}>
                <div className="m-3">
                    <h3>Стоимость: {order.totalPrice}</h3>
                    <h3>Адрес: {order.address}</h3>
                    <div className="d-flex">
                        <h3>Дата и время заказа: {order.localDateTime}</h3>
                        <Form onSubmit={deleteOrder}>
                            <button type="submit" className="ms-2 btn btn-outline-danger" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-trash3" viewBox="0 0 16 16" >
                                    <path
                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></path>
                                </svg>
                            </button>
                        </Form>
                    </div>
                </div>

                <Row md={3} className="g-1">
                    {order.reelsForOrderResponseList !== null ? order.reelsForOrderResponseList.map(o =>
                        <div key={o.id}>
                            {<OrderForm order={o} nameOfItem="reel"/>}
                        </div>) : null}
                    {order.rodsForOrderResponseList !== null ? order.rodsForOrderResponseList.map(o =>
                        <div key={o.id}>
                            {<OrderForm order={o} nameOfItem="rod"/>}
                        </div>) : null}
                </Row>
            </div>
    );
};

export default OrderFormList;