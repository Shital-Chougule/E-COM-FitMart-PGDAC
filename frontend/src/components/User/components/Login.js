import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const Login = () => {
	const auth = localStorage.getItem('user');
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
        if(auth){
            navigate("/")
        }
      }, [])

	const handleLogin = async ()=>{
		
		// console.warn("Email - " + email + " Password - " + password);
		let result = await fetch('http://localhost:5000/login',{
			method: "post",
			body: JSON.stringify({email, password}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		result = await result.json();
		console.warn(result); 
		if(result.auth){
			localStorage.setItem("user",JSON.stringify(result.user));
			localStorage.setItem("token",JSON.stringify(result.auth));
			navigate('/')
		}else{
			alert("Please enter correct Details");
		}
	}
	
	// useEffect(()=>{
	// 	const auth = localStorage.getItem("user");
	// 	if(auth){
	// 	  navigate('/')
	// 	}
	//   })
	// Rahul
	  
    return (
        <div className="container mb-5">
		<div className="row mt-5">
			<div className="col-md-4 offset-md-4">
				<div className="card">
					<div className="card-header text-center p-3">
					
						<h3 style={{color:"green"}}><b>User Login</b></h3>
					</div>
					<div className="card-body">
						<form>
							<div className="mb-3">
								
									<input type="email" placeholder="Enter Your Email"  onChange={(e)=>{setEmail(e.target.value)}} className="form-control" />
							</div>
							<div className="mb-3">
								
								<input type="password"  placeholder="Enter Your Password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" />
							</div>
							<div className="text-center">
								<button type="button" onClick={handleLogin} className="btn btn-primary">Submit</button>
							</div>
							
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}
export default Login;