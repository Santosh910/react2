import React, { useEffect, useState } from "react";

const Counterse = () =>{
    const[counter,setCounter] = useState(0);
    function updateCounter() {
        setCounter((prevValue) => prevValue + 1);
    }

    useEffect(() =>{
        if(counter === 10){
             alert("hii")
        }
       
    },[counter])

    return(
        <div>
            <h1>Counter = {counter}</h1>
           <button onClick={updateCounter}>+</button>
        </div>
    )
}

export default Counterse