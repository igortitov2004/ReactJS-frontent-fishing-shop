import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ManufacturerService from "../../API/ManufacturerService";
import {useNavigate, useParams} from "react-router-dom";
import RodsService from "../../API/RodsService";

function FormExample() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const [validated, setValidated] = useState(false);
    const [manufacturers,setManufacturers] = useState([])
    const [rod,setRod] = useState({
        id: '',
        name:'',
        price: '',
        manufacturer: {
            id:'',
            name:''
        },
        link: ''
    })

    async function fetchManufacturers() {
        const response = await ManufacturerService.getAll()
        setManufacturers(response)

    }
    async function fetchRod() {
        const response = await RodsService.getById({id})
        setRod(response)

    }
    useEffect( () => {
        fetchRod().then(r=>console.log(r))
        fetchManufacturers().then(r => console.log(r))

    }, []);

    const handleInput = (event) =>{
        setRod({...rod,[event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity()===false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            editRod()
            navigate("/rods")
        }
        setValidated(true);

    }
    function editRod(){
        let mId = '';
        rod.manufacturerId===undefined ? mId=rod.manufacturer.id : mId=rod.manufacturerId
        console.log(rod)
        const request = {
            id: rod.id,
            name: rod.name,
            price: rod.price,
            manufacturerId: mId,
            link: rod.link
        }
        // console.log(request)
        const response = RodsService.edit({request}).then(r => console.log(r))
        console.log(response)
    }

    return (
        <Form noValidate validated={validated}  onSubmit={handleSubmit} className="mx-3">
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>Название</Form.Label>
                    <Form.Control
                        value={rod.name}
                        onChange={handleInput}
                        name="name"
                        required
                        type="text"
                        placeholder="Название"
                    />
                    <Form.Control.Feedback>Отлично!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Заполните поле!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3"  controlId="validationCustom02">
                    <Form.Label>Стоимость</Form.Label>
                    <Form.Control
                        value={rod.price}
                        onChange={handleInput}
                        name="price"
                        required
                        type="number"
                        placeholder="0"
                    />
                    <Form.Control.Feedback>Отлично!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Заполните поле!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Ссылка на изображение</Form.Label>
                    <Form.Control
                        onChange={handleInput}
                        name="link"
                        required
                        type="text"
                    />
                    <Form.Control.Feedback>Отлично!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Заполните поле!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="2">
                    <Form.Label>Производитель</Form.Label>
                    <Form.Select required
                                 name="manufacturerId"
                                 onChange={handleInput}
                    >
                        <option  value={rod.manufacturer.id}>{rod.manufacturer.name}</option>
                        {manufacturers.filter(m => m.id !== rod.manufacturer.id).map(m=>
                            <option value={m.id}>{m.name}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Выберите тип!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit"  style={{alignSelf:"flex-start"}}>Добавить</Button>
        </Form>
    );
}
export default FormExample;