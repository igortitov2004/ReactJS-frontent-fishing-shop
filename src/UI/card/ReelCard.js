import React, {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import {Link, useNavigate} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import ReelsService from "../../API/ReelService";
import Form from "react-bootstrap/Form";
import {getRole} from "../../API/axios_helper";
import ReelCartService from "../../API/ReelCartService";
import async from "async";

const ReelCard = ({card}) => {
    const navigate = useNavigate();
    const editReelUrl = "/editReel/" + card.id
    const id = card.id;
    const [reelCartRequest, setReelCartRequest] = useState({
        "reelId": id
    })

    // const [isClicked,setIsClicked] = useState(false)
    const deleteReel = async (e) => {
        const response = await ReelsService.deleteById({id})
        console.log(response)
        navigate('/reels')
    }

    const createReelCart = async (e) => {
        e.preventDefault()
        console.log(reelCartRequest)
        ReelCartService.create(reelCartRequest).then(r => console.log(r))
    }
    return (
        <div className="d-flex">
            <Card className="ms-3 my-2" style={{width: '36rem', height: '18rem'}}>
                <div className="d-flex">
                    <Card.Img variant="top" src={card.link} style={{
                        width: '18rem',
                        height: '17.95rem',
                        border: '2px solid black',
                        borderRadius: '3px'
                    }}/>
                    <div className="mx-2">
                        <Card.Body>
                            <Card.Title className="mx-3">{card.name}</Card.Title>
                            <Card.Body>
                                <Card.Text>Стоимость: {card.price} BYN</Card.Text>
                                <Card.Text>Тип: {card.type.type}</Card.Text>
                                <span>Производитель: {card.manufacturer.name}</span>
                            </Card.Body>
                            {getRole() === "ADMIN" ?
                                <div className="d-flex">
                                    <Form onSubmit={deleteReel}>
                                        <button type="submit" className="mx-2  btn btn-outline-danger" >Удалить</button>
                                    </Form>
                                    <button className="btn btn-outline-primary" >
                                        <Link to={editReelUrl} className="nav-link">Изменить</Link>
                                    </button>
                                </div> : getRole() === "USER" ?
                                    <Form onSubmit={createReelCart}>
                                        <Button type="submit" className="mx-2" variant="warning">В корзину</Button>
                                    </Form> : console.log()
                            }
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ReelCard;