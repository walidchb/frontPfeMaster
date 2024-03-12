"use client";
import Link from "next/link";
import "./style.css";

import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import AccountTypeCard from "@/components/AccountTypeCard";
import { Formik } from "formik";

function Individuals() {
  const [view, setView] = useState(1);
  const t = useTranslations("Index");
  const locale = useLocale();

  const [error, setErrorCred] = useState("");
  return (
    <div className="bg-[url('/BG.jpeg')]  flex items-center justify-center  text-black max-w-screen min-h-screen">
      <div className="loginDiv my-4 w-11/12 flex md:w-8/12 lg:w-5/12 flex-col items-center justify-center bg-white rounded-2xl py-12 md:py-8">
        {/* <img src="/BG.jpeg" alt="sdfhsf" srcset="" /> */}
        <img
          src="https://static.wixstatic.com/media/23fb1b_684b7f2399ae47e4beea5f5987c613f0~mv2.jpg/v1/fill/w_137,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/logo_tekkolab.jpg"
          alt=""
          srcset=""
        />
        <h1 className="mb-6 text-2xl">Sign Up for an Individual</h1>

        <Formik
          className="w-full "
          initialValues={{
            firstName: "",
            lastName: "",
            tel: "",
            Gender: "",
            email: "",
            password: "",
          }}
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
              className=" flex w-11/12  flex-col items-center justify-center "
              onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                <div className="w-full mr-1">
                  <p className="text-l">First Name :</p>
                  <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>

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
                </div>{" "}
                <div className="w-full ">
                  <p className="text-l">Last Name :</p>
                  <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>

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
                </div>{" "}
              </div>
              <div className="w-full">
                <p className="text-l">Email :</p>
                <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>

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
              </div>{" "}
              <div className="w-full">
                <p className="text-l">Phone Number :</p>
                <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>

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
                <p className="text-l">Gender :</p>
                <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24">
                    <path d="M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z" />
                  </svg>
                  <select
                    value={""}
                    name="selectedVegetables"
                    className="px-4 w-full focus:outline-none bg-white">
                    <option value="" disabled selected>
                      Select a Gender
                    </option>
                    <option value="cucumber">Male</option>
                    <option value="corn">Femmale</option>
                  </select>
                  {/* <input
                      className="px-4 w-full focus:outline-none"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    /> */}
                </div>
                <p className="mb-4 text-red-500">
                  {" "}
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div className="w-full">
                <p className="text-l">Password :</p>
                <div className=" flex justify-start items-center px-2 input rounded-xl h-10 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <input
                    className="w-full  px-4 focus:outline-none"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                <p className=" mb-4 text-red-500">
                  {" "}
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              <div className="w-full">
                <p className="text-l">Confirm Password :</p>
                <div className=" flex justify-start items-center px-2 input rounded-xl h-10 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <input
                    className="w-full  px-4 focus:outline-none"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
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
                Sign Up
              </button>
              <p className=" mb-4 text-red-500"> {error}</p>
            </form>
          )}
        </Formik>
        <h1 className="mb-4 text-l">or continue with :</h1>
        <button
          type="button"
          class="w-5/6   text-white   bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          <svg
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
          </svg>
          Sign up with Google<div></div>
        </button>
        <p className="w-8/12 text-gray-600 text-center ">
          Have an Account ?{" "}
          <Link
            href={`/${locale}/In`}
            className="text-blue-700 hover:underline cursor-pointer">
            Login Here
          </Link>{" "}
        </p>

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
}

export default Individuals;
