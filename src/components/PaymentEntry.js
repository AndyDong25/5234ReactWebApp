import React from "react";
import { useLocation } from "react-router-dom";

function PaymentEntry() {

    const { state } = useLocation()
    console.log(state);
    return (
        <div>
            <h1>
                product 1 {state.order}
            </h1>
        </div>
    )
}

export default PaymentEntry;