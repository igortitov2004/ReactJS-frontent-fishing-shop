import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import {Link, useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import ManufacturerService from "../../API/ManufacturerService";
import TypeOfReelService from "../../API/TypeOfReelService";
import TypeOfRodService from "../../API/TypeOfRodService";

const ManufacturerAndTypesCard = ({title, props, name}) => {
    const navigate = useNavigate();
    const [isClickedCreate, setIsClickedCreate] = useState(false);
    const [isClickedEdit, setIsClickedEdit] = useState(false);
    const [item, setItem] = useState({})
    const [validated, setValidated] = useState(false);


    function setClickCreate() {
        setIsClickedCreate(true)
        setIsClickedEdit(false)
    }
    const setClickEdit = (event) =>{
        setIsClickedEdit(true)
        setIsClickedCreate(false)
        if (name.includes("type")){
            setItem({...item,'id': event.target.id,'type':event.target.title})
        }else{
            setItem({...item,'id': event.target.id,'name':event.target.title})
        }
        console.log(item)

    }

    const handleInput = (event) => {
        setItem({...item, [event.target.name]: event.target.value})
    }
    function editManufacturer() {
        const response = ManufacturerService.edit({item})
        console.log(response)
    }

    function editTypeOfReel() {
        const response = TypeOfReelService.edit({item})
        console.log(response)
    }

    function editTypeOfRod() {
        const response = TypeOfRodService.edit({item})
        console.log(response)
    }
    function createManufacturer() {
        const response = ManufacturerService.create({item})
        console.log(response)
    }

    function createTypeOfReel() {
        const response = TypeOfReelService.create({item})
        console.log(response)
    }

    function createTypeOfRod() {
        const response = TypeOfRodService.create({item})
        console.log(response)
    }

    const handleSubmitCreate = (event) => {
        const form = event.currentTarget;
        // event.preventDefault();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (name === "typeOfReel") {
                createTypeOfReel()
            } else if (name === "typeOfRod") {
                createTypeOfRod()
            } else {
                createManufacturer()
            }
            navigate("/manufAndTypes")
        }
        setValidated(true);
    }
    const handleSubmitEdit = (event) => {
        console.log({item})
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            console.log(item)
            if (name === "typeOfReel") {
                editTypeOfReel()
            } else if (name === "typeOfRod") {
                editTypeOfRod()
            } else {
                editManufacturer()
            }
            navigate("/manufAndTypes")
        }
        setValidated(true);
    }
    return (
        <div style={{width: '18rem', marginLeft: "10%", marginTop: "3%"}}>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title style={{textAlign: "center"}}>{title}</Card.Title>
                    <Card.Text className="mx-3">
                        {props.map(p =>
                            <Nav className="me-auto">
                            <Card.Link id={p.id} title={p.name} onClick={setClickEdit}  style={{textDecoration:"none"}}> {p.name}</Card.Link>
                            </Nav>
                        )}
                        {props.map(p =>
                            <Nav className="me-auto">
                            <Card.Link id={p.id} title={p.type} onClick={setClickEdit} style={{textDecoration:"none"}}> {p.type}</Card.Link>
                            </Nav>
                        )}
                    </Card.Text>
                    <Nav className="me-auto">
                        <Card.Link onClick={setClickCreate} className="nav-link" style={{color:"green"}}>Добавить</Card.Link>
                    </Nav>
                </Card.Body>
            </Card>
            {isClickedCreate ?
                <Form noValidate validated={validated} onSubmit={handleSubmitCreate}
                      className="my-2" style={{border: "1px solid blue", borderRadius: "5px"}}>
                    <div className="mx-2">
                        {name.includes("type") ?
                            <div>
                                <Form.Label>Добавление типа</Form.Label>
                                <Form.Control
                                    name="type"
                                    onChange={handleInput}
                                    required
                                    type="text"
                                    placeholder="Название"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Заполните поле!
                                </Form.Control.Feedback></div>
                            : <div>
                                <Form.Label>Добавление производителя</Form.Label>
                                <Form.Control
                                    name="name"
                                    onChange={handleInput}
                                    required
                                    type="text"
                                    placeholder="Название"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Заполните поле!
                                </Form.Control.Feedback>
                            </div>}
                    </div>
                    <Button type="submit" className="m-2">Сохранить</Button>
                </Form>
                : isClickedEdit ? <Form noValidate validated={validated} onSubmit={handleSubmitEdit}
                        className="my-2" style={{border: "1px solid blue", borderRadius: "5px"}}>
                    <div className="mx-2">
                        {name.includes("type") ?
                            <div>
                                <Form.Label>Изменение типа</Form.Label>
                                <Form.Control
                                    name="type"
                                    onChange={handleInput}
                                    required
                                    type="text"
                                    placeholder={item.type}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Заполните поле!
                                </Form.Control.Feedback></div>
                            : <div>
                                <Form.Label>Изменение производителя</Form.Label>
                                <Form.Control
                                    name="name"
                                    onChange={handleInput}
                                    required
                                    type="text"
                                    placeholder={item.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Заполните поле!
                                </Form.Control.Feedback>
                            </div>
                        }
                    </div>
                    <Button type="submit" className="m-2">Сохранить</Button>
                </Form> : console.log()}
        </div>
    );
};
export default ManufacturerAndTypesCard;