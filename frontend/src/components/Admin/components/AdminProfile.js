import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AdminProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('admin');
		if(!auth){
			navigate("/")
		}else{
        getAdminDetails()}
    }, [])
    const getAdminDetails = async () => {
        let result = localStorage.getItem('admin')
        const adminObject = JSON.parse(result);
        setName(adminObject.name)
        setEmail(adminObject.email)
        setMobile(adminObject.mobile)
          console.log(adminObject)
    }

    return (

        <div>
            <h1>Admin Profile</h1>
            <div >
            
                <table style={{width:"400px"}} className="card text-bg-secondary p-3 container mb-5 mt-3">
                    <tr >
                        <th>
                            Name :
                        </th>
                        <td>
                            {name}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Email :
                        </th>
                        <td>
                            {email}
                        </td>
                    </tr>
                    <tr>

                        <th>
                            Mobile :
                        </th>
                        <td>
                            {mobile}
                        </td>
                    </tr>
                </table>
            </div>

            {/* Rahul b */}
        </div>

    )
}
export default AdminProfile;