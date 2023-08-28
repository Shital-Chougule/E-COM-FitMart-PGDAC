import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/')
    console.warn("Logout");
  }
  // const [count, setCount] = useState("0");
  const [userId, setUserid] = useState("0");
  
  
  useEffect(() => {
    // let u_id = (localStorage.getItem("user"))._id
    // <h1>Welcome {JSON.parse(localStorage.getItem("user"))._id}</h1>
    let u_id = (JSON.parse(localStorage.getItem("user")))
    console.log(u_id)
    if(localStorage.getItem('user')){
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUserid(storedUser._id);
    }
    // fetch(`/cart/count/${u_id}`)
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Cart item count:', data.itemCount);
    //   setCount(data);
    //   })
    //   .catch(error => {
    //     console.error('Error getting cart item count:', error);
    //   });
  },[])

   
    
    

  

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to={"/"}>Fitmart</Link> */}
            <Link className="navbar-brand" to={"/"}>
              <img alt="logo" style={{ width: '45px', float: 'left', borderRadius: '50%' }} src="https://us-east1-aws.api.snapchat.com/web-capture/www.snapchat.com/add/thegymbrosclub/preview/square.jpeg" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {auth ?
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/"}>
                      Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/user/product"}>
                      Products</Link>
                  </li>
                  <li className="nav-item">
                
                    <Link className="nav-link" to={`/cart/${userId}`}>
                      Cart</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/user/about"}>
                      About</Link>
                  </li>


                </ul>
                <form className="d-flex" role="search">
                 
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to={`/user/profile/${userId}`}>
                  Profile 
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" onClick={logout} to={"/"}>
                  Logout 
                  {/* ({JSON.parse(auth).name}) */}
                  {/* Rahul B */}
                  </Link>
                </li>
              </ul>
                </form>
              </>
              :
              <>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/"}>
                      Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/user/product"}>
                      Products</Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link className="nav-link" to={"/user/about"}>
                      About</Link>
                  </li>


                </ul>
              <form className="d-flex" role="search">

                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" to={"/login"}>
                      {/* <i className="bi bi-person" /> */}Login</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={"/register"}>
                      {/* <i className="bi bi-person-add" /> */}Register</Link></li>
                  </ul>


          
            </form>
            </>
              }
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Nav;