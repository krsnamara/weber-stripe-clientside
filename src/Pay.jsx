import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";

const KEY= "pk_test_51MyoJZHTY9W2xKV8w4FfAvkJQS6DMjkJE0BaEhdW8T4CQtQGaNmkgqX4wznyokf10PYa3zvalBvoKjEipw87TCVE00nr62FAQS"

const Pay = () => {
    const [stripeToken, setStripeToken] =useState(null)

    const onToken = (token) =>{
        setStripeToken(token);
    };

useEffect(()=>{
    const makeRequest = async () =>{
        try {
            const res = await axios.post(
                "http://localhost:3000/api/checkout/payment", {
                    tokenId:stripeToken.id,
                    amount: 2000,
                }
            );
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    stripeToken && makeRequest();
},[stripeToken]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <StripeCheckout 
                name="Weber Shop" 
                image="https://dw-images.weber.com/base/weber-logo.svg?auto=compress,format"
                billingAddress
                shippingAddress
                description=" Your total is $20"
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                    >
                    Pay Now
                </button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;