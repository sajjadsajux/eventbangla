import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { showCustomSuccessToast } from "../../Utils/SuccessToast";
import PasswordErrorToast from "../../Utils/PasswordErrorToast";
import { BsGoogle } from "react-icons/bs";
import DynamicTittle from "../../Utils/DynamicTittle";

const Login = () => {
  DynamicTittle("Login");

  const { LoginUser, setUser, UpdateUser, LoginGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

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
        PasswordErrorToast(`Incorrect email or password. Please try again.`);
      });
  };

  const handleGoogleLogin = () => {
    LoginGoogle()
      .then((result) => {
        const user = result.user;
        UpdateUser({ displayName: user.displayName, photoURL: user.photoURL })
          .then(() => {
            setUser(user);
            showCustomSuccessToast(`You have successfully Logged In with Google`);
            navigate("/");
          })
          .catch((error) => {
            alert(error.message);
            setUser(user);
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  const handleForgetPass = () => {
    navigate("/forget-password", { state: { email } });
  };

  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center px-2 md:px-0">
        <div className="w-full max-w-md mx-auto p-8  space-y-3 rounded-xl bg-gray-900 text-gray-100">
          <h1 className="text-2xl font-bold text-center">Login Page</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1 text-sm lg:text-base">
              <label className="block ">Email</label>
              <input type="text" name="email" placeholder="Type Your Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black  focus:border-violet-400  " required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-1 text-sm lg:text-base">
              <label htmlFor="password" className="block ">
                Password
              </label>
              <input type="password" name="password" placeholder="Type Your Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black  focus:border-violet-400" required />
              <div className="flex justify-end text-xs lg:text-base text-gray-400 mt-2">
                <button onClick={handleForgetPass}>Forgot Password?</button>
              </div>
            </div>
            <button type="submit" className="block w-full p-3 text-center rounded-sm  bg-primary font-bold">
              Log In
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm lg:text-xl text-gray-400">Login with Your Google Account</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button onClick={handleGoogleLogin} type="button" className="flex flex-row items-center justify-center w-full p-2 space-x-2 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
              <BsGoogle />
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
