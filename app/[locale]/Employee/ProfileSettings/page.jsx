"use client";
import React, { useState } from "react";
import {
  FaUserAlt,
  FaUserEdit,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaEye,
  FaEyeSlash,
  FaBars,
  FaEdit,
} from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { Formik } from "formik";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
const ProfileSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCancel = () => {
    setIsEditMode(false);
    setShowPassword(false);
  };
  const handleEditClick = () => {
    setIsEditMode(true);
    setShowTooltip(false);
    setShowPassword(false);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    setShowPassword(false);
    // Ajouter ici la logique pour sauvegarder les modifications du profil
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <div className=" min-h-fit">
      <NavBarAuth />
      <div className="py-20 px-5 h-full bg-[url('/BG.jpeg')]">
        <div className="bg-[#314155]  h-16 flex items-center justify-center px-4 m-auto  md:w-2/3 rounded-t-lg rounded-tr-lg">
          <MdSettings className="text-2xl text-white mr-4" />
          <h1 className="text-2xl text-white">Settings</h1>
        </div>
        <div className="flex flex-col m-auto md:w-2/3 h-fit  bg-white p-2 sm:p-10 rounded-b-lg rounded-bl-lg shadow-md">
          <div className="flex items-center  ">
            <div className="bg-[#314155] min-w-20 min-h-20 flex items-center justify-center  rounded-full">
              <FaUserAlt className="h-10 w-10 text-white " />
            </div>
            <div className=" ml-6 flex-1">
              <h2 className="text-lg text-black font-semibold font-serif mb-1">
                walid chebbab
              </h2>
              <p className="text-gray-500">Développeur</p>
              <p className="text-gray-500">ID: 00014A</p>
              <p className="text-gray-500 font-bold">34 ans</p>
            </div>
            {!isEditMode && (
              <div className="relative">
                <button
                  type="button"
                  onClick={handleEditClick}
                  className="font-medium "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <FaEdit className="text-4xl text-[#314155] hover:text-indigo-700" />
                </button>
                {showTooltip && (
                  <div className="absolute right-0 bg-gray-800 text-white p-2 rounded-md shadow-lg z-10 w-32 text-center">
                    Modifier le profil
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="w-full">
            {isEditMode ? (
              <Formik
                className="w-full"
                initialValues={{
                  FirstName: "Doe",
                  LastName: "John",
                  Email: "john.doe@example.com",
                  Phone: "0123456789",
                  Password: "0123456789",
                }}
                validate={(values) => {
                  const errors = {};
                  // Ajoutez vos règles de validation ici
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(async () => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                  handleSaveClick();
                }}>
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                  /* and other goodies */
                }) => (
                  <form
                    className="flex w-full text-black flex-col items-center justify-center"
                    onSubmit={handleSubmit}>
                    <div className="w-full">
                      <div className="flex ml-6 mr-6 justify-start items-center px-2 input border-b border-[#314155] h-10">
                        <FaUserAlt className="text-gray-500 mr-2" />
                        <p className="text-l mr-2 w-24">Nom :</p>
                        <input
                          className="px-4  w-full focus:outline-none"
                          type="text"
                          name="FirstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.FirstName}
                        />
                      </div>
                      <p className="mb-4 text-red-500">
                        {errors.FirstName &&
                          touched.FirstName &&
                          errors.FirstName}
                      </p>
                    </div>

                    <div className="w-full mt-4">
                      <div className="flex ml-6 mr-6 justify-start items-center px-2 input border-b border-[#314155] h-10">
                        <FaUserAlt className="text-gray-500 mr-2" />
                        <p className="text-l mr-2 w-24">Prénom :</p>
                        <input
                          className="px-4 w-full focus:outline-none"
                          type="text"
                          name="LastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.LastName}
                        />
                      </div>
                      <p className="mb-4 text-red-500">
                        {errors.LastName && touched.LastName && errors.LastName}
                      </p>
                    </div>
                    <div className="w-full mt-4">
                      <div className="flex ml-6 mr-6 justify-start items-center px-2 input border-b border-[#314155] h-10">
                        <FaEnvelope className="sm:mr-2 h-6 w-6 text-gray-500 mr-2" />
                        <p className="hidden sm:block text-l mr-2 w-24">
                          Email :
                        </p>
                        <input
                          className="px-4 w-full focus:outline-none"
                          type="email"
                          name="Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.Email}
                        />
                      </div>
                      <p className="mb-4 text-red-500">
                        {errors.Email && touched.Email && errors.Email}
                      </p>
                    </div>
                    <div className="w-full mt-4">
                      <div className="flex ml-6 mr-6 justify-start items-center px-2 input border-b border-[#314155] h-10">
                        <FaPhone className="text-gray-500 mr-2" />
                        <p className="hidden sm:block text-l mr-2 w-24">
                          Phone :
                        </p>
                        <input
                          className="px-4 w-full focus:outline-none"
                          type="number"
                          name="Phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.Phone}
                        />
                      </div>
                      <p className="mb-4 text-red-500">
                        {errors.Phone && touched.Phone && errors.Phone}
                      </p>
                    </div>
                    <div className="w-full mt-4">
                      <div className="flex ml-6 mr-6 justify-start items-center px-2 input border-b border-[#314155] h-10">
                        <div className="w-26 flex">
                          <FaLock className="text-gray-500 mr-2" />
                          <p className="hidden sm:block text-l">Password </p>
                        </div>
                        <input
                          className="px-4 focus:outline-none w-full"
                          type={showPassword ? "text" : "password"}
                          name="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.Password}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="focus:outline-none">
                          {!showPassword ? (
                            <FaEyeSlash className="text-gray-500" />
                          ) : (
                            <FaEye className="text-gray-500" />
                          )}
                        </button>
                      </div>
                      <p className="mb-4 text-red-500">
                        {errors.Password && touched.Password && errors.Password}
                      </p>
                    </div>
                    <div className="flex row w-full">
                      <button
                        className="bg-[#314155] hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md mt-12 w-1/2 flex items-center justify-center"
                        type="submit"
                        disabled={isSubmitting}>
                        <FaEdit className="mr-2" />
                        Enregistrer
                      </button>
                      <button
                        className="bg-gray-100 ml-4 hover:bg-gray-200 text-black font-medium py-2 px-4 rounded-md mt-12 w-1/2 flex items-center justify-center"
                        type="button"
                        onClick={() => handleCancel()}>
                        Annuler
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            ) : (
              <div className="space-y-4 text-black pb-10">
                <div className="flex  items-center ml-6 mr-6 mt-6 border-b border-[#314155] pb-4">
                  <label
                    htmlFor="name"
                    className="flex font-medium text-gray-700 w-24 mt-6">
                    <FaUserAlt className="mr-2 text-gray-500" />
                    Nom :
                  </label>
                  <p className="ml-8 mt-6">Doe</p>
                </div>
                <div className="flex items-center ml-6 mr-6 mt-6 border-b border-[#314155] pb-4">
                  <label
                    htmlFor="firstname"
                    className="flex font-medium text-gray-700 w-24 mt-6">
                    <FaUserAlt className="mr-2 text-gray-500" />
                    Prénom :
                  </label>
                  <p className="ml-8 mt-6">John</p>
                </div>
                <div className="flex items-center ml-6 mr-6 mt-6 border-b border-[#314155] pb-4">
                  <FaEnvelope className="sm:mr-2 h-6 w-6 text-gray-500" />
                  <label
                    htmlFor="email"
                    className="hidden sm:block font-medium text-gray-700 w-24 ">
                    Email :
                  </label>
                  <p className="sm:ml-8 ml-2 sm:">john.doe@example.com</p>
                </div>
                <div className="flex items-center ml-6 mr-6 border-b border-[#314155] pb-4">
                  <FaPhone className="sm:mr-2 h-6 w-6 text-gray-500" />
                  <label
                    htmlFor="phone"
                    className="hidden sm:block font-medium text-gray-700 w-26 ">
                    Téléphone :
                  </label>
                  <p className="sm:ml-8 ml-2 ">0123456789</p>
                </div>
                <div className="flex items-center ml-6 mr-6 border-b border-[#314155] pb-4">
                  <FaLock className="sm:mr-2 h-6 w-6 text-gray-500" />
                  <label
                    htmlFor="phone"
                    className="hidden sm:block font-medium text-gray-700 w-26 ">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="sm:ml-8 ml-2  w-full border-none focus:outline-none"
                    value="0123456789"
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="focus:outline-none ml-4 sm:mt-6">
                    {!showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
