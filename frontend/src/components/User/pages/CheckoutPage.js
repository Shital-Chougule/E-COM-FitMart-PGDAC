import React from "react";
import Footer from "../../Footer";
import Nav from "../components/Nav";
import AddressPayment from "../components/AddressPayment";
const CheckoutPage = () => {
    return (
        <>
            <Nav />
                <AddressPayment />
            <Footer />
        </>
    )
}
export default CheckoutPage;