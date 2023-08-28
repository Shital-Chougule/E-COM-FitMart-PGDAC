import Footer from "../../Footer";
// import Cart from "../components/Cart";
import CartItems from "../components/CartItems";



import Nav from "../components/Nav";

const CartPage = () => {
    return(
        <>
        <Nav />
        {/* <Cart /> */}
        <CartItems />
        <Footer />
        </>
    );
}

export default CartPage;