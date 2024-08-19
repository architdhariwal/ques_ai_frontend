import React, { useContext, useEffect } from "react";
import login from "./../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { myContext } from "../hooks/MyContextProvider";
import { setToken } from "../utils/setToken";

function Signup() {
  let { auth, setAuth } = useContext(myContext);
  let navigate = useNavigate();
  async function submitHandler(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    (form.get("username"));
    let payload = {
      username: form.get("username"),
      email: form.get("email"),
      password: form.get("email"),
    };
    await signupRequest(payload);
  }

  async function signupRequest(payload) {
    try {
      let res = await axios.post(BASE_URL + "/api/auth/register", payload);
      if (res.status != 201) {
        throw new Error(res.data);
      }

      setAuth((prev) => ({
        username: res.data.username,
        Authorize: true,
        email: res.data.email,
      }));
      setToken(res.data.token);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  useEffect(() => {
    if (auth.Authorize) {
      navigate("/");
    }
  }, [auth.Authorize]);

  return (
    <div className="flex flex-col justify-center items-center">
      <span>
        <img src={login} className="w-44" />
      </span>
      <div className="bg-white p-8  w-full">
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="fullName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
              type="password"
              id="password"
              name="password"
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
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
          >
            Sign Up
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
            to={"/auth/login"}
            className="text-sm text-purple-600 hover:underline"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;