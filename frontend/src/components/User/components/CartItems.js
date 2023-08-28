import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
    const auth = localStorage.getItem('user');
    const [itemId, setItemId] = useState('');
    const [p_id, setP_Id] = useState('');
    const [quantity, setQuantity] = useState('');
    const [products, setProducts] = useState([])
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth) {
            navigate("/login")
        }
        getCartDetails()
    }, [])

    const getCartDetails = () => {
        // console.warn(params)
        // const response = await axios.get(`/cart/${params.id}`)
        // console.log(response)
        // setProducts(response.data)
        axios.get(`/cart/${params.id}`).then((res) => {
            console.log(res)
            setProducts(res.data.data)

        }).catch((err) => {
            console.log(err.response)
        })
    }
    const deleteItem = async (id) => {
        let result = await fetch(`http://localhost:5000/remove-cart-item/${id}`, {
            method: "Delete"
        })
        result = await result.json()
        if (result) {

            navigate(`/user/product`)
        }
        // if (result) {
        //     getCartDetails()
        // }

    };
    const placeorder =  () =>{
        console.log("hello")
        if(products[0]){
            console.log("Item in Cart")
            localStorage.setItem('cart',JSON.stringify(products))
            navigate('/checkout')
        }else{
            console.log("Cart is Empty")
            
        }
        console.log(products)
    }
    

    return (
        <div className="container mt-2">
            <h1 style={{ color: "green" }}><u><b>Cart Items</b></u></h1>


            <div className="row row-cols-2">

                <table className="producttable container mt-3 mb-5">
                    <tr className="producttable">
                        <th>Sr. No.</th>
                        <th>CartId</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Operation</th>
                    </tr>
                    {

                        Array.isArray(products) && products.length > 0 ? products.map((product, index) =>
                            <tr>
                                <td>
                                    <h5 className="card-title">{index + 1}</h5>
                                </td>
                                <td>
                                    <p className="card-title">{product._id}</p>
                                </td>
                                <td>
                                    <p className="card-title"><img style={{ width: 100, height: 100 }} src={product.pro_data.imagelink} /></p>
                                </td>
                                <td>
                                    <p className="card-title">{product.pro_data.name}</p>
                                </td>
                                <td>
                                    <p className="card-title">{product.pro_data.price}</p>
                                </td>
                                <td>
                                    <p className="card-title">{product.pro_data.description}</p>
                                </td>
                                <td>
                                    <p className="card-title">{product.pro_data.category}</p>
                                </td>


                                <td>
                                    <p class="card-text">{product.quantity}</p>
                                </td>

                                <td>
                                    <button className="form-control" style={{ color: "red" }} onClick={() => deleteItem(product._id)}>Delete</button>

                                </td>
                                {/* <td>
                            <button className="form-control" style={{color:"red"}} onClick={() => deleteUser(user._id)}>Delete</button>
                        </td> */}

                            </tr>
                        ) : <tr>
                            <th style={{ color: "red" }} colSpan={9}>
                                Cart is Empty
                            </th>
                        </tr>

                    }
                    <tr>
                        <th style={{ color: "red" }} colSpan={9}>
                            <button className="form-control" onClick={()=>{placeorder()}} style={{ color: "red" }} >Place Order</button>
                        </th>
                    </tr>
                </table>


            </div>
        </div>

    )
}
export default CartItems;