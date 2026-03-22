import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 🔥 ADD THIS (this fixes your issue)
    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const handleLogin = () => {
        if (!email.includes("@")) {
            alert("Please enter a valid email");
            return;
        }

        if (!password) {
            alert("Please enter password");
            return;
        }

        sessionStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow text-center">

                <h1>Welcome Back</h1>

                <p className="text-gray-500 text-center mb-6">
                    Login to your account
                </p>

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-2 mb-4 rounded"
                    required
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-2 mb-4 rounded"
                />

                <button
                    onClick={handleLogin}
                    className="bg-blue-500 text-white px-4 py-2 mt-4"
                >
                    Login
                </button>

            </div>
        </div>
    );
}

export default Login;