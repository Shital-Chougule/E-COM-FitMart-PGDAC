import React from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Orders = () => {
  const navigate = useNavigate()
  useEffect(() => {
		const auth = localStorage.getItem('admin');
		if(!auth){
			navigate("/")
		}
	  }, [])

  return (

    <div>
      <h1 style={{ color: "purple" }}><u><b>Orders</b></u></h1>


      
    </div>

  )
}
export default Orders;