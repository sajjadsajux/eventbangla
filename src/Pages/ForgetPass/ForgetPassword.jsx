import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation } from "react-router";
import DynamicTittle from "../../Utils/DynamicTittle";
import PasswordErrorToast from "../../Utils/PasswordErrorToast";
import { showCustomSuccessToast } from "../../Utils/SuccessToast";

const ForgetPassword = () => {
  DynamicTittle("Forget Password");

  const { ResetPassword } = use(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state?.email);
    }
  }, [location]);

  const handleResetPass = (e) => {
    e.preventDefault();
    ResetPassword(email)
      .then(() => {
        showCustomSuccessToast("Password reset email sent! Redirecting to your inbox...");
        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 3000);

        setEmail("");
      })
      .catch((error) => {
        const errorCode = error.code.replace("auth/", "");
        PasswordErrorToast(errorCode);
      });
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center px-2 md:px-0">
        <div className=" container mx-auto w-full max-w-lg p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
          <h1 className="text-2xl font-bold text-center">Reset Your Password</h1>
          <form onSubmit={handleResetPass} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block text-white text-base my-4  ">Email:</label>
              <input type="email" name="email" required placeholder="Enter Your Valid Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit" className="block w-full p-3 text-center rounded-sm font-bold bg-primary hover:bg-green-600 ">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
