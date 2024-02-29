import React from 'react';
import Card from "react-bootstrap/Card";
import {Link, useNavigate} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import ReelsService from "../../API/ReelService";

const ReelCard = ({card}) => {
    const editReelUrl = "/editReel/"+card.id
    const id = card.id;
    function refreshPage(){
        window.location.reload();
    }
    async function deleteReel() {
        const response = await ReelsService.deleteById({id})
        refreshPage()
        console.log(response)
        // navigate('/reels')

    }
    return (
        <div className="d-flex">
            <Card className="mx-4 my-2" style={{ width: '40rem',height:'20rem'}}>
                <div className="d-flex">
                    <Card.Img variant="top" src={card.link} style={{ width: '20rem',height:'19.95rem',border:'2px solid black',borderRadius:'3px'}} />
                    <div className="mx-3">
                        <Card.Body>
                            <Card.Title className="mx-3">{card.name}</Card.Title>
                            <Card.Body>
                                <p>Стоимость: {card.price} BYN</p>
                                <p>Тип: {card.type.type}</p>
                                <p>Производитель: {card.manufacturer.name}</p>
                            </Card.Body>
                            <div className="d-flex">
                                <Button className="mx-3" onClick={deleteReel} variant="danger" >Удалить</Button>
                                <Nav className="me-auto" style={{border:'2px solid blue',borderRadius:'7px'}}>
                                    <Link to={editReelUrl} className="nav-link">Изменить</Link>
                                </Nav>
                            </div>

                        </Card.Body>
                    </div>


                </div>

            </Card>
        </div>
    );
};

export default ReelCard;