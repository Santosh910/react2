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
        </div>
    )
 }

export default Homepage;