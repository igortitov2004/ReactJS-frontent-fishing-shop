import Dropdown from 'react-bootstrap/Dropdown';
import {SplitButton} from "react-bootstrap";
import {getRole, getUserName} from "../../API/axios_helper";
import {Link, useNavigate} from "react-router-dom";

function ProfileButton() {
    const navigate = useNavigate()
    return (
        <div className="mx-1">
            <SplitButton
                align={{ lg: 'start' }}
                title="Профиль"
                id="dropdown-menu-align-responsive-2"
            >
                <h6 className="mx-3" style={{color:"green"}}>Логин: {getUserName()}</h6>
                {getRole()==="USER" ?  <Dropdown.Item eventKey="1" onClick={()=>navigate('/orders')}>Заказы</Dropdown.Item> : <></>}

                <Dropdown.Item eventKey="2" >
                    <Link  to="/changePass" className="nav-link">Изменение пароля</Link>
                </Dropdown.Item>
            </SplitButton>
        </div>
    );
}

export default ProfileButton;