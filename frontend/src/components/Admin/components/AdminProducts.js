import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('admin');
		if(!auth){
			navigate("/")
		}
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }
    // console.warn("products", products);

    const deleteproduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        })
        result = await result.json()
        if (result) {
            getProducts()
        }

    };


    const searchhandler = async(e)=>{
       
         let key =e.target.value;
         if(key){
             let result =await fetch(`http://localhost:5000/search/${key}`);
             result= await  result.json();
             if(result){
                setProducts(result)
             }

         }
         else
         {
            getProducts();

         }
    }
    return (
        <div className="container mt-2">
            <h1 style={{ color: "purple" }}><u><b>Product List</b></u></h1>

            <input type="text" onChange={searchhandler} className="mb-4 mt-4 form-control container"  style={{width:'400px'}} placeholder="search product" />
            <h5 className="nav-item dropdown mb-3 mt-3">
                <select className="btn  container dropdown-toggle d-flex justify-content-end" style={{ width: '200px', border: "1px solid black" }}
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

            

            <div className="row row-cols-2">

                <table className="producttable container">
                    <tr className="producttable">
                        <th>Sr. No.</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Product Description</th>
                        <th>Product Price (Rs.)</th>
                        <th>Operation</th>
                    </tr>
                    {

                        products.length>0 ? products.filter(item => !selectedCategory || item.category === selectedCategory).map((item, index) =>
                            <tr>
                                <td>
                                    <h5 className="card-title">{index + 1}</h5>
                                </td>
                                <td>
                                    <img src={item.imagelink} style={{ width: '80px' }} alt="Product Image" />
                                </td>
                                <td>
                                    <p className="card-title">{item.name}</p>
                                </td>
                                <td>
                                    <p className="card-title">{item.category}</p>
                                </td>
                                <td>
                                    <p class="card-text">{item.description}</p>
                                </td>
                                <td>
                                    <p className="card-title">{item.price}</p>
                                </td>
                                <td>
                                    <button className="form-control" style={{color:"red"}} onClick={() => deleteproduct(item._id)}>Delete</button>
                                    <Link className="form-control" style={{color:"green"}} to={`/admin/updateproduct/${item._id}`}>Update</Link>
                                </td>

                            </tr>
                        ) : <tr>
                            <th colSpan={6}>
                            No Product's Match
                            </th>
                            </tr>

                    }
                </table>
                    {/* Rahul B */}

            </div>
        </div>
    )
}
export default AdminProducts;