import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useContext, useState} from "react";
import {AuthContext} from "../context/context";
import {useNavigate} from "react-router-dom";
import AuthService from "../API/AuthService";
import {getAuthToken, setAuthHeader} from "../API/axios_helper";

function Login() {
    const navigate = useNavigate()
    const {setIsAuth} = useContext(AuthContext)
    const [validated, setValidated] = useState(false);
    const [authRequest,setAuthRequest] = useState({})

    const handleInput = (event) =>{
        setAuthRequest({...authRequest,[event.target.name]: event.target.value})
    }

    const login = (e) => {
       AuthService.auth({authRequest}).then(() => {
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
        event.preventDefault()
        if (form.checkValidity()===false){
            event.stopPropagation();
        }
        setValidated(true);
        login()
    }
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}  style={{ margin:"2% 35% 0 35%", width:'30%'}} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control  name="email"
                               required
                               onChange={handleInput}
                               placeholder="Введите email" />
                <Form.Control.Feedback type="invalid">
                    Заполните поле!
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password"
                              name="password"
                              required
                              onChange={handleInput} placeholder="Пароль" />
                <Form.Control.Feedback type="invalid">
                    Заполните поле!
                </Form.Control.Feedback>
            </Form.Group>
            <Button  variant="primary" type="submit">
                Войти
            </Button>
        </Form>
    );
}

export default Login;