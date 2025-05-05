import React, { use } from "react";
import { FaUserEdit } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { showCustomSuccessToast } from "../../Utils/SuccessToast";

const Navbar = () => {
  const { user, LogOutUser } = use(AuthContext);
  const linksAll = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <>
        {!user && (
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        )}
        {user && (
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        )}
      </>
    </>
  );

  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        showCustomSuccessToast(`You have been logged out. See you again!`);
      })
      .cath((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="navbar px-0  container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2 lg:mr-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {" "}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {linksAll}
            </ul>
          </div>
          <a className=" text-sm md:text-2xl lg:text-3xl font-bold">EventBangla</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold md:text-xl">{linksAll}</ul>
        </div>
        <div className="navbar-end flex gap-5">
          <div> {user?.photoURL ? <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full object-cover" /> : <FaUserEdit size={35} />}</div>
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary text-white text-sm btn-xs md:btn-md md:px-5">
              Log Out
            </button>
          ) : (
            <NavLink to="/login" className="btn btn-primary text-white text-sm btn-xs md:btn-md md:px-5">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
