
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddressPayment = () => {
    const [address, setAddress] = useState("");
    const [products, setProducts] = useState([]);
    const [u_id, setUid] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUid(storedUser._id);
        setProducts(localStorage.getItem('cart'))
    })
    
    const placeOrder = async () => {
        localStorage.removeItem('cart')
        // console.log("Addressss",address)
        // console.log(products)
        // console.log("UserId",u_id)
        const body = {
            
            u_id: u_id, orderedproducts: products, address: address
          }

        try {
            const response = await axios.post('/placeorder',body,{
                headers: {
                  'Content-Type': 'application/json'
                },
              });
              if(response){
                
                console.log('Order created:', response.data);
              }
          } catch (error) {
            console.error('Error creating order:', error);
          }
        

    }


    return (
        <>
            <div className="card-body">
                <div className="container mb-5" >
                    <div className="row mt-5">
                        <div className="col-md-4 offset-md-4">
                            <div className="card" >
                                <form>
                                    <div className="mb-3 p-3">

                                        <input type="text" style={{height:'200px'}} onChange={(e) => { setAddress(e.target.value) }} placeholder="Enter Your Address" className="form-control" />

                                    </div>

                                    <div className="text-center mb-3">
                                        <button type="button" onClick={placeOrder} className="btn btn-primary">Place Order</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
</div>
            </>
            )
}
            export default AddressPayment;
