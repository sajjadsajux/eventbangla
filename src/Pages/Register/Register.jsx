import React, { use, useState } from "react";
import { BsEye, BsEyeSlash, BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import PasswordErrorToast from "../../Utils/PasswordErrorToast";
import { showCustomSuccessToast } from "../../Utils/SuccessToast";
import DynamicTittle from "../../Utils/DynamicTittle";

const Register = () => {
  DynamicTittle("Register");

  const [showPassword, setShowPassword] = useState(false);
  const [showerror, setShowError] = useState(false);

  const { RegisterUser, setUser, UpdateUser, LoginGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // console.log({ name, email, photo, password });

    // validate password
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = /^.{6,}$/.test(password);

    if (hasUppercase == false) {
      // PasswordErrorToast(`Must have an Uppercase letter in the password`);
      setShowError("Must have an Uppercase letter in the password");
      return;
    } else if (hasLowercase == false) {
      // PasswordErrorToast(`Must have a Lowercase letter in the password  `);
      setShowError("Must have a Lowercase letter in the password");

      return;
    } else if (hasMinLength == false) {
      // PasswordErrorToast(`Password Length must be at least 6 character`);
      setShowError("Password Length must be at least 6 character");

      return;
    }
    RegisterUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setShowError(false);
        UpdateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            alert(error.message);
            setUser(user);
          });
        showCustomSuccessToast(`Congrats! Your account has been created successfully `);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleLogin = () => {
    LoginGoogle()
      .then((result) => {
        const user = result.user;
        UpdateUser({ displayName: user.displayName, photoURL: user.photoURL })
          .then(() => {
            setUser(user);
            showCustomSuccessToast(`Your account has been created and Logged In with Google`);
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code.replace("auth/", "");
            PasswordErrorToast(errorCode);
            setUser(user);
            navigate("/");
          });
      })
      .catch((error) => {
        // console.log(error);
        // alert(error.message);
        const errorCode = error.code.replace("auth/", "");
        PasswordErrorToast(errorCode);
      });
  };

  return (
    <>
      <div className="container mx-auto  flex justify-center items-center pb-10 lg:pt-0 px-2 md:px-0">
        <div className="w-full max-w-md mx-auto p-8  space-y-3 rounded-xl bg-gray-900 text-gray-100">
          <h1 className="text-2xl font-bold text-center">Register Page</h1>
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm ">
              <label className="block font-bold lg:text-xl">Name</label>
              <input type="text" name="name" placeholder="Type Your Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black  focus:border-violet-400  " required />
            </div>
            {/* email */}
            <div className="space-y-1 text-sm ">
              <label className="block font-bold lg:text-xl">Email</label>
              <input type="text" name="email" placeholder="Type Your Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400  " required />
            </div>
            {/* photourl */}
            <div className="space-y-1 text-sm ">
              <label className="block font-bold lg:text-xl">PhotoURL</label>
              <input type="url" name="photo" placeholder="Paste Your Image URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black  focus:border-violet-400  " required />
            </div>
            {/* password */}
            <div className="space-y-1 text-sm relative">
              <label className="block font-bold lg:text-xl">Password</label>
              <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Type Your Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400 pr-12" required />
              <span onClick={() => setShowPassword(!showPassword)} className="absolute lg:right-4 lg:top-11 right-3 top-9 text-xl text-gray-400 cursor-pointer ">
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </span>
            </div>
            {showerror && <p className="text-red-500 ">{showerror}</p>}
            <button type="submit" className="block w-full p-3 text-center rounded-sm  bg-primary  hover:bg-green-600 hover:cursor-pointer">
              Register Your Account
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm  text-gray-400">Login with Your Google Account</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button onClick={handleGoogleLogin} type="button" className="flex flex-row items-center justify-center w-full p-2 space-x-2 border hover:cursor-pointer hover:bg-green-600">
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
