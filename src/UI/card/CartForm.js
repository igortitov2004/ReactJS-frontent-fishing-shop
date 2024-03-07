import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import ReelsService from "../../API/ReelService";
import ReelCartService from "../../API/ReelCartService";
import Card from "react-bootstrap/Card";
import {getRole} from "../../API/axios_helper";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ReelCard from "./ReelCard";
import RodCartService from "../../API/RodCartService";
const CartForm = ({cartItem,nameOfItem}) => {
    const navigate = useNavigate();

    const deleteCartItem = (e) =>{

        if(nameOfItem.includes("reel")){
             ReelCartService.delete(cartItem.id).then(r => console.log(r))
        }else{
             RodCartService.delete(cartItem.id).then(r=>console.log(r))
        }
    }
    const increaseAmount = (e) =>{
        if(nameOfItem.includes("reel")){
            ReelCartService.increaseAmount(cartItem.id).then(r => console.log(r))
        }else{
            RodCartService.increaseAmount(cartItem.id).then(r=>console.log(r))
        }
    }

    return (
            <Card className="ms-2 m-3" style={{width: '29rem', height: '9rem'}}>
                {nameOfItem.includes('reel') ?
                    <div className="d-flex">
                        <Card.Img variant="top" src={cartItem.reel.link} style={{
                            width: '9rem',
                            height: '8.95rem',
                            border: '2px solid black',
                            borderRadius: '3px'
                        }}/>
                        <div className="mx-2">
                            <Card.Body>
                                <h6>{cartItem.reel.name}</h6>
                                <span>Стоимость: {cartItem.reel.price} BYN</span> <br/>
                                <span>Производитель: {cartItem.reel.manufacturer.name}</span><br/>
                                <div className="d-flex">
                                    <span>Количество: {cartItem.amount}</span>
                                    <Form onSubmit={increaseAmount}>
                                        <button type="submit" style={{border:"none",backgroundColor:"white"}} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="blue" className="bi bi-x-circle" viewBox="0 0 16 16"
                                                 style={{transform:"rotate(45deg)",marginBottom:"5px"}}>
                                                <path
                                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                                                <path
                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                                            </svg>
                                        </button>
                                    </Form>
                                </div>

                            </Card.Body>
                        </div>
                    </div> :
                    <div className="d-flex">
                        <Card.Img variant="top" src={cartItem.rod.link} style={{
                            width: '9rem',
                            height: '8.95rem',
                            border: '2px solid black',
                            borderRadius: '3px'
                        }}/>
                        <div className="mx-2">
                            <Card.Body>
                                <h6>{cartItem.rod.name}</h6>
                                <span>Стоимость: {cartItem.rod.price} BYN</span> <br/>
                                <span>Производитель: {cartItem.rod.manufacturer.name}</span><br/>
                                <div className="d-flex">
                                    <span>Количество: {cartItem.amount}</span>
                                    <Form onSubmit={increaseAmount}>
                                        <button type="submit" style={{border:"none",backgroundColor:"white"}} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="blue" className="bi bi-x-circle" viewBox="0 0 16 16"
                                                 style={{transform:"rotate(45deg)",marginBottom:"5px"}}>
                                                <path
                                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                                                <path
                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                                            </svg>
                                        </button>
                                    </Form>
                                </div>
                            </Card.Body>

                        </div>

                    </div>}
                <Form onSubmit={deleteCartItem}>
                    <button type="submit" className="btn btn-outline-danger" style={{position:"absolute",top:"2px",right:"2px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-trash3" viewBox="0 0 16 16" >
                            <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></path>
                        </svg>
                    </button>
                </Form>
            </Card>
    );
};
export default CartForm;