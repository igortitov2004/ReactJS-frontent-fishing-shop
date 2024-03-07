import Carousel from 'react-bootstrap/Carousel';
import solo from '../images/solo.jpg';
function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="dark" className="my-2" >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://gas-kvas.com/uploads/posts/2023-02/1676973171_gas-kvas-com-p-risunki-na-temu-shchuka-3.jpg"
                    alt="First slide"
                    style={{ marginTop:"3px",height:'25rem',border:'1px solid black',borderRadius:'5%',}}
                />
                <Carousel.Caption style={{backgroundColor:'white',borderRadius:'1%',opacity:'.8'}}>
                    <h4>Самые уловистые снасти</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.lovisoma.ru/uploads/category/51/menu_spinningi.jpg"
                    alt="First slide"
                    style={{ marginTop:"3px",height:'25rem',border:'1px solid black',borderRadius:'5%',}}
                />
                <Carousel.Caption style={{backgroundColor:'white',borderRadius:'1%',opacity:'.8'}}>
                    <h6>Товары от ведущих производителей</h6>
                    <h8>Kaida, Salmo, DRAGON, Akara, Mifine, AZOR</h8>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://a.d-cd.net/e1791ads-1920.jpg"
                    alt="First slide"
                    style={{ marginTop:"3px",height:'25rem',border:'1px solid black',borderRadius:'5%',}}
                />
                <Carousel.Caption style={{backgroundColor:'white',borderRadius:'1%',opacity:'.8'}}>
                    <h5>Доставка по всем городам Беларуси</h5>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default DarkVariantExample;