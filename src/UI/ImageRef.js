import React from 'react';
import Card from "react-bootstrap/Card";
import {useNavigate} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const ImageRef = () => {
    const navigate = useNavigate();
    function ref() {
        navigate('/rods')
    }
    return (
        <div>
            <Card.Img alt="sadasd" onClick={ref} src="https://vyborok.com/wp-content/uploads/2021/02/na-glavnuyu.jpeg" style={{marginLeft:'10%',width: '40%',marginTop:'9%',border:'1px solid black',borderRadius:'15%'}}/>
        </div>
    );
};

export default ImageRef;