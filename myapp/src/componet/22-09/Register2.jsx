import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Register2 = () =>{
    const [userData,setUserData] =useState({name:"", email:"",password:"" })

    const router = useNavigate();

    // console.log(userData,"userdata")
    const handleChange = (event) =>{
     console.log(event.target.value, "value",event.target.name, "name")
    //  console.log(event.target.name, "name")
    setUserData({...userData, [event.target.name] : event.target.value})
    }
    // const sendDataToBackend = (event) =>{
        
    //     alert("data submitted to backend")
        const sendDataToBackend = async (event) =>{
            event.preventDefault();
            if(userData.name && userData.password && userData.email){
                if(userData.password.length >= 8){
                    const responce = {data:{success:true}};
                    if(responce.data.success){
                        alert("registration successfull.")
                        setUserData({ name:"", email:"", password:"" })
                        router("/")
                    }else{
                        alert(responce.data.error)
                    }
                }else{
                    alert("Password must be 8 digit.")
                }
            }else{
                alert("Please fill the all value..")
            }
        }
    // }

    return(
        <div>
            <h1>Register </h1>
            <form  onSubmit={sendDataToBackend }>
                <label>Name:</label> <br />
                <input name='name' type="text" onChange={handleChange} /><br />
                <label>Email:</label> <br />
                <input name='email' type="email" onChange={handleChange} /><br />
                <label>Password:</label> <br />
                <input name='password' type="password" onChange={handleChange} /><br />
               
                <input type="submit" value="register here"/><br />

            </form>
        </div>
    )
}

export default Register2