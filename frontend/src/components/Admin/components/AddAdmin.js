import React from "react";
import { useState } from "react";
import{useNavigate } from 'react-router-dom';
import { useEffect } from "react";


const AddAdmin = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
        const auth = localStorage.getItem('admin');
    if(!auth){
        navigate("/admin")
    }
      }, [])
	
//   useEffect(()=>{
//     const auth = localStorage.getItem("user");
//     if(auth){
//       navigate('/')
//     }
//   })

	const collectData = async () => {
		// console.log(name, email, mobile, password);
		let result = await fetch('http://localhost:5000/adminregister', {
			method: 'post',
			body: JSON.stringify({ name, email, mobile, password }),
			headers: {
				'Content-Type': 'application/json'
			},
		});
		result = await result.json();
		console.warn(result);
	
		
			navigate('/admin')
		
	}

	return (
		<div className="container mb-5" >
			<div className="row mt-5">
				<div className="col-md-4 offset-md-4">
					<div className="card" >
						<div className="card-header text-center p-3" >
							{/* <br />
							<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
								<path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
								<path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
							</svg>
							<br />
							Rahul b
							<br /> */}
							<h3 style={{color:"green"}}><b>Add Admin</b></h3>
						</div>
						<div className="card-body">
							<form>
								<div className="mb-3">

									<input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Enter Your Name" className="form-control" id="name" name="name" />
								</div>
								<div className="mb-3">

									<input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Your Email" className="form-control" id="email" name="email" />
								</div>
								<div className="mb-3">

									<input type="number" onChange={(e) => { setMobile(e.target.value) }} placeholder="Enter Your Mobile" className="form-control" id="mobile" name="mobile" />
								</div>
								<div className="mb-3">

									<input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Your Password" className="form-control" id="password" name="password" />
								</div>
								<div className="text-center">
									<button type="button" onClick={collectData} className="btn btn-primary">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AddAdmin;