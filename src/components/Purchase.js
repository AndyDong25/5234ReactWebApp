import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./purchase.css";

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
            <h1> Our Products </h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td><table>
                                <tr><td><label>Banana | $0.50 each</label></td></tr>
                                <tr><td><img src = "https://images.heb.com/is/image/HEBGrocery/000377497" alt="banana" width="100" height ="100"></img></td></tr>
                                <tr><td><input
                                    type="number"
                                    required
                                    onChange={(e) =>
                                        {order.buyQuantity[0] = e.target.value;}} 
                                /></td></tr>
                            </table></td>
                            <td><table>
                            <tr><td><label>Apple | $1.00 each</label></td></tr>
                            <tr><td><img src="https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg" alt="apple" width="85" height ="100"></img></td></tr>
                            <tr><td><input
                                type="number"
                                required
                                onChange={(e) =>
                                    {order.buyQuantity[1] = e.target.value;}} 
                            /></td></tr>
                            </table></td>
                            <td><table>
                                <tr><td><label>Premium Apple | $1.50 each</label></td></tr>
                                <tr><td><img src="https://media.istockphoto.com/photos/apple-with-googly-eyes-on-white-picture-id611628746?k=20&m=611628746&s=170667a&w=0&h=VHJe7xPLJuUhDn1lQuz0ZAcKxVa2D3vscnMk7oFpkdk=" alt="Premium Apple" width="150" height ="100"></img></td></tr>
                                    <tr><td><input
                                        type="number"
                                        required
                                        onChange={(e) =>
                                            {order.buyQuantity[2] = e.target.value;}} 
                                    /></td></tr>
                            </table></td>  
                        </tr>
                </table>
                <button className='button'>Pay</button>
            </form>
        </div>
    )
}

export default Purchase;