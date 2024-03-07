import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/context";
import AuthService from "../../API/AuthService";
import {getAuthToken} from "../../API/axios_helper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserService from "../../API/UserService";

function ChangePasswordForm() {
    const navigate = useNavigate()
    // const {isAuth,setIsAuth} = useContext(AuthContext)
    const [validated, setValidated] = useState(false);
    const [passRequest,setPassRequest] = useState({})
    // const [authRequest,setAuthRequest] = useState({})

    const handleInput = (event) =>{
        setPassRequest({...passRequest,[event.target.name]: event.target.value})
    }


    const changePass = (e) => {
        UserService.changePassword({passRequest}).then(r => console.log(r))
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault()
        if (form.checkValidity()===false){

            event.stopPropagation();
        }else{
            changePass()
            navigate('/main')

        }
        setValidated(true);
    }
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}  style={{ margin:"2% 35% 0 35%", width:'30%'}} >
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Текущий пароль</Form.Label>
                <Form.Control type="password"
                              name="currentPassword"
                              required
                              onChange={handleInput}  />
                <Form.Control.Feedback type="invalid">
                    Заполните поле!
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Новый пароль</Form.Label>
                <Form.Control type="password"
                              name="newPassword"
                              required
                              onChange={handleInput}  />
                <Form.Control.Feedback type="invalid">
                    Заполните поле!
                </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Подтвердите новый пароль</Form.Label>
                <Form.Control type="password"
                              name="confirmationPassword"
                              required
                              onChange={handleInput}  />
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

export default ChangePasswordForm;