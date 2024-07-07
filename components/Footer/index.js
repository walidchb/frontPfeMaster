"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";


function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [btnAboutDown, setBtnAboutDown] = useState(false);
  const [btnContactDown, setBtnContactDown] = useState(false);
  const [btnDocumentationDown, setBtnDocumentationDown] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      if (!event.matches) {
        setBtnAboutDown(false);
        setBtnContactDown(false);
        setBtnDocumentationDown(false);
      }
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [isMobile]);

  const aboutBtn = () => {
    setBtnAboutDown(!btnAboutDown);
  };

  const contactBtn = () => {
    setBtnContactDown(!btnContactDown);
  };

  const documentBtn = () => {
    setBtnDocumentationDown(!btnDocumentationDown);
  };

  return (
    <footer className="flex flex-wrap justify-center mt-auto bg-gray-200 py-12 px-10 max-w-screen">
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 text-center">
        <h4 className="mb-6 text-lg font-semibold text-gray-700 uppercase relative">
          About Us{" "}
          {isMobile && (
            <button onClick={() => aboutBtn()}>
              {!btnAboutDown ? <FaAngleDown /> : <FaAngleUp />}
            </button>
          )}
          <span className="h-0.5 w-16 bg-teal-500 absolute bottom-0 left-0 right-0 mx-auto"></span>
        </h4>

        {isMobile && btnAboutDown && (
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
        )}
        {!isMobile && (
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
        )}
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 text-center">
        <h4 className="mb-6 text-lg font-semibold text-gray-700 uppercase relative">
          Contact Us{" "}
          {isMobile && (
            <button onClick={() => contactBtn()}>
              {!btnContactDown ? <FaAngleDown /> : <FaAngleUp />}
            </button>
          )}
          <span className="h-0.5 w-16 bg-teal-500 absolute bottom-0 left-0 right-0 mx-auto"></span>
        </h4>
        {isMobile && btnContactDown && (
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
        )}
        {!isMobile && (
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
        )}
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 text-center">
        <h4 className="mb-6 text-lg font-semibold text-gray-700 uppercase relative">
          Documentation{" "}
          {isMobile && (
            <button onClick={() => documentBtn()}>
              {!btnDocumentationDown ? <FaAngleDown /> : <FaAngleUp />}
            </button>
          )}
          <span className="h-0.5 w-16 bg-teal-500 absolute bottom-0 left-0 right-0 mx-auto"></span>
        </h4>
        {isMobile && btnDocumentationDown && (
          <ul>
            <li>
              <Link
                href={`/${locale}/Documentation?To=Groupware`}
                className="text-gray-600 hover:text-gray-800">
                Groupware
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/Documentation?To=Workflow`}
                className="text-gray-600 hover:text-gray-800">
                Workflow
              </Link>
            </li>
          </ul>
        )}
        {!isMobile && (
          <ul>
            <li>
              <Link
                href={`/${locale}/Documentation?To=Groupware`}
                className="text-gray-600 hover:text-gray-800">
                Groupware
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/Documentation?To=Workflow`}
                className="text-gray-600 hover:text-gray-800">
                Workflow
              </Link>
            </li>
          </ul>
        )}
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
