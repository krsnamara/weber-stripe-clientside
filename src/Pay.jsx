import StripeCheckout from "react-stripe-checkout";

const Pay = () => {
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
            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        paddidng: "20px",
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
    )
}