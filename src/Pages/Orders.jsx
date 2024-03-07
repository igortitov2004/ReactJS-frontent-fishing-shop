import React, {useEffect, useState} from 'react';
import OrderService from "../API/OrderService";
import OrderFormList from "../UI/card/OrderFormList";
import Row from "react-bootstrap/Row";

const Orders = () => {
    const [orders,setOrders] = useState([])


    useEffect(()=>{
        fetchOrders().then(r => console.log(r))
    },[])
    const fetchOrders = async (e) =>{
        setOrders(await OrderService.getAll())
    }
    return (
        <div>
            <Row md={1} className="g-1">
                {orders ? orders.map(order=><OrderFormList order={order}/>):<h1 style={{textAlign:"center"}}>Заказы отсутствуют</h1>}
            </Row>
        </div>
    );
};

export default Orders;