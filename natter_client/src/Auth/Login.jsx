import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="flex items-center justify-center mt-32 ">
        <form
          id="form"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-20 mb-4 lg:w-[30%] md:w-[40%] sm:w-[40%]  shadow-slate-700"
        >
          <h1 className="block text-gray-700 font-bold mb-2 text-2xl text-center">
            Login
          </h1>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              type="email"
              placeholder="abc@xyz.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              id="password"
              type="password"
              placeholder="*****"
              required
            />
          </div>
          
          <div className="flex flex-col gap-3 justify-between">
            <button
              id="submit"
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <i className="fab fa-whatsapp"></i> Login
            </button>
            <div>
              <p>
                Don't have an account!
                <Link
                  to="/signup"
                  className="text-blue-800 font-bold text-lg ml-2"
                >
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login