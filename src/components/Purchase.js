import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Purchase() {
    
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], creditCardNumber: '', expirationDate: '', cvv: '',
        cardHolderName: '', address1: '', address2: '', city: '', state: '', zip: '',
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const state = { order, setOrder };
        navigate('/purchase/paymentEntry', { state: state});
    }

    const handleClick = (e) => {
        const state = { order, setOrder };
        navigate('/purchase/paymentEntry', { state: state});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Product 1 </label>
                <input
                    type="number"
                    required
                    onChange={(e) =>
                        {order.buyQuantity[0] = e.target.value;}} 
                />
                <br/>
                <label>Product 2 </label>
                <input
                    type="number"
                    required
                    onChange={(e) =>
                        {order.buyQuantity[1] = e.target.value;}} 
                />
                <br/>
                <label>Product 3 </label>
                <input
                    type="number"
                    required
                    onChange={(e) =>
                        {order.buyQuantity[2] = e.target.value;}} 
                />
                <br/>
                <button onClick={handleClick} className='button'>Pay</button>
            </form>
        </div>
    )
}

export default Purchase;