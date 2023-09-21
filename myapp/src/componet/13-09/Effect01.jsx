import React, { useEffect, useState } from "react";

const Effect01 = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => { console.log("Rendered...") });

    return (
        <div>
           <h1>counter -{counter}</h1> 
           <button onClick={() => setCounter((santosh) =>santosh+1)}>+</button>
        </div>
    )
}
export default Effect01;