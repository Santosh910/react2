import React, { useState } from "react";

const Register2 = () =>{
    const [userData,setUserData] =useState({name:"", email:"",password:"" })

    // console.log(userData,"userdata")
    const handleChange = (event) =>{
    //  console.log(event.target.value, "value")
    //  console.log(event.target.name, "name")
    setUserData({...userData, [event.target.name] : event.target.value})
    }
    const sendDataToBackend = (event) =>{
        event.preventDefault();
        alert("data submitted to backend")
    }

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