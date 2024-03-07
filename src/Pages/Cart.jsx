import React, {useEffect, useState} from 'react';
import CartService from "../API/CartService";
import {Button} from "react-bootstrap";
import ManufacturerService from "../API/ManufacturerService";
import CartFormList from "../UI/card/CartFormList";
import Form from "react-bootstrap/Form";
import OrderService from "../API/OrderService";
import CreateOrder from "../UI/modals/CreateOrder";

const Cart = () => {
    const [cart,setCart] = useState({
        "reelForCartResponseList" : [],
        "rodForCartResponseList":[],
        "totalPrice" : 0
    })
    const [orderRequest,setOrderRequest] = useState({})
    const [isOrderClicked,setIsOrderClicked] = useState(false)

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    async function fetchCart() {
        setCart(await CartService.getAll())
    }
    useEffect(()=>{
        fetchCart().then(r => console.log(r))
    },[])

    const createOrder = (event) =>{
        setIsOrderClicked(true)
    }




    return (
        cart.totalPrice===0 ? <h1 style={{textAlign:"center"}}>Корзина пуста</h1>:
                <div>
                    <div className="d-flex m-1">
                        <h6 className="my-2 ms-2 me-3">Общая стоимость: {cart.totalPrice}</h6>
                        <Form>
                            <Button onClick={handleShow}>Заказать</Button>
                        </Form>
                    </div>
                    <CreateOrder show={show} onHide={()=>setShow(false)}/>

                    <CartFormList cart={cart}/>
                </div>
    );
};

export default Cart;