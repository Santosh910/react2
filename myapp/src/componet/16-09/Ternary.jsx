import React from "react";

const Ternary = ({isUserLoggedIn,setLoggedIn}) =>{
    return(
        <div>
            <h1>Ternary operator</h1>
            {isUserLoggedIn ? <h1 onClick={() =>setLoggedIn((prevValue) =>!prevValue)}>welcome</h1> : <button onClick={() =>setLoggedIn((prevValue) =>!prevValue)}>please login</button>}
        </div>
    )
}

export default Ternary; 