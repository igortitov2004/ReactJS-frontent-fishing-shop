import ListGroup from 'react-bootstrap/ListGroup';

function DefaultExample() {
    return (
        <div className="m-2">
            <div className="d-flex my-2" >
                <img src="https://user-life.com/uploads/posts/2019-06/1560957172_vk.png" style={{width:"47px",height:"41px"}}/>
                <h6 className="m-2">@f.shop.minsk</h6>
            </div>
            <div className="d-flex">
                <img src="https://emc86.ru/wp-content/uploads/2023/03/telegram.png" style={{width:"45px",height:"41px"}}/>
                <h6 className="m-2">@f.shop.minsk</h6>
            </div>
           <div className="d-flex my-2">
               <img src="https://www.tkchocolate.ru/upload/information_system_1/0/5/3/item_53/item_53.png" style={{width:"45px",height:"41px"}}/>
               <h6 className="m-2">+375331234567</h6>
           </div>


        </div>
    );
}

export default DefaultExample;