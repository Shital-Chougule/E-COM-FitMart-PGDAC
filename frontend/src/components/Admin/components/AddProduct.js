
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddProduct = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");
	const [imagelink, setImagelink] = useState("");
	const [error, setError] = useState(false);
	const navigate = useNavigate()
	const [products, setProducts] = useState([]);
    
	useEffect(() => {
		const auth = localStorage.getItem('admin');
		if(!auth){
			navigate("/")
		}
	  }, [])



	const addProduct = async () => {

		console.warn(!name);
		if (!name || !price || !category || !description || !imagelink) {
			setError(true);
			return false;
		}


		console.log(name, price, category, description, imagelink);
		let result = await fetch('http://localhost:5000/add-product', {
			method: 'post',
			body: JSON.stringify({ name, price, category, description, imagelink }),
			headers: {
				'Content-Type': 'application/json'
			},
		});
		result = await result.json();
		console.warn(result);

		navigate('/admin/products')
	}




	return (
		<div className="container mb-5" >
			<div className="row mt-5">
				<div className="col-md-4 offset-md-4">
					<div className="card" >
						<div className="card-header text-center" >
							{/* <br />
							<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
								<path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
								<path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
							</svg>
							<br />
							//Rahul
							<br /> */}
							<h5>Add Product</h5>
						</div>
						<div className="card-body">
							<form>
								<div className="mb-3">

									<input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Enter Product Name" className="form-control" id="name" name="name" />
									{error && !name && <span className="invalid-input">Enter valid Name</span>}
								</div>
								<div className="mb-3">

									<input type="number" onChange={(e) => { setPrice(e.target.value) }} placeholder="Enter Product Price" className="form-control" id="price" name="price" />
									{error && !price && <span className="invalid-input">Enter valid price</span>}
								</div>
								<div className="mb-3">

									<select className="form-control"
										value={category}
										
										onChange={(e) => { setCategory(e.target.value) }}
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
									{/* <input type="text" onChange={(e) => { setCategory(e.target.value) }} placeholder="Enter Product category" className="form-control" id="category" name="category" /> */}
									{error && !category && <span className="invalid-input">Enter valid category</span>}
								</div>

								<div className="mb-3">
									<input type="text" onChange={(e) => { setDescription(e.target.value) }} placeholder="Enter Product description" className="form-control" id="description" name="description" />
									{error && !description && <span className="invalid-input">Enter valid description</span>}
								</div>
								<div className="mb-3">
									<input type="text" onChange={(e) => { setImagelink(e.target.value) }} placeholder="Enter Product image Url" className="form-control" id="imageUrl" name="imageUrl" />
									{error && !imagelink && <span className="invalid-input">Enter valid image Url</span>}
								</div>
								<div className="text-center">
									<button type="button" onClick={addProduct} className="btn btn-primary">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AddProduct;