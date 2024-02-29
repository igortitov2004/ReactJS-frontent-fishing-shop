import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ManufacturerService from "../../API/ManufacturerService";
import TypeOfReelService from "../../API/TypeOfReelService";
import ReelsService from "../../API/ReelService";
import {useNavigate} from "react-router-dom";

function FormExample() {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    const [manufacturers,setManufacturers] = useState([])
    const [types,setTypes] = useState([])
    const [errResponse,setErrResponse] = useState([])

    const [reel,setReel] = useState({
        name:'',
        price: '',
        typeId: '',
        manufacturerId: '',
        link: ''
    })

    async function fetchManufacturers() {
        const response = await ManufacturerService.getAll()
        setManufacturers(response)
    }

    async function fetchTypesOfReels() {
        const response = await TypeOfReelService.getAll()
        setTypes(response)
    }

    useEffect( () => {
        fetchTypesOfReels().then(r =>console.log(r))
       fetchManufacturers().then(r => console.log(r))
    }, []);


    const handleInput = (event) =>{
        setReel({...reel,[event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity()===false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            addNewReel()
            navigate("/reels")
        }
        setValidated(true);

    }


    function addNewReel(){
       const response = ReelsService.create({reel})
        if(response.status === 400){
            setErrResponse(response.data)
        }
        console.log(response)
    }

    return (
        <Form noValidate validated={validated}  onSubmit={handleSubmit} className="mx-3">
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>Название</Form.Label>
                    <Form.Control

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
                <Form.Group as={Col} md="2">
                    <Form.Label>Тип катушки</Form.Label>
                    <Form.Select required name="typeId"
                                 onChange={handleInput}>
                        <option disabled selected value="">Выберите</option>
                        {types.map(t=>
                            <option value={t.id}>{t.type}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Выберите производителя!
                    </Form.Control.Feedback>
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="3"  controlId="validationCustom02">
                    <Form.Label>Стоимость</Form.Label>
                    <Form.Control

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
                <Form.Group as={Col} md="2">
                    <Form.Label>Производитель</Form.Label>
                    <Form.Select required name="manufacturerId"
                                 onChange={handleInput}>
                        <option disabled selected value="">Выберите</option>
                        {manufacturers.map(m=>
                            <option value={m.id}>{m.name}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Выберите тип!
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
            </Row>
            <Button type="submit"  style={{alignSelf:"flex-start"}}>Добавить</Button>
        </Form>
    );
}

export default FormExample;