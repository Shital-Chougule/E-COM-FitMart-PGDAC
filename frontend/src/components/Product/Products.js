import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products', {
            headers: {
                Authorization: JSON.parse(localStorage.getItem('token'))
            }
        });

        result = await result.json();
        setProducts(result);
    }
    console.warn("products", products);
    const searchhandler = async (e) => {

        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result)
            }

        }
        else {
            getProducts();

        }
    }

    return (
        <div className="container mt-2">
            <h1 style={{ color: "green" }}><u><b>Product List</b></u></h1>
            <div className="d-flex justify-content-between">
            <input type="text" onChange={searchhandler} className="  form-control m-auto " style={{ width: '400px' }} placeholder="search product" />
            <h5 className="nav-item dropdown mb-3 mt-3">
                <select className="btn container dropdown-toggle " style={{ width: '200px', border: "1px solid black" }}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">View Categories</option>
                    <option value="Rubber Mat">Rubber Mat</option>
                    <option value="MultiGym">MultiGym</option>
                    <option value="Dumbbells">Dumbbells</option>
                    <option value="Weight Plates">Weight Plates</option>
                    <option value="Gym Accessories">Gym Accessories</option>
                    <option value="Exercise Bike">Exercise Bike</option>
                    <option value="Treadmill">Treadmill</option>
                    <option value="Strength Equipment">Strength Equipment</option>
                </select>
            </h5>
            </div>
            <div className="row row-cols-2">

                {
                    products.filter(item => !selectedCategory || item.category === selectedCategory).map((item) =>

                        <div className="card m-4" style={{ width: '13rem' }} onClick={() => {
                            navigate(`/user/productpage/${item._id}`)
                        }}>

                            <img style={{ height: '13rem' }} src={item.imagelink} className="card-img-top" alt="Product Image" />
                            <div className="card-body">
                                <p className="card-title text-truncate">{item.name}</p>
                                <p class="card-text" style={{ color: "green" }}><b>{item.price} /- rs</b></p>

                                <Link className="btn btn-primary" to={`/user/productpage/${item._id}`}>
                                    View Details
                                </Link>
                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    )
}
export default Products;