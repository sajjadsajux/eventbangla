import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className=" divide-y bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a rel="noopener noreferrer" href="#" className="flex   space-x-3 lg:justify-start">
              <span className="self-center text-2xl font-semibold">Brand name</span>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Quae eius dignissimos voluptatem id quo corporis obcaecati consequatur nostrum ducimus laborum.
            </p>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-gray-50">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-gray-50">Social media</div>
              <div className="flex  justify-start space-x-3">
                <Link>
                  <FaFacebook size={30}></FaFacebook>
                </Link>
                <Link>
                  <FaInstagram size={30}></FaInstagram>
                </Link>
                <Link>
                  <FaTwitter size={30}></FaTwitter>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-gray-400">© 1968 Company Co. All rights reserved.</div>
      </footer>
    </>
  );
};

export default Footer;
