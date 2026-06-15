import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "/.netlify/functions/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        localStorage.setItem(
          "adminToken",
          data.token
        );

        navigate("/admin");
      } else {
        alert("Invalid Login");
      }
    } catch (err) {
      alert("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-[#0B1F3A] text-5xl font-bold">
            NEST
          </h1>

          <p className="text-[#F39019] tracking-[0.3em] mt-2 text-sm uppercase">
            Homes Admin Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <div className="mb-8">
            <p className="text-[#F39019] text-sm font-semibold uppercase tracking-widest">
              Welcome Back
            </p>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-2">
              Admin Login
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in to manage projects and galleries.
            </p>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 font-medium text-[#0B1F3A]">
              Email Address
            </label>

            <input
              type="email"
              placeholder="admin@nesthomes.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F39019]"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-[#0B1F3A]">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F39019]"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={login}
            disabled={loading}
            className="w-full bg-[#0B1F3A] hover:bg-[#16345c] text-white py-4 rounded-xl font-semibold text-lg transition-all"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2026 Nest Homes. All rights reserved.
        </p>

      </div>
    </div>
  );
}