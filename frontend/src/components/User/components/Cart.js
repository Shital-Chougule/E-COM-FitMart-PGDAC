import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cart = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imagelink, setImagelink] = useState("");
  // const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    getProductDetails()
  }, [])
  const getProductDetails = async () => {
    console.warn(params)
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name)
    setPrice(result.price)
    setImagelink(result.imagelink)
  }

  const [quantity, setQuantity] = useState(1);
    const productPrice = price;
    const total = (productPrice * quantity).toFixed(2);
  
    const incrementQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  return (
    <section className="mx-auto" style={{ backgroundColor: "#eee" }} >
      <div className="container h-100 py-5">
        
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>

            </div>

            <div className="card rounded-3 mb-4">
              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img width={350} height={350}
                      src={`${imagelink}`}
                      className="img-fluid rounded-3" alt="Cotton T-shirt"></img>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <p className="lead fw-normal mb-2">{name}
                    </p>
                    </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button onClick={decrementQuantity} className="btn btn-link px-2">
                  <i className="fas fa-minus"></i>
                </button>
                <h3>{quantity}</h3>
                <button onClick={incrementQuantity} className="btn btn-link px-2">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">{total}</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

            <div className="card mb-4">
              <div className="card-body p-4 d-flex flex-row">
                <div className="form-outline flex-fill">
                      <h4>Total Amount : {total}</h4>
                </div>
              </div>
            </div>
            {/* Rahul */}
            <div className="card">
              <div className="card-body">
                <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
export default Cart;