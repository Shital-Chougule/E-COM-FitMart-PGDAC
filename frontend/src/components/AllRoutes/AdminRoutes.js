
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Products from "../Product/Products";
import ProductPage from "../Product/ProductPage";
import AddProduct from "../Admin/AddProduct";
import AdminHome from "../Admin/AdminHome";
import AdminLogin from "../Admin/AdminLogin";
import AdminNav  from "../Admin/AdminNav"



const AdminRoutes = () => {
    return (
        <>
           <BrowserRouter>
        
        <AdminNav />
        <Routes>
          <Route element={<PrivateComponent />}>
            
            <Route path='/products' element={<Products />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/adminhome' element={<AdminHome />} />
            <Route path='/productpage/:id' element={<ProductPage />} />
            
          </Route>
          <Route path='/adminlogin' element={<AdminLogin />} />
          </Routes>
      </BrowserRouter>
        </>
    )
}
export default AdminRoutes;