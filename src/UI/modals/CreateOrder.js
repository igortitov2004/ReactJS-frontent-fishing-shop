import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom";
import OrderService from "../../API/OrderService";

function CreateOrder({show,onHide}) {
    const navigate=useNavigate()
    const [validated, setValidated] = useState(false);
    const [orderRequest,setOrderRequest] = useState({})

    const handleInput = (event) =>{
        setOrderRequest({...orderRequest,[event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault()
        if (form.checkValidity()===false) {
            event.stopPropagation();
        }else{
            console.log(orderRequest)
            OrderService.create(orderRequest).then(()=>navigate('/orders'))
        }
        setValidated(true);

    }
    return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Оформление заказа</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Label className="mx-1">Адрес</Form.Label>
                        <Form.Control
                            value={orderRequest.address}
                            onChange={handleInput}
                            name="address"
                            required
                            type="text">
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Заполните поле!
                        </Form.Control.Feedback>
                        <Button type="submit" className="my-2">Оформить</Button>
                    </Form>
                </Modal.Body>
            </Modal>
    );
}
export default CreateOrder;