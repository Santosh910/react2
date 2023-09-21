import React from "react";
import { useNavigate } from "react-router-dom";

const Params = () =>{
    const Router = useNavigate();

    return(
        <div>
            <button onClick={() =>Router("/singleProduct/123456")}>Click to go single product</button>
        </div>
    )
}

export default Params;