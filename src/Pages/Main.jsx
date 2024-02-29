import React from 'react';
import Card from "react-bootstrap/Card";
import solo from '../images/solo.jpg';
import ReelCreateForm from "../UI/forms/ReelCreateForm";
const Main = () => {
    return (
        <div style={{textAlign:"center"}} >
            <h1>
                Добро пожаловать к папе!
            </h1>
            <Card.Img variant="top" src={solo}
                      style={{ marginTop:"3px",width: '45rem',height:'35rem',border:'2px solid black',borderRadius:'50%'}} />
        </div>
    );
};
export default Main;