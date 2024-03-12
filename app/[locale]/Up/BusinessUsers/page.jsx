"use client";
import Link from "next/link";
import "./style.css";

import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import AccountTypeCard from "@/components/AccountTypeCard";
import { Formik } from "formik";

function BusinessUsers() {
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
        <h1 className="mb-6 text-2xl">Sign Up for a Business</h1>

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
              <div className="flex justify-start w-full px-2">
                <p className="text-l mb-2">Business Owner :</p>
              </div>
              {/* owner div */}
              <div className="rounded-2xl p-4 border flex-col sm:flex-row flex justify-center items-center w-full mb-2 ">
                <div className="w-full mb-2 sm:mb-0 sm:mr-1">
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
                      placeholder="First Name"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                </div>{" "}
                <div className="w-full ">
                  {/* <p className="text-l">Last Name :</p> */}
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
                      placeholder="Last Name"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                </div>{" "}
              </div>
              <div className="flex justify-start w-full px-2 mt-4">
                <p className="text-l mb-2">Business Informations :</p>
              </div>
              {/* busniess div */}

              <div className=" w-full rounded-2xl p-4 border">
                <div className="w-full">
                  <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                        clipRule="evenodd"
                      />
                      <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                    </svg>

                    <input
                      className="px-4 w-full focus:outline-none"
                      type="email"
                      name="email"
                      placeholder="Business Name"
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
                  <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg> */}
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
                      placeholder="E-mail"
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
                  <div className="flex  justify-start items-center px-2 input rounded-xl h-10 ">
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
                      placeholder="Phone Number"
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
                <p className="text-l mb-2">Address :</p>
                <div className="flex-col sm:flex-row   flex justify-center items-center w-full mb-2 ">
                  <div className="w-full  mb-2 sm:mb-0 sm:mr-1">
                    <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24">
                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
                      </svg>
                      <select
                        value={""}
                        name="selectedVegetables"
                        className="px-4 w-full focus:outline-none bg-white">
                        <option value="" disabled selected>
                          Country
                        </option>
                        <option value="cucumber">Male</option>
                        <option value="corn">Femmale</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full ">
                    <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24">
                        <path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Zm26-148 162-436-436 162 196 78 78 196Zm-78-196Z" />
                      </svg>

                      <input
                        className="px-4 w-full focus:outline-none"
                        type="email"
                        placeholder="State / Province"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                  </div>{" "}
                </div>
                <div className="w-full">
                  <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24">
                      <path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z" />
                    </svg>

                    <input
                      className="px-4 w-full focus:outline-none"
                      type="email"
                      name="email"
                      placeholder="Street - City"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                </div>
              </div>
              {/* password */}
              <div className="w-full mt-4">
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

export default BusinessUsers;
