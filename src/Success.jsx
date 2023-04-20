const Success = () => {
    return (
        <div
        style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                maxWidth: "150",

            }}
            >
                <img
                style={{
                    width: 75
                }}
                src="https://dw-images.weber.com/base/weber-logo.svg?auto=compress,format" alt="" />
                <button
                    style={{
                        border: "none",
                        width: "300",
                        fontSize: 20,
                        borderRadius: 5,
                        padding: "10px",
                        backgroundColor: "teal",
                        color: "white",
                        fontWeight: "100",
                    }}
                    >
                    Successful.
                </button>
                <p
                style={{
                    width: 250,
                    textAlign: "center"
                }}
                >Your order is being prepared. Thanks for chosing Weber Shop.</p>
            </div>
    </div>
    )
  }

export default Success