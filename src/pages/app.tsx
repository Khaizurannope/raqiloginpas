import { AppProps } from "next/app";
import ToggleTheme from "../components/ToggleTheme";
import "../styles/globals.css";

function MyApp({}: AppProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 p-2 z-10">
        <ToggleTheme />
      </div>

      {/* Form Container */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Bagian Kiri (Social Sign-ins) */}
        <div className="hidden md:flex flex-col justify-center items-center w-full md:w-1/2 bg-gray-200 dark:bg-gray-700 p-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
            GET STARTED
          </h1>
          <button className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md">
            Sign In with Google
          </button>
          <button className="w-full py-3 text-white bg-gray-600 hover:bg-gray-700 rounded-lg shadow-md">
            Sign In with GitHub
          </button>
        </div>

        {/* Bagian Kanan - Form Login */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">
            Login
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-200 text-center">
            Don't have an account?
            <a href="#" className="text-blue-500 dark:text-gray-100 hover:underline">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
