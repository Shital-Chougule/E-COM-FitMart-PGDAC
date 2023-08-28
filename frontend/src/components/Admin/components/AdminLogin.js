import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminLogin = () => {
	const auth = localStorage.getItem('admin');
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const navigate = useNavigate();
	
	useEffect(() => {
        if(auth){
            navigate("/admin/dashboard")
        }
      }, [])

	const handleLogin = async ()=>{
		// console.warn("Email - " + email + " Password - " + password);
		let result = await fetch('http://localhost:5000/adminlogin',{
			method: "post",
			body: JSON.stringify({email, password}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		result = await result.json();
		console.warn(result); 
		if(result.auth){
			localStorage.setItem("admin",JSON.stringify(result.admin));
			localStorage.setItem("token",JSON.stringify(result.auth));
			navigate('/admin/dashboard')
		}else{
			alert("Please enter correct Details");
		}
	}
	
	
	
	// const handleLogin = async ()=>{
		// // console.warn("Email - " + email + " Password - " + password);
		// let result = await fetch('http://localhost:5000/adminlogin',{
		// 	method: "post",
		// 	body: JSON.stringify({email, password}),
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// });

		// rahul
		// result = await result.json();
		// console.warn(result); 
		// if(result.name){
		// 	localStorage.setItem("admin",JSON.stringify(result));
		// 	navigate('/adminhome')
		// }else{
		// 	alert("Please enter correct Details");
		// }
	// }
	
	// useEffect(()=>{
	// 	const auth = localStorage.getItem("admin");
	// 	if(auth){
	// 	  navigate('/adminlogin')
	// 	}
	//   })
	  
    return (
        <div className="container mb-5">
		<div className="row mt-5">
			<div className="col-md-4 offset-md-4">
				<div className="card">
					<div className="card-header text-center">
					<h3 style={{color:"green"}}><b>Admin Login</b></h3>
					
					</div>
					<div className="card-body">
						<form action="login" method="post">
							<div className="mb-3">
								
									<input type="email" placeholder="Enter Your Email"  onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="email" name="email" aria-describedby="emailHelp" />
							</div>
							<div className="mb-3">
								
								<input type="password"  placeholder="Enter Your Password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" name= "password"
									id="password" />
							</div>
							<div className="d-flex justify-content-between container">
							<div className="text-center">
								<button type="button" className="btn btn-secondary">
									<Link className="nav-link" to={"/"}>Back</Link>
								</button>
							</div>
							<div className="text-center">
								<button type="button" onClick={handleLogin} className="btn btn-primary">Submit</button>
							</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}
export default AdminLogin;