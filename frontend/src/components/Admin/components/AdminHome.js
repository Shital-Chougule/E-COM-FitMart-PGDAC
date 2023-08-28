import React from "react"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AdminHome = () => {
  useEffect(() => {
    const auth = localStorage.getItem('admin');
    if(!auth){
        navigate("/admin")
    }
  }, [])
  const navigate = useNavigate();
  return (

    <div>
      <h1 style={{ color: "purple" }}><u><b>Admin Dashboard</b></u></h1>
      <div className="d-flex justify-content-center">
      <div className="card m-4" onClick={()=>{navigate("/admin/profile")}} style={{ width: '13rem' }}>
        <div style={{ height: '3rem', backgroundColor: 'Blue' }} className="card-img-top" alt="Product Image" />
        <div className="card-body">
          <h3 className="card-title">Profile</h3>
        </div>
      </div>

      <div className="card m-4" onClick={()=>{navigate("/admin/products")}} style={{ width: '13rem' }}>
        <div style={{ height: '3rem', backgroundColor: 'Green' }} className="card-img-top" alt="Product Image" />
        <div className="card-body">
          <h3 className="card-title">Products</h3>
        </div>
      </div>
      
      <div className="card m-4" onClick={()=>{navigate("/admin/addproduct")}} style={{ width: '13rem' }}>
        <div style={{ height: '3rem', backgroundColor: 'gold' }} className="card-img-top" alt="Product Image" />
        <div className="card-body">
          <h3 className="card-title">Add Products</h3>
        </div>
      </div>
      
      <div className="card m-4" onClick={()=>{navigate("/admin/orders")}} style={{ width: '13rem' }}>
        <div style={{ height: '3rem', backgroundColor: 'red' }} className="card-img-top" alt="Product Image" />
        <div className="card-body">
          <h3 className="card-title">Orders</h3>
        </div>
      </div>
    {/* Rahul */}
      <div className="card m-4" onClick={()=>{navigate("/admin/users")}} style={{ width: '13rem' }}>
        <div style={{ height: '3rem', backgroundColor: 'purple' }} className="card-img-top" alt="Product Image" />
        <div className="card-body">
          <h3 className="card-title">Users</h3>
        </div>
      </div>
</div>


    </div>

  )
}
export default AdminHome;

