// src/components/Login.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center">
      {loggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Admin Login</h1>
            {/* <p className="text-sm dark:text-gray-400">
              Sign in to access dashboard
            </p> */}
          </div>
          <form noValidate="" action="" className="space-y-12">
            <div className="space-y-4">
              <div>
                {/* <label htmlFor="email" className="block mb-2 text-sm">
                  Username
                </label> */}
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  {/* <label htmlFor="password" className="text-sm">
                    Password
                  </label> */}
                  {/* <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Forgot password?
                  </a> */}
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="">
              <div>
                <button
                  onClick={handleLogin}
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
