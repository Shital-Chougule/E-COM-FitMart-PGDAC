import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
  const auth = localStorage.getItem('user');
  const [name, setName] = useState("");
  const [productId, setProductId] = useState('');
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imagelink, setImagelink] = useState("");

  const [error, setError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  // if(auth){
  //   const storedUser = JSON.parse(localStorage.getItem('user'));
  //   const userId = storedUser._id;
  // }  



  useEffect(() => {
    getProductDetails()
  }, [])
  const getProductDetails = async () => {
    console.warn(params)
    const response = await axios.get(`/product/${params.id}`)
    setProductId(params.id)
    setName(response.data.name)
    setPrice(response.data.price)
    setCategory(response.data.category)
    setDescription(response.data.description)
    setImagelink(response.data.imagelink)


  }

  const addToCart = async () => {

    // console.log(userId,productId,"jhgjhgjh");
    if(auth){
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const userId = storedUser._id;

    
    // const body = {
    //   u_id: userId,
    //    p_id: {
    //     name : name, price : price, imagelink : imagelink},
    //     quantity: "1"
    // }
    const body = {
      u_id: userId, p_id: productId, quantity: "1"
    }

    try {
      const response = await axios.post('/cart', body, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      if(response){
        toast.success('Added To Cart')
      }
      // console.log(response)
      // if(response && response.status === 200){
      //   navigate('/cart')
      // }
    } catch (error) {

    }
  }
  else{
    // toast.info('Login to add products in a Cart');
    navigate("/login")
  }  


  }

  return (

    <>

      <div className="container mt-3">

        <div className="row row-cols-4 ">

          <div className="card m-auto" style={{ width: '20rem' }}>
            <img className="card-img-top m-2" style={{ width: '17rem', height: '18rem' }} src={`${imagelink}`} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Category : </b>{category}</li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Description : </b>{description}</li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-end" style={{ color: 'green' }}><b>Price : Rs. {price}</b></li>
            </ul>
            <div className="card-body d-flex justify-content-between">
              <Link className="btn btn-primary card-link" to={`/user/product`}>Go Back</Link>
              {/* <Link className="btn btn-primary card-link" to={`/cart/${params.id}`}>Add to Cart</Link> */}
              <button className="btn btn-primary card-link" onClick={addToCart}>Add to Cart</button>

            </div>
          </div>
        </div>
      </div>
      <ToastContainer />



      {/* <h1 className="mt-3">ProductProfile</h1>
      <div className="container mt-3 mb-5" style={{ border: '1px solid black', width: 'fit-content', padding: '10px' }}>
        <table>
          <tr>
            <td>
              <div className="productprofile" >
                <img style={{ height: '300px', width: '300px', border: '1px solid black' }} src={`${imagelink}`}></img>
              </div>
            </td>
            <td style={{ width: '20px' }}>


            </td>
            <td style={{ maxWidth: '700px' }}>
              <tr><h2>{name}</h2></tr>
              <tr><b>Price</b> - {price}/-</tr>
              <tr>
                <p>
                  <b>Category -</b>
                  {category}
                </p>
              </tr>
              <tr>
                <p>
                  <b>Description -</b>
                  {description}
                </p>
              </tr>
              <tr><button type="button" className="btn btn-primary">Add to cart</button></tr>
            </td>
          </tr>
        </table>
      </div> */}


      {/* <section style={{ background: "skyblue" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light">
                <img src={`${imagelink}`}
                  style={{ borderTopLeftRadius: "15px", borderToprightRadius: "15px" }} className="img-fluid"
                  alt="Laptop" />
                <a href="#!">
                  <div className="mask"></div>
                </a>
              </div>
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <p><a href="#!" className="text-dark">{name}</a></p>
                    <p className="small text-muted">Product Name : {category}</p>
                  </div>

                </div>
              </div>
              <hr className="my-0" />
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between">
                  <p className="text-dark">{description}</p>
                </div>
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                  <a href="#!" className="text-dark fw-bold">Cancel</a>
                  <button type="button" className="btn btn-primary">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </>
  )
}
export default ProductPage;