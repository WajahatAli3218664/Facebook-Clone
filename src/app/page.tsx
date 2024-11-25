import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col justify-between h-full">
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
            facebook
          </h1>
          <p className="mb-4 text-center text-gray-700 font-semibold">
            Facebook helps you connect and share with the people in your life.
          </p>

          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address or phone number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Log in
            </button>
          </form>

          <a href="#" className="block text-center text-blue-500 mt-4">
            Forgotten password?
          </a>
          <hr className="my-6" />

          <button className="w-full bg-lime-400 text-white p-3 rounded-lg hover:bg-lime-300 transition">
            Create new account
          </button>
        </div>

        <p className="text-center mt-6 text-slate-800">
          <a href="#" className="text-black font-bold">
            Create a Page
          </a>{" "}
          for a celebrity, brand, or business.
        </p>
      </div>
    </div>
  );
}