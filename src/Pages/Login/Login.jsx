import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { showCustomSuccessToast } from "../../Utils/SuccessToast";

const Login = () => {
  const { LoginUser, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    LoginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        showCustomSuccessToast(`You have successfully logged in.`);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center px-2 md:px-0">
        <div className="w-full max-w-md mx-auto p-8  space-y-3 rounded-xl bg-gray-900 text-gray-100">
          <h1 className="text-2xl font-bold text-center">Login Page</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1 text-sm lg:text-xl">
              <label className="block ">Email</label>
              <input type="text" name="email" placeholder="Type Your Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900  focus:border-violet-400  " required />
            </div>
            <div className="space-y-1 text-sm lg:text-xl">
              <label htmlFor="password" className="block ">
                Password
              </label>
              <input type="password" name="password" placeholder="Type Your Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900  focus:border-violet-400" required />
              <div className="flex justify-end text-xs text-gray-400">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button type="submit" className="block w-full p-3 text-center rounded-sm  bg-primary">
              Log In
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm lg:text-xl text-gray-400">Login with Your Google Account</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
          <p className="text-xs lg:text-xl text-center sm:px-6 text-gray-400">
            Don't have an account? {""}
            <Link to="/register" className="underline text-gray-100">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
