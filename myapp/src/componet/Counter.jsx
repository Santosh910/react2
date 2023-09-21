import { useState } from "react";

const Counter = () => {
        const [counter, setCounter] =  useState(0) 
    // console.log(counter, "counter");
    const [liked, setLiked] = useState(false);
    console.log(liked, "liked")
    return(
        <div>
            
            <h1>counter - {counter}</h1>
            <button onClick={() => setCounter((preValue) =>(preValue + 1))}>+ counter</button>
            <button onClick={() => setCounter((preValue) =>(preValue - 1))}>- counter</button>
            <button onClick={() => setCounter((preValue) =>(preValue + 10))}>+ counter</button>
            <button onClick={() => setLiked((flag) => !flag)}>Like ?</button>
        </div>
    )
}
 
export default Counter;