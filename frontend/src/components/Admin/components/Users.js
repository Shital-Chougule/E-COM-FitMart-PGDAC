import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const auth = localStorage.getItem('admin');
		  if(!auth){
			  navigate("/")
		  }else{
        getUsers();}
    }, [])

    const getUsers = async () => {
        let result = await fetch('http://localhost:5000/getallusers');
        result = await result.json();
        setUsers(result);
    }

    const deleteUser = async (id) => {
        let result = await fetch(`http://localhost:5000/deleteusers/${id}`, {
            method: "Delete"
        })
        result = await result.json()
        if (result) {
            getUsers()
        }

    };
  return (
    <div className="container mt-2">
    <h3>Users</h3>
  

    <div className="row row-cols-2">

        <table className="producttable container">
            <tr className="producttable">
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Operation</th>
            </tr>
            {

                users.length>0 ? users.map((user, index) =>
                    <tr>
                        <td>
                            <h5 className="card-title">{index + 1}</h5>
                        </td>
                        <td>
                            <p className="card-title">{user.name}</p>
                        </td>
                        <td>
                            <p className="card-title">{user.email}</p>
                        </td>
                        <td>
                            <p class="card-text">{user.mobile}</p>
                        </td>
                        <td>
                            <button className="form-control" style={{color:"red"}} onClick={() => deleteUser(user._id)}>Delete</button>
                        </td>
                {/* Rahul */}
                    </tr>
                ) : <tr>
                    <th colSpan={6}>
                    No Product's Match
                    </th>
                    </tr>

            }
        </table>


    </div>
</div>

  )
}
export default Users;