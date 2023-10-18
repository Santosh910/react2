import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context/GlobalContext";



function Homepage() {

    const { state, dispatch } = useContext(MyContext);

    const router = useNavigate()
    function routerToLogin() {
        router("/login1")
    }

    return (
        <div>
            <h1> Homepage </h1>
            <h1>Counter :{state.counter}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            {/* <button onClick={() => dispatch({ type: "DECREMENT " })}>-</button>
            <button onClick={() => dispatch({ type: "RESET " })}>reset</button> */}
            <button onClick={routerToLogin}>Go tO Login</button>
            <button onClick={() => router('/register')}>go to register</button>
            <button onClick={() => toast.error("clicked")}>click for toast error</button>
            <button onClick={() => toast.success("clicked")}>click for toast success</button>
        </div>
    )




}


export default Homepage;