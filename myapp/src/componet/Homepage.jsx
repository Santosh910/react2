import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



function Homepage() {
    const router = useNavigate()
    function routerToLogin() {
        router("/login1")
    }
  
    return ( 
        <div>
            <h1> Homepage </h1>

            <button onClick={routerToLogin}>Go tO Login</button>
            <button onClick={() => router('/register')}>go to register</button>
            <button onClick={() => toast.error("clicked")}>click for toast error</button>
            <button onClick={() => toast.success("clicked")}>click for toast success</button>
        </div>
    )
 }

export default Homepage;