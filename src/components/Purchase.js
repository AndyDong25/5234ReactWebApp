import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Purchase() {
    
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], creditCardNumber: '', expirationDate: '', cvv: '',
        cardHolderName: '', shippingName: '', address1: '', address2: '', city: '', state: '', zip: '',
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/paymentEntry', { state: {order:order}});
    }

    return (
        <div>
            <h1> Available Products </h1>
            <form onSubmit={handleSubmit}>
                <label>Banana: 0.5$</label>
                <img src = "https://images.heb.com/is/image/HEBGrocery/000377497" alt="banana" width="100" height ="100"></img>
                <input
                    type="number"
                    required
                    onChange={(e) =>
                        {order.buyQuantity[0] = e.target.value;}} 
                />
                <br/>
                <label>Apple: 1$</label>
                <img src = "https://media.istockphoto.com/photos/apple-with-googly-eyes-on-white-picture-id611628746?" alt="banana" width="100" height ="100"></img>
                <input
                    type="number"
                    required
                    onChange={(e) =>
                        {order.buyQuantity[1] = e.target.value;}} 
                />
                <br/>
                <label>Apple Watch Ultra: 799$</label>
                <input
                    type="number"
                    required
                    onChange={(e) =>
                        {order.buyQuantity[2] = e.target.value;}} 
                />
                <br/>
                <button className='button'>Pay</button>
            </form>
        </div>
    )
}

export default Purchase;