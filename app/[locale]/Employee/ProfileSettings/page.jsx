"use client";
import "./style.css"
import "react-phone-number-input/style.css";
import React, { useState, useEffect } from "react";
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
  FaUserTie, FaBuilding, FaUsers 
} from "react-icons/fa";
import { IoEyeSharp, IoPersonSharp } from "react-icons/io5";
import {
  MdAlternateEmail,
  MdBusinessCenter,
  MdOutlinePassword,
} from "react-icons/md";
import ProtectedRoute from "@/components/ProtectedRoute";
import PhoneInput from "react-phone-number-input";
import { MdSettings } from "react-icons/md";
import { Formik } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import axios from "axios";

const ProfileSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const [userInfo, setUserInfo] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userinfo = localStorage.getItem("userInfo");
      const orga = localStorage.getItem("organization");
      if (userinfo && orga) {
        console.log("userinfoooooooooooooooooooooooooooo");

        let userJson = JSON.parse(userinfo);
        console.log(userinfo);
        setUserInfo(userJson);
        let orgaJson = JSON.parse(orga);
        setOrganization(orgaJson);

        const team = userJson?.team?.find(
          (obj) => obj.Organization === orgaJson._id
        );
        setTeam(team);
      }
    }
  }, []);
  useEffect(() => {
    
    
  }, [userInfo]);
  
  
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
  const getRole = (user) => {
    switch (user?.role) {
      case "orgBoss":
        return "Chef d'organisation"
        break;
      case "prjctBoss":
        return "Chef de projet"
        break;
      case "teamBoss":
        return "Chef d'équipe"
        break;
      case "employee":
        return "Membre d'équipe"
        break;
      default:
        return ""
        break;
    }
  }
  const getUserInf = (user, organization, team) => {
    let html;
    switch (user?.role) {
      case "orgBoss":
        html = (
          <>
            <p className="text-gray-500 flex items-center">
              <FaUserTie className="mr-2" /> {getRole(user)}
            </p>
            <p className="text-gray-500 flex items-center">
              <FaBuilding className="mr-2" /> {organization?.Name}
            </p>
          </>
        );
        break;
      case "prjctBoss":
        html = (
          <>
            <p className="text-gray-500 flex items-center">
              <FaUserTie className="mr-2" /> {getRole(user)}
            </p>
            <p className="text-gray-500 flex items-center">
              <FaBuilding className="mr-2" /> {organization?.Name}
            </p>
          </>
        );
        break;
      case "teamBoss":
        html = (
          <>
            <p className="text-gray-500 flex items-center">
              <FaUserTie className="mr-2" /> {getRole(user)}
            </p>
            <p className="text-gray-500 flex items-center">
              <FaBuilding className="mr-2" /> {organization?.Name}
            </p>
            <p className="text-gray-500 flex items-center">
              <FaUsers className="mr-2" /> {team?.Name}
            </p>
          </>
        );
        break;
      case "employee":
        html = (
          <>
            <p className="text-gray-500 flex items-center">
              <FaUserTie className="mr-2" /> {getRole(user)}
            </p>
            <p className="text-gray-500 flex items-center">
              <FaBuilding className="mr-2" /> {organization?.Name}
            </p>
            <p className="text-gray-500 flex items-center">
              <FaUsers className="mr-2" /> {team?.Name}
            </p>
          </>
        );
        break;
      default:
        html = null;
        break;
    }
    return html;
  };
  function handleChangePhoneNumber(value) {
    // setValue(e);
    console.log(value);
    formik.setFieldValue("phoneNumber", value);
    // console.log(value);
  }
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    phoneNumber: Yup.string().required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:1937",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("values = ", values)

      const sendUserData = async (values) => {
        try {
          const response = await axiosInstance.patch("/users", {
            nom: values.firstName,
            prenom: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
          }, { params: { id: userInfo._id } });
          console.log(response.data);
          let updatedUserInfo = response.data;
          localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
          setUserInfo(updatedUserInfo);
          handleSaveClick();
        } catch (error) {
          console.error("Error:", error?.response?.data?.message);
          
        }
      };

    await  sendUserData(values);

    },
  });
  useEffect(() => {
    if(userInfo){
      formik.setFieldValue("firstName", userInfo?.nom);
      formik.setFieldValue("lastName", userInfo?.prenom);
      formik.setFieldValue("email", userInfo?.email);
      formik.setFieldValue("phoneNumber", userInfo?.phoneNumber);
      formik.setFieldValue("password", userInfo?.password);
    }
    
  }, [userInfo]);
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
            
            <button className="h-20 w-20 text-2xl text-white mr-2 relative flex justify-center items-center rounded-full bg-[#314155] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              {userInfo?.nom[0].toUpperCase()}
              {userInfo?.prenom[0].toUpperCase()}
            </button>
            
            <div className=" ml-6 flex-1">
              <h2 className="text-lg text-black font-semibold font-serif mb-1">
                {userInfo?.nom} {userInfo?.prenom}
              </h2>
              {getUserInf(userInfo, organization, team)}
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
          
            {isEditMode ? (
              <>
                <div className="w-full flex justify-center items-center mt-4">
                  <form
                    className=" flex w-11/12  flex-col items-center justify-center "
                    onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                      <div className="w-full mr-1">
                        <p className="text-l">First Name :</p>
                        <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                          <IoPersonSharp className="h-5 w-5" />

                          <input
                            className="px-4 w-full focus:outline-none"
                            type="text"
                            name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                          />
                        </div>
                        <p className="sm:hidden mb-4 text-red-500">
                          {" "}
                          {formik.errors.firstName &&
                            formik.touched.firstName &&
                            formik.errors.firstName}
                        </p>
                      </div>{" "}
                      <div className="w-full ">
                        <p className="text-l">Last Name :</p>
                        <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                          <IoPersonSharp className="h-5 w-5" />

                          <input
                            className="px-4 w-full focus:outline-none"
                            type="test"
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                          />
                        </div>
                        <p className="sm:hidden mb-4 text-red-500">
                          {" "}
                          {formik.errors.lastName &&
                            formik.touched.lastName &&
                            formik.errors.lastName}
                        </p>
                      </div>{" "}
                    </div>
                    <div className=" hidden px-4 sm:flex justify-center items-center w-full mb-2">
                      <p className=" text-red-500 w-2/4">
                        {formik.errors.firstName &&
                          formik.touched.firstName &&
                          formik.errors.firstName}
                      </p>
                      <p className=" text-red-500 w-2/4">
                        {formik.errors.lastName &&
                          formik.touched.lastName &&
                          formik.errors.lastName}
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="text-l">Email :</p>
                      <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                        <MdAlternateEmail className="h-5 w-5" />

                        <input
                          className="px-4 w-full focus:outline-none"
                          type="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                      </div>
                      <p className="mb-4 text-red-500">
                        {" "}
                        {formik.errors.email &&
                          formik.touched.email &&
                          formik.errors.email}
                      </p>
                    </div>{" "}
                    <div className="w-full">
                      <p className="text-l">Phone Number :</p>
                      <div className="flex items-center px-2 input rounded-xl h-10">
                        <PhoneInput
                          placeholder="Enter phone number"
                          value={formik.values.phoneNumber}
                          onChange={handleChangePhoneNumber}
                          containerClass="w-full"
                          inputClass="w-full h-10 focus:outline-none px-4"
                        />
                      </div>
                      <p className="mb-4 text-red-500">
                        {formik.errors.phoneNumber &&
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber}
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="text-l">Password :</p>
                      <div className=" flex justify-start items-center px-2 input rounded-xl h-10 ">
                        <MdOutlinePassword className="h-5 w-5" />

                        <input
                          className="w-full  px-4 focus:outline-none"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
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
                        {formik.errors.password &&
                          formik.touched.password &&
                          formik.errors.password}
                      </p>
                    </div>
                    
                    
                    <div className="flex row w-full">
                              <button
                                className="bg-[#314155] hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md mt-12 w-1/2 flex items-center justify-center"
                                type="submit"
                                disabled={formik.isSubmitting}>
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
                </div>
              </>
                    

            ) : (
              <div className="w-full flex justify-center items-center mt-4">
                <div className=" flex w-11/12  flex-col items-center justify-center ">
                  <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                    <div className="w-full mr-1 mb-4">
                      <p className="text-l">First Name :</p>
                      <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                        <IoPersonSharp className="h-5 w-5" />
                        <p className="px-4 w-full">{userInfo?.nom}</p>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <p className="text-l">Last Name :</p>
                      <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                        <IoPersonSharp className="h-5 w-5" />
                        <p className="px-4 w-full">{userInfo?.prenom}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mb-4">
                    <p className="text-l">Email :</p>
                    <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                      <MdAlternateEmail className="h-5 w-5" />
                      <p className="px-4 w-full">{userInfo?.email}</p>
                    </div>
                  </div>
                  <div className="w-full mb-4">
                    <p className="text-l">Phone Number :</p>
                    <div className="flex justify-start items-center px-2 input rounded-xl h-10">
                      <PhoneInput
                        
                        value={userInfo?.phoneNumber || ""}
                        disabled={true}
                        containerClass="w-full"
                        inputClass="w-full h-10 focus:outline-none px-4"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-l">Password :</p>
                    <div className=" flex justify-start items-center px-2 input rounded-xl h-10 ">
                      <MdOutlinePassword className="h-5 w-5" />
                      <input
                        className="w-full  px-4 focus:outline-none"
                        type={showPassword ? "text" : "password"}
                        value={userInfo?.password}
                        disabled
                      />
                      <span className="cursor-pointer" onClick={togglePasswordVisibility}>
                      {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <IoEyeSharp className="h-5 w-5" />}
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoute(ProfileSettings);
