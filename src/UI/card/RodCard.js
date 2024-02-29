import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../../images/img.jpg';
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import React from "react";

import RodsService from "../../API/RodsService";

const RodCard = ({card}) =>{
    const editRodUrl = "/editRod/"+card.id
    const id = card.id;
    async function deleteRod() {
        const response = await RodsService.deleteById({id})
        console.log(response)
        // navigate('/reels')

    }
    return (
            <div className="d-flex">
                <Card className="mx-4 my-2" style={{ width: '40rem',height:'23rem'}}>
                    <div className="d-flex">
                        <Card.Img variant="top" src={card.link} style={{ width: '23rem',height:'22.95rem',border:'2px solid black',borderRadius:'3px'}} />
                        <div className="mx-3">
                            <Card.Body>
                                <Card.Title className="mx-3">{card.name}</Card.Title>
                                <Card.Body>
                                    <p>Длина: {card.length} м</p>
                                    <p>Вес: {card.weight} г</p>
                                    <p>Тестовая нагрузка: {card.testLoad} г</p>
                                    <p>Стоимость: {card.price} BYN</p>
                                    <p>Тип: {card.type.type}</p>
                                    <p>Производитель: {card.manufacturer.name}</p>
                                </Card.Body>
                                <div className="d-flex">
                                    <Button className="mx-3" onClick={deleteRod}  variant="danger" >Удалить</Button>
                                    <Nav className="me-auto" style={{border:'2px solid blue',borderRadius:'7px'}}>
                                        <Link className="nav-link" to={editRodUrl}>Изменить</Link>
                                    </Nav>
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            </div>
    );
}

export default RodCard;