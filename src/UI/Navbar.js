import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button, Image} from "react-bootstrap";

import {useState} from "react";
import {Link} from "react-router-dom";

function NavigBar() {
    const [isReg, setIsReg] = useState(false);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/*<img src={logo} className="App-logo" alt="logo" width={50} height={50}/>*/}

                <Nav className="navbar-brand">
                    <Link to="/main" className="nav-link">Главная</Link>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/rods" className="nav-link">Удочки</Link>
                        <Link to="/reels" className="nav-link">Катушки</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <div className="position-absolute end-0 ">
                {isReg ? <Button className="mx-3">Профиль</Button> :
                    <><Button onClick={() => setIsReg(true)}>Вход</Button>
                        <Button className="mx-3">Регистрация</Button>
                    </>
                }
            </div>
        </Navbar>
    );
}

export default NavigBar;