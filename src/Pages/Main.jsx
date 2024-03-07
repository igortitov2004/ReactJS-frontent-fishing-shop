import React from 'react';
import Card from "react-bootstrap/Card";
import solo from '../images/solo.jpg';
import ReelCreateForm from "../UI/forms/ReelCreateForm";
import Slides from "../UI/Slides";
import ImageRef from "../UI/ImageRef";
import Contacts from "../UI/Contacts";
const Main = () => {

    return (
        <div className="d-flex" style={{height:"41rem"}}>
            <Contacts/>
            <div style={{ margin:"2% 30% 0 15%", width:'100%',textAlign:"center"}} >
                <Slides style={{alignContent:'center'}}/>

                {/*<Card.Img variant="top" src={solo}*/}
                {/*          style={{ marginTop:"3px",width: '45rem',height:'35rem',border:'2px solid black',borderRadius:'50%'}} />*/}
            </div>
        </div>

    );
};
export default Main;