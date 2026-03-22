import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    return(
        <div>
            <h1>Login Page</h1>

            <button onClick={() => navigate("/dashboard")} className="bg-blue-500 text-white px-4 py-2 mt-4">
                Go to Dashboard
            </button>
        </div>
    )
}

export default Login;