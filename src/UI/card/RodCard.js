import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../../images/img.jpg';
import Nav from "react-bootstrap/Nav";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";

import RodsService from "../../API/RodsService";
import Form from "react-bootstrap/Form";
import {getRole} from "../../API/axios_helper";
import ReelCartService from "../../API/ReelCartService";
import RodCartService from "../../API/RodCartService";

const RodCard = ({card}) =>{
    const editRodUrl = "/editRod/"+card.id
    const id = card.id;
    const navigate = useNavigate();
    const [rodCartRequest, setRodCartRequest] = useState({
        "rodId": id
    })
    async function deleteRod() {
        const response = await RodsService.deleteById({id})
        console.log(response)
        navigate('/rods')

    }

    const createRodCart = async (e) => {
        e.preventDefault()
        console.log(rodCartRequest)
        RodCartService.create(rodCartRequest).then(r => console.log(r))
    }
    return (
            <div className="d-flex">
                <Card className="ms-3 my-2" style={{ width: '36rem',height:'18rem'}}>
                    <div className="d-flex">
                        <Card.Img variant="top" src={card.link} style={{ width: '18rem',height:'17.95rem',border:'2px solid black',borderRadius:'3px'}} />
                        <div className="mx-3">
                            <Card.Body>
                                <Card.Title className="mx-3">{card.name}</Card.Title>
                                <Card.Body>
                                    <span>Длина: {card.length} м</span><br/>
                                    <span>Вес: {card.weight} г</span><br/>
                                    <span>Тестовая нагрузка: {card.testLoad} г</span><br/>
                                    <span>Стоимость: {card.price} BYN</span><br/>
                                    <span>Тип: {card.type.type}</span><br/>
                                    <span>Производитель: {card.manufacturer.name}</span><br/>
                                </Card.Body>
                                {getRole()==="ADMIN" ?
                                    <div className="d-flex">
                                        <Form onSubmit={deleteRod}>
                                            <button type="submit" className="mx-2 btn btn-outline-danger"  >Удалить</button>
                                        </Form>
                                        <button className="btn btn-outline-primary">
                                            <Link className="nav-link" to={editRodUrl}>Изменить</Link>
                                        </button>
                                    </div> : getRole()==="USER" ?
                                    <Form onSubmit={createRodCart}>
                                        <Button type="submit" className="mx-2" variant="warning" >В корзину</Button>
                                    </Form> : console.log()
                                }
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            </div>
    );
}

export default RodCard;