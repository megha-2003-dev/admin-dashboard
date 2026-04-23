import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const validate = () => {
        const newErrors = {};
        if (!email.includes("@")) newErrors.email = "Please enter a valid email";
        if (!password) newErrors.password = "Password is required";
        if (password && password.length < 4) newErrors.password = "Password too short";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = () => {
        if (!validate()) return;
        sessionStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">

                {/* Logo / Title */}
                <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                        A
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-400 text-sm mt-1">Sign in to your admin panel</p>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-600 block mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="admin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                        className={`w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm ${
                            errors.email ? "border-red-400" : "border-gray-300"
                        }`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="text-sm font-medium text-gray-600 block mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                        className={`w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm ${
                            errors.password ? "border-red-400" : "border-gray-300"
                        }`}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                    )}
                </div>

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-colors"
                >
                    Sign In
                </button>

                {/* Hint for demo */}
                <p className="text-xs text-gray-400 text-center mt-4">
                    Use any valid email and password to login
                </p>
            </div>
        </div>
    );
}

export default Login;
