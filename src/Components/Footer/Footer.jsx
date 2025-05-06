import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className=" divide-y bg-primary text-white p-2 lg:p-0">
        <div className="container flex flex-col justify-between  py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3 space-y-5 text-center lg:text-start">
            <Link className="flex   space-x-3 lg:justify-start justify-center">
              <span className="self-center md:text-2xl lg:text-3xl font-bold bg-white text-primary px-2 py-2 rounded-2xl">EventBangla</span>
            </Link>
            <p>Find Your Next Celebration, Right Here in Bangladesh!</p>
          </div>
          <div className="flex  justify-between text-center md:text-start text-sm gap-x-3 gap-y-8 lg:w-2/3 ">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase ">Main</h3>
              <ul className="space-y-1">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase ">Support / Help</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase ">Website Policies</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/terms-and-conditions">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase ">Social media</div>
              <div className="flex flex-col lg:flex-row justify-center items-center  space-x-3 space-y-3 lg:space-y-0 ">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30}></FaFacebook>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30}></FaInstagram>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitterSquare size={30}></FaTwitterSquare>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center ">© EventBangla 2025 All rights reserved.</div>
      </footer>
    </>
  );
};

export default Footer;
