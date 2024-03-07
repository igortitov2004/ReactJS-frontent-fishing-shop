import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../context/context";
import AuthService from "../API/AuthService";
import {getAuthToken} from "../API/axios_helper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Registration() {
    const navigate = useNavigate()
    const {setIsAuth} = useContext(AuthContext)
    const [validated, setValidated] = useState(false);
    const [registerRequest,setRegisterRequest] = useState({})

    const handleInput = (event) =>{
        setRegisterRequest({...registerRequest,[event.target.name]: event.target.value})
    }
    const login = (event) =>{
        AuthService.register({registerRequest}).then(() => {
                if (getAuthToken() !== null) {
                    setIsAuth(true);
                    localStorage.setItem('auth', 'true')
                    navigate('/main')
                }
            }
        )

    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity()===false){
            event.stopPropagation();
        }else{
            login()
        }
        setValidated(true);

    }
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ margin:"2% 35% 0 35%", width:'30%'}} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control  name="email"
                               onChange={handleInput}
                               required
                               placeholder="Введите email" />
                <Form.Control.Feedback type="invalid">
                    Заполните поле!
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSurname">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control  name="surname"
                               required
                               onChange={handleInput}
                               placeholder="Введите фамилию" />
                <Form.Control.Feedback type="invalid">
                    Заполните поле!
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>Имя</Form.Label>
                <Form.Control  name="firstName"
                               required
                               onChange={handleInput}
                               placeholder="Введите имя" />
                <Form.Control.Feedback type="invalid">
                    Заполните поле!
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPatronymic">
                <Form.Label>Отчество</Form.Label>
                <Form.Control  name="patronymic"
                               required
                               onChange={handleInput}
                               placeholder="Введите отчество" />
                <Form.Control.Feedback type="invalid">
                    Заполните поле!
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" name="password"
                              required
                              onChange={handleInput} placeholder="Пароль" />
                <Form.Control.Feedback type="invalid">
                    Заполните поле!
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Войти
            </Button>
        </Form>
    );
}

export default Registration;