import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <Header />
      <div className="w-4/5 m-auto py-8">
        <h1 className="text-[#008ECC] py-8 font-bold text-xl text-center">
          Login{" "}
        </h1>
        <form className="bg-gray-50 rounded p-4 md:w-3/5 m-auto">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="py-2 text-xl text-gray-600 font-bold"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Please enter your email"
              name="email"
              className="p-4 rounded outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="py-2 text-xl text-gray-600 font-bold"
            >
              Password{" "}
            </label>
            <input
              type="password"
              id="password"
              placeholder="Please enter your password"
              name="password"
              className="p-4 rounded outline-none"
            />
          </div>
          <div className="mt-4 text-center flex flex-col">
            <div className="">
              <button className="bg-[#008ecc] text-white p-3 text-xl w-[130px] rounded">
                Login
              </button>
            </div>
            <span className="mt-4">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-[#008Ecc] font-bold">
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
