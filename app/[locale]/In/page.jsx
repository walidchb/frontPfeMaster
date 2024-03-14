"use client";
import Link from "next/link";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { FaGoogle } from "react-icons/fa";
import { IoEyeSharp, IoPersonSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { MdOutlinePassword } from "react-icons/md";
import { Formik } from "formik";
// import { useTranslations } from "next-intl";
function SignIn() {
  const t = useTranslations("Index");
  const locale = useLocale();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setErrorCred] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-[url('/BG.jpeg')]  flex items-center justify-center  text-black max-w-screen min-h-screen">
      <div className="loginDiv my-4 w-11/12 flex md:w-8/12 lg:w-5/12 flex-col items-center justify-center bg-white rounded-2xl py-12 md:p-12">
        {/* <img src="/BG.jpeg" alt="sdfhsf" srcset="" /> */}
        <img
          src="https://static.wixstatic.com/media/23fb1b_684b7f2399ae47e4beea5f5987c613f0~mv2.jpg/v1/fill/w_137,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/logo_tekkolab.jpg"
          alt=""
          srcset=""
        />
        <h1 className="mb-4 text-xl">Log in to continue</h1>

        <Formik
          className=" md:w-5/6"
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
          }}>
          {({
            values,

            errors,

            touched,

            handleChange,

            handleBlur,

            handleSubmit,

            isSubmitting,

            /* and other goodies */
          }) => (
            <form
              className=" flex w-5/6  flex-col items-center justify-center "
              onSubmit={handleSubmit}>
              <div className="w-full">
                <p className="text-xl">Email :</p>
                <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                  <IoPersonSharp className="h-5 w-5" />

                  <input
                    className="px-4 w-full focus:outline-none"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <p className="mb-4 text-red-500">
                  {" "}
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div className="w-full">
                <p className="text-xl">Password :</p>
                <div className=" flex justify-start items-center px-2 input rounded-xl h-10 ">
                  <MdOutlinePassword className="h-5 w-5" />

                  <input
                    className="w-full  px-4 focus:outline-none"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <span
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <FaEyeSlash className="w-5 h-5" />
                    ) : (
                      <IoEyeSharp className="w-5 h-5" />
                    )}
                  </span>
                </div>
                <p className=" mb-4 text-red-500">
                  {" "}
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              <button
                className=" w-full my-4 rounded border-b-4 border-violet-700 bg-violet-500 px-4 py-2 font-bold text-white hover:border-violet-500 hover:bg-violet-400"
                type="submit"
                disabled={isSubmitting}>
                Login
              </button>
              <p className=" mb-4 text-red-500"> {error}</p>
            </form>
          )}
        </Formik>
        <h1 className="mb-4 text-xl">or continue with :</h1>
        <button
          type="button"
          class="w-5/6   text-white   bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          {/* <svg
            class="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512">
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
          </svg> */}
          <FaGoogle class="mr-2 -ml-1 w-4 h-4" />
          Sign up with Google<div></div>
        </button>
        <div className=" py-2.5 mb-4 text-l flex justify-center items-center">
          <Link
            className="font-medium underline text-blue-400 hover:no-underline"
            rel="stylesheet"
            href={`/${locale}/Up`}>
            Create an account
          </Link>
        </div>

        <div className="border-t-2 border-blue-700 my-4 w-8/12 "></div>

        <p className="w-8/12 text-gray-600 text-center ">
          This page is protected by the Google{" "}
          <Link
            href={"#"}
            className="text-blue-700 hover:underline cursor-pointer">
            Privacy Policy
          </Link>{" "}
          and &nbsp;
          <Link
            href={"#"}
            className="text-blue-700 hover:underline cursor-pointer">
            Terms of Service
          </Link>{" "}
          apply.
        </p>
      </div>
    </div>
  );
  5;
}

export default SignIn;
