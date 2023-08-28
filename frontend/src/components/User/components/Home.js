import React from "react"
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
      getProducts();
  }, [])

  const getProducts = async () => {
      let result = await fetch('http://localhost:5000/products',{
          headers:{
              Authorization: JSON.parse(localStorage.getItem('token'))
          }
      });

      result = await result.json();
      setProducts(result);
    }
  return (

    <div>
      <>
      <Carousel />
      <div className="container ">
            <h3>Product List</h3>
            <div className="row row-cols-2">

                {
                    products.slice(0,5).map((item) =>
                    
                        <div className="card m-4" style={{ width: '13rem' }} onClick={()=>{
                            navigate(`/user/productpage/${item._id}`)
                        }}>
                            
                            <img style={{ height: '13rem' }} src={item.imagelink} className="card-img-top" alt="Product_Image" />
                            <div className="card-body">
                                <h5 className="card-title text-truncate">{item.name}</h5>
                                <p class="card-text">{item.price} /- rs</p>
                                
                            <Link className="btn btn-primary" to={`/user/productpage/${item._id}`}>
                                View Details
                            </Link>
                            </div>
                        </div>
                    )
                }

                {/* Rahul */}
            </div>
        </div>
      </>
      
      
    </div>

  )
}
export default Home;

