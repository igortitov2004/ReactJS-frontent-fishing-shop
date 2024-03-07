import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ManufacturerService from "../../API/ManufacturerService";
import ReelsService from "../../API/ReelService";
import {useNavigate, useParams} from "react-router-dom";

function FormExample() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const [validated, setValidated] = useState(false);
    const [manufacturers,setManufacturers] = useState([])
    const [reel,setReel] = useState({
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
    async function fetchReel() {
        const response = await ReelsService.getById({id})
        setReel(response)

    }
    useEffect( () => {
        fetchReel().then(r=>console.log(r))
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
            editReel()
            navigate('/reels')
        }
        setValidated(true);

    }
    function editReel(){
        let mId = '';
        reel.manufacturerId===undefined ? mId=reel.manufacturer.id : mId=reel.manufacturerId
        console.log(reel)
        const request = {
            id: reel.id,
            name: reel.name,
            price: reel.price,
            manufacturerId: mId,
            link: reel.link
        }
        // console.log(request)
        const response = ReelsService.edit({request}).then(r => console.log(r))
        console.log(response)
    }

    return (
        <Form noValidate validated={validated}  onSubmit={handleSubmit} className="mx-3">
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>Название</Form.Label>
                    <Form.Control
                        value={reel.name}
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
                        value={reel.price}
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
                        {/*{manufacturers.filter(m => m.id === reel.manufacturerId).map(m =>*/}
                        {/*    <option value={m.id}>{m.name}</option>*/}
                        {/*)}*/}
                        <option  value={reel.manufacturer.id}>{reel.manufacturer.name}</option>
                        {manufacturers.filter(m => m.id !== reel.manufacturer.id).map(m=>
                            <option value={m.id}>{m.name}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Выберите тип!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit"  style={{alignSelf:"flex-start"}}>Сохранить</Button>
        </Form>
    );
}
export default FormExample;