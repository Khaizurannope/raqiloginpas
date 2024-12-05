const LoginFrm = () => {
    return (
      <form action="" className="p-6 max-w-md mx-auto bg-white dark:bg-darkBlue shadow-md rounded-lg">
        {/* Judul Form */}
        <h2 className="text-2xl font-medium text-darkBlue dark:text-gray mb-4 text-center">
          Login
        </h2>
  
        {/* Username Input */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-darkBlue dark:text-gray text-sm font-medium"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border-b-2 border-darkBlue dark:border-gray bg-transparent text-darkBlue dark:text-white outline-none px-3 py-2"
            placeholder="Enter your username"
          />
        </div>
  
        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-darkBlue dark:text-gray text-sm font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border-b-2 border-darkBlue dark:border-gray bg-transparent text-darkBlue dark:text-white outline-none px-3 py-2"
            placeholder="Enter your password"
          />
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-darkBlue dark:bg-gray text-white dark:text-darkBlue py-2 font-medium rounded hover:bg-opacity-90 dark:hover:bg-opacity-90"
        >
          Sign In
        </button>
  
        {/* Link ke Register */}
        <div className="mt-4 text-center text-sm text-darkBlue dark:text-gray">
          Don't have an account?{' '}
          <a
            href="#"
            className="text-blue-500 dark:text-blue-400 font-medium hover:underline"
          >
            Register here
          </a>
        </div>
      </form>
    );
  };
  
  export default LoginFrm;
  