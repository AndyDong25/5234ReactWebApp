import React from "react";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const ViewOrder = () => {

    let title = "Review Order";

    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate('/purchase/confirmation', { state: {order:location.state.order}});
    }

    return (
        <div>
            <h1>
                {title}
            </h1>
            <h2>
                Product List
            </h2>
            <ul>
                <li> Product 1 X {location.state.order.buyQuantity[0]}</li>
                <li> Product 2 X {location.state.order.buyQuantity[1]}</li>
                <li> Product 3 X {location.state.order.buyQuantity[2]}</li>
                <li> Product 4 X {location.state.order.buyQuantity[3]}</li>
                <li> Product 5 X {location.state.order.buyQuantity[4]}</li>
            </ul>
            <h2>
                Payment Information
            </h2>
            <ul>
                <li> Credit Card Number: {location.state.order.creditCardNumber}</li>
                <li> Card Holder Name: {location.state.order.cardHolderName}</li>
                <li> Expiration Date: {location.state.order.expirationDate}</li>
                <li> CVV: {location.state.order.cvv}</li>
            </ul>
            <h2>
                Shipping Information
            </h2>
            <ul>
                <li> Name: {location.state.order.shippingName}</li>
                <li> Address Line 1: {location.state.order.address1}</li>
                <li> Address Line 2: {location.state.order.address2}</li>
                <li> City: {location.state.order.city}</li>
                <li> State: {location.state.order.state}</li>
                <li> Zip: {location.state.order.zip}</li>
            </ul>
            <button onClick={handleClick} className='button'>Confirm your order</button>
        </div>
    )
}

export default ViewOrder;