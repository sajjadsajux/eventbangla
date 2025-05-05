import React, { use, useState } from "react";
import { BsEye, BsEyeSlash, BsGoogle } from "react-icons/bs";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { RegisterUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // console.log({ name, email, photo, password });
    RegisterUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="container mx-auto lg:h-screen flex justify-center items-center pb-10 lg:pt-0 px-2 md:px-0">
        <div className="w-full max-w-md mx-auto p-8  space-y-3 rounded-xl bg-gray-900 text-gray-100">
          <h1 className="text-2xl font-bold text-center">Register Page</h1>
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm ">
              <label className="block font-bold lg:text-xl">Name</label>
              <input type="text" name="name" placeholder="Type Your Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900  focus:border-violet-400  " required />
            </div>
            {/* email */}
            <div className="space-y-1 text-sm ">
              <label className="block font-bold lg:text-xl">Email</label>
              <input type="text" name="email" placeholder="Type Your Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900  focus:border-violet-400  " required />
            </div>
            {/* photourl */}
            <div className="space-y-1 text-sm ">
              <label className="block font-bold lg:text-xl">PhotoURL</label>
              <input type="url" name="photo" placeholder="Paste Your Image URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900  focus:border-violet-400  " required />
            </div>
            {/* password */}
            <div className="space-y-1 text-sm relative">
              <label className="block font-bold lg:text-xl">Password</label>
              <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Type Your Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 focus:border-violet-400 pr-12" required />
              <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-11 text-xl text-gray-400 cursor-pointer ">
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </span>
            </div>

            <button type="submit" className="block w-full p-3 text-center rounded-sm  bg-primary">
              Register Your Account
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm  text-gray-400">Login with Your Google Account</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button aria-label="Login with Google" type="button" className="flex flex-row items-center justify-center w-full p-2 space-x-2 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
              <BsGoogle />
              <p>Login with Google</p>
            </button>
          </div>
          <p className="text-xs lg:text-xl text-center sm:px-6 text-gray-400">
            Already have an account? {""}
            <Link to="/login" className="underline text-gray-100">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
