import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button, Image} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/context";
import {getAuthToken, getRole, setAuthHeader} from "../API/axios_helper";
import ProfileButton from "./button/ProfileButton";
import CartService from "../API/CartService";

function NavigBar() {
    const navigate = useNavigate()
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = ()=>{
        setAuthHeader(null)
        setIsAuth(false)
        localStorage.removeItem('auth')
        navigate("/main")
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Card.Img src="https://sun9-73.userapi.com/c841126/v841126282/2bcb5/9UvWXIHOLqY.jpg"
                      style={{marginLeft: '1%', width: '20%', border: '1px solid black', borderRadius: '15%'}}/>
            <Container>
                <Nav className="navbar-brand" style={{marginLeft: '5%'}}>
                    <Link to="/main" className="nav-link">Главная</Link>
                    <Nav className="me-auto">
                        <Link style={{marginLeft: '5%'}} to="/rods" className="nav-link">Удочки</Link>
                        <Link style={{marginLeft: '5%'}} to="/reels" className="nav-link">Катушки</Link>
                        {getRole()==="ADMIN" ? <Link style={{marginLeft: '5%'}} to="/manufAndTypes" className="nav-link">Производители и типы</Link> : console.log(getRole())}
                    </Nav>
                </Nav>

            </Container>

            <div className="position-absolute end-0 ">
                {isAuth ? getRole()==="USER" ?  <div className="d-flex">
                        <Button className="mx-1" onClick={()=>navigate('/cart')} variant="warning">Корзина</Button>
                        <ProfileButton />
                        <Button className="mx-1" onClick={logout} variant="danger">Выйти</Button>
                    </div>
                : <div className="d-flex">
                        <ProfileButton />
                        <Button className="mx-1" onClick={logout} variant="danger">Выйти</Button>
                    </div> : <><Button onClick={()=> navigate('/login')} >Вход</Button>
                    <Button onClick={()=>navigate('/register')} className="mx-3">Регистрация</Button>
                </>  }



            </div>
        </Navbar>
    );
}

export default NavigBar;