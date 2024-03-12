import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-wrap justify-center mt-auto bg-gray-200 py-12 px-10 max-w-screen">
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 text-center">
        <h4 className="mb-6 text-lg font-semibold text-gray-700 uppercase relative">
          About Us
          <span className="h-0.5 w-16 bg-teal-500 absolute bottom-0 left-0 right-0 mx-auto"></span>
        </h4>

        <ul>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              aaa
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              bbb
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              ccc
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              ddd
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 text-center">
        <h4 className="mb-6 text-lg font-semibold text-gray-700 uppercase relative">
          Contact Us
          <span className="h-0.5 w-16 bg-teal-500 absolute bottom-0 left-0 right-0 mx-auto"></span>
        </h4>
        <ul>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              eee
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              fff
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              ggg
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              hhh
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 text-center">
        <h4 className="mb-6 text-lg font-semibold text-gray-700 uppercase relative">
          Documentation
          <span className="h-0.5 w-16 bg-teal-500 absolute bottom-0 left-0 right-0 mx-auto"></span>
        </h4>
        <ul>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              iii
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              jjj
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              kkk
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              lll
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 text-center">
        <h4 className="mb-6 text-lg font-semibold text-gray-700 uppercase relative">
          Follow Us
          <span className="h-0.5 w-16 bg-teal-500 absolute bottom-0 left-0 right-0 mx-auto"></span>
        </h4>
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-block h-12 w-12 flex items-center justify-center text-gray-100 bg-gray-800 rounded-full mr-3 hover:bg-blue-500">
            <FaFacebook />
          </Link>
          <Link
            href="/"
            className="inline-block h-12 w-12 flex items-center justify-center text-gray-100 bg-gray-800 rounded-full mr-3 hover:bg-blue-500">
            <FaTwitter />
          </Link>
          <Link
            href="/"
            className="inline-block h-12 w-12 flex items-center justify-center text-gray-100 bg-gray-800 rounded-full mr-3 hover:bg-blue-500">
            <FaInstagram />
          </Link>
          <Link
            href="/"
            className="inline-block h-12 w-12 flex items-center justify-center text-gray-100 bg-gray-800 rounded-full mr-3 hover:bg-blue-500">
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <p className="w-full text-center text-gray-700 text-lg mt-12">
        &copy; 2023 Task Management App. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
