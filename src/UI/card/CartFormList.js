import Row from "react-bootstrap/Row";
import ReelCard from "./ReelCard";
import React from "react";
import CartForm from "./CartForm";

const CartFormList = ({cart}) => {
    if (cart.length === 0) {
        return <h1> Товары не найдены!</h1>;
    }
    return (
        <div>
            <Row md={3} className="g-1">
                {cart.reelForCartResponseList !== null ? cart.reelForCartResponseList.map(cartItem =>
                    <div key={cart.id}>
                        {<CartForm cartItem={cartItem} nameOfItem="reel"/>}
                    </div>) : null}
                {cart.rodForCartResponseList !== null ? cart.rodForCartResponseList.map(cartItem =>
                    <div key={cart.id}>
                        {<CartForm cartItem={cartItem} nameOfItem="rod"/>}
                    </div>) : null}
            </Row>
        </div>
    );
};
export default CartFormList;