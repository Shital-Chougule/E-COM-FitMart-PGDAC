import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct=()=>{
    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[category,setCategory] = useState("");
    const[description,setDescription] = useState("");
    const[imagelink,setImagelink] = useState("");
	const[error,setError]= useState(false);
	const params = useParams();
    const navigate = useNavigate()
	
	
	
	
    useEffect(()=>{
		const auth = localStorage.getItem('admin');
		  if(!auth){
			  navigate("/")
		  }else{
        getProductDetails()}
    },[])
    const getProductDetails = async () => {
		console.warn(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setDescription(result.description)
        setImagelink(result.imagelink)
	}

    const updateProduct = async () =>{
        console.warn(name,price,category,description,imagelink)
        let result =await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,description,imagelink}),
            headers:{
                'Content-type':"application/JSON"
            }
        });
        result=await result.json()
        console.warn(result)
        navigate('/admin/products')
    }




    return(
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
							rahul
							<br />
							<br /> */}
							<h5>Update Product</h5>
						</div>
						<div className="card-body">
							<form action="regpage" method="post">
								<div className="mb-3">
									<p>Name</p>
									<input type="text" onChange={(e) => { setName(e.target.value) }} placeholder={`${name}`} className="form-control" id="name" name="name" />
									
								</div>
								<div className="mb-3">

									<p>Price</p>
									<input type="number" onChange={(e) => { setPrice(e.target.value) }} placeholder={`${price}`} className="form-control" id="price" name="price" />
								</div>
								<div className="mb-3">

									<p>Category</p>

									<select className="form-control"
										value={category}
										
										onChange={(e) => { setCategory(e.target.value) }}
									>
										<option value="">{category}</option>
										<option value="Rubber Mat">Rubber Mat</option>
										<option value="MultiGym">MultiGym</option>
										<option value="Dumbbells">Dumbbells</option>
										<option value="Weight Plates">Weight Plates</option>
										<option value="Gym Accessories">Gym Accessories</option>
										<option value="Exercise Bike">Exercise Bike</option>
										<option value="Treadmill">Treadmill</option>
										<option value="Strength Equipment">Strength Equipment</option>
									</select>
									{/* <input type="text" onChange={(e) => { setCategory(e.target.value) }} placeholder={`${category}`} className="form-control" id="category" name="category" /> */}
								</div>
							
								<div className="mb-3">
									<p>Description</p>
									<input type="text" onChange={(e) => { setDescription(e.target.value) }} placeholder={`${description}`} className="form-control" id="description" name="description" />
								</div>
								<div className="mb-3">
									<p>Image Link</p>
									<input type="text" onChange={(e) => { setImagelink(e.target.value) }} placeholder={`${imagelink}`} className="form-control" id="imageUrl" name="imageUrl" />
								</div>
								<div className="text-center">
									<button type="button" onClick={updateProduct} className="btn btn-primary">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
export default UpdateProduct;