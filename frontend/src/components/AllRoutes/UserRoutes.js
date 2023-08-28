
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "../User/Nav";
import Login from './components/User/Login';
import Register from './components/User/Register';
import Home from './components/User/Home';
import Products from './components/Product/Products';
import ProductPage from './components/Product/ProductPage';
import PrivateComponent from './components/PrivateComponent';
import Cart from './components/User/Cart';
import About from './components/User/About';

const UserRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route element={<PrivateComponent />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/productpage/:id' element={<ProductPage />} />
                        <Route path='/cart' element={<Cart />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default UserRoutes;