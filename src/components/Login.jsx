import React, { useContext, useEffect, useState } from "react";
import login from "./../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../hooks/MyContextProvider";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { setToken } from "../utils/setToken";
function Login() {
  let { auth, setAuth } = useContext(myContext);
  let [error, setError] = useState("");
  let navigate = useNavigate();
  async function submitHandler(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let payload = {
      email: form.get("email"),
      password: form.get("password"),
    };
    await loginRequest(payload);
  }

  async function loginRequest(payload) {
    try {
      let res = await axios.post(BASE_URL + "/api/auth/login", payload);
      if (res.status != 200) {
        setError(res.data);
        throw new Error(res.data);
      }

      setAuth((prev) => ({
        username: res.data.username,
        Authorize: true,
        email: res.data.email,
      }));
      setToken(res.data.token)
    } catch (error) {
      setError(error.response.data.message);
      throw new Error(error.message);
    }
  }

  useEffect(() => {
    if (auth.Authorize) {
      navigate("/");
    }
  }, [auth.Authorize]);

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <span>
          <img src={login} />
        </span>
        <div className="bg-white p-8 max-w-sm w-full">
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-purple-600"
                />
                <span className="ml-2 text-gray-700 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
          <div className="my-4 text-center text-gray-500">or</div>
          <button
            type="button"
            className="bg-white text-gray-700 border border-gray-300 font-bold py-2 px-4 rounded w-full flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:shadow-outline"
          >
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="Google Icon"
              className="mr-2"
            />
            Continue with Google
          </button>
          <div className="mt-4 text-center">
            <Link
              to="/auth/signup"
              className="text-sm text-purple-600 hover:underline"
            >
              Don't have an account? Create Account
            </Link>
          </div>
        </div>
        <h1 className="text-red-500 font-bold ">{error}</h1>
      </div>
    </>
  );
}

export default Login;