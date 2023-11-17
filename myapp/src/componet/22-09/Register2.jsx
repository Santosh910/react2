import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register2 = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })

    const router = useNavigate();

    // console.log(userData,"userdata")
    const handleChange = (event) => {
        console.log(event.target.value, "value", event.target.name, "name")
        //  console.log(event.target.name, "name")
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    // const sendDataToBackend = (event) =>{

    //     alert("data submitted to backend")
    const sendDataToBackend = async (event) => {
        event.preventDefault();
        if (userData.name && userData.password && userData.email) {
            if (userData.password.length >= 8) {
                try {
                    const responce = await axios.post("http://localhost:8000/api/v1/auth/register", { userData })
                    // const responce = {data:{success:true}};
                    if (responce.data.success) {
                        alert("registration successfull.")
                        setUserData({ name: "", email: "", password: "" })
                        router("/")
                    }
                } catch (error) {
                    toast.error(error?.message)
                    console.log(error, "error here")
                }
            
        } else {
            alert("Password must be 8 digit.")
        }

    }else {
        alert("Please fill the all values..")
      }
    }

    return (
        <div>
            <h1>Register </h1>
            <form onSubmit={sendDataToBackend}>
                <label>Name:</label> <br />
                <input name='name' type="text" onChange={handleChange} /><br />
                <label>Email:</label> <br />
                <input name='email' type="email" onChange={handleChange} /><br />
                <label>Password:</label> <br />
                <input name='password' type="password" onChange={handleChange} /><br />

                <input type="submit" value="register here" /><br />

            </form>
        </div>
    )
}

export default Register2