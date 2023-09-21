import { useNavigate } from "react-router-dom";

function Login1() {
    const router = useNavigate();
   
    

    return ( 
        <div>
            <h1>Login1</h1> 
            <button onClick={() => router('/')}>Go To Homepage</button>
        </div>
    )
}
export default Login1;