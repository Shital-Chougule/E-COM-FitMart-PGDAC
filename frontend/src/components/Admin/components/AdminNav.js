import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNav = () => {
  const auth = localStorage.getItem('admin');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/admin')
    console.warn("Admin Logout");
  }

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to={"/"}>Fitmart</Link> */}
            <Link className="navbar-brand" to={"/admin/dashboard"}><img  alt="logo" style={{width:'45px', float:'left', borderRadius:'50%'}} src="https://us-east1-aws.api.snapchat.com/web-capture/www.snapchat.com/add/thegymbrosclub/preview/square.jpeg"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* {auth ? */}
                <>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/admin/dashboard"}>
                        
                        Dashboard</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/admin/products"}>
                       
                        Products</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/admin/addproduct"}>
                      
                        Add Product</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/admin/addadmin"}>
                      
                        Register Admin</Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className="nav-link" to={"/admin/orders"}>
                      
                        Orders</Link>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item"><Link className="nav-link" onClick={logout} to={"/"}>
                        Logout 
                        {/* ({JSON.parse(auth).name}) */}
                        </Link>
                      </li>
                    </ul>
                
                  </form>
                </>
                {/* : */}
              {/* Rahul b */}


              {/* } */}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default AdminNav;