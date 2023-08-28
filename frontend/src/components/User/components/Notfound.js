import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {

	return (
		<>
			<div class="container my-5">
				<div>
					<h1 class="text-center">FitMart</h1>
				</div>

				<div class="d-flex justify-content-center">


					<div class="login-box m-auto mt-5 col-4 text-center">
						<h3 class="text-center mt-5">Page Not Found</h3>
						<i class="bi bi-emoji-frown-fill text-danger success-icon"></i>
						<h6 className="mt-5">Sorry, we couldn't find what your are looking for.
							<Link className="btn btn-primary mt-5" to={"/"}>
							Go to Home Page</Link>
						</h6>
					</div>

				</div>

			</div>
		</>
	)
}
export default NotFound;