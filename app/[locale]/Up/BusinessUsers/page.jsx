"use client";
import Link from "next/link";
import "./style.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { FaGoogle } from "react-icons/fa";
import { FaLocationArrow, FaCity } from "react-icons/fa";
import { IoEyeSharp, IoPersonSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import {
  MdAlternateEmail,
  MdBusinessCenter,
  MdOutlinePassword,
} from "react-icons/md";
import * as Yup from "yup";

import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import AccountTypeCard from "@/components/AccountTypeCard";
import { Formik } from "formik";
import Select from "react-select";
import { useFormik } from "formik";
function BusinessUsers() {
  const getOptionLabel = (option) => option.name;
  const getOptionValue = (option) => JSON.stringify(option);
  const countries = [
    {
      name: "Afghanistan",
      code: "AF",
      phone_code: "+93",
    },
    {
      name: "Albania",
      code: "AL",
      phone_code: "+355",
    },
    {
      name: "Algeria",
      code: "DZ",
      phone_code: "+213",
    },
    {
      name: "Andorra",
      code: "AD",
      phone_code: "+376",
    },
    {
      name: "Angola",
      code: "AO",
      phone_code: "+244",
    },
    {
      name: "Antigua and Barbuda",
      code: "AG",
      phone_code: "+1",
    },
    {
      name: "Argentina",
      code: "AR",
      phone_code: "+54",
    },
    {
      name: "Armenia",
      code: "AM",
      phone_code: "+374",
    },
    {
      name: "Australia",
      code: "AU",
      phone_code: "+61",
    },
    {
      name: "Austria",
      code: "AT",
      phone_code: "+43",
    },
    {
      name: "Azerbaijan",
      code: "AZ",
      phone_code: "+994",
    },
    {
      name: "Bahamas",
      code: "BS",
      phone_code: "+1",
    },
    {
      name: "Bahrain",
      code: "BH",
      phone_code: "+973",
    },
    {
      name: "Bangladesh",
      code: "BD",
      phone_code: "+880",
    },
    {
      name: "Barbados",
      code: "BB",
      phone_code: "+1",
    },
    {
      name: "Belarus",
      code: "BY",
      phone_code: "+375",
    },
    {
      name: "Belgium",
      code: "BE",
      phone_code: "+32",
    },
    {
      name: "Belize",
      code: "BZ",
      phone_code: "+501",
    },
    {
      name: "Benin",
      code: "BJ",
      phone_code: "+229",
    },
    {
      name: "Bhutan",
      code: "BT",
      phone_code: "+975",
    },
    {
      name: "Bolivia",
      code: "BO",
      phone_code: "+591",
    },
    {
      name: "Bosnia and Herzegovina",
      code: "BA",
      phone_code: "+387",
    },
    {
      name: "Botswana",
      code: "BW",
      phone_code: "+267",
    },
    {
      name: "Brazil",
      code: "BR",
      phone_code: "+55",
    },
    {
      name: "Brunei",
      code: "BN",
      phone_code: "+673",
    },
    {
      name: "Bulgaria",
      code: "BG",
      phone_code: "+359",
    },
    {
      name: "Burkina Faso",
      code: "BF",
      phone_code: "+226",
    },
    {
      name: "Burundi",
      code: "BI",
      phone_code: "+257",
    },
    {
      name: "Cabo Verde",
      code: "CV",
      phone_code: "+238",
    },
    {
      name: "Cambodia",
      code: "KH",
      phone_code: "+855",
    },
    {
      name: "Cameroon",
      code: "CM",
      phone_code: "+237",
    },
    {
      name: "Canada",
      code: "CA",
      phone_code: "+1",
    },
    {
      name: "Central African Republic",
      code: "CF",
      phone_code: "+236",
    },
    {
      name: "Chad",
      code: "TD",
      phone_code: "+235",
    },
    {
      name: "Chile",
      code: "CL",
      phone_code: "+56",
    },
    {
      name: "China",
      code: "CN",
      phone_code: "+86",
    },
    {
      name: "Colombia",
      code: "CO",
      phone_code: "+57",
    },
    {
      name: "Comoros",
      code: "KM",
      phone_code: "+269",
    },
    {
      name: "Congo",
      code: "CG",
      phone_code: "+242",
    },
    {
      name: "Costa Rica",
      code: "CR",
      phone_code: "+506",
    },
    {
      name: "Croatia",
      code: "HR",
      phone_code: "+385",
    },
    {
      name: "Cuba",
      code: "CU",
      phone_code: "+53",
    },
    {
      name: "Cyprus",
      code: "CY",
      phone_code: "+357",
    },
    {
      name: "Czech Republic",
      code: "CZ",
      phone_code: "+420",
    },
    {
      name: "Denmark",
      code: "DK",
      phone_code: "+45",
    },
    {
      name: "Djibouti",
      code: "DJ",
      phone_code: "+253",
    },
    {
      name: "Dominica",
      code: "DM",
      phone_code: "+1",
    },
    {
      name: "Dominican Republic",
      code: "DO",
      phone_code: "+1",
    },
    {
      name: "Ecuador",
      code: "EC",
      phone_code: "+593",
    },
    {
      name: "Egypt",
      code: "EG",
      phone_code: "+20",
    },
    {
      name: "El Salvador",
      code: "SV",
      phone_code: "+503",
    },
    {
      name: "Equatorial Guinea",
      code: "GQ",
      phone_code: "+240",
    },
    {
      name: "Eritrea",
      code: "ER",
      phone_code: "+291",
    },
    {
      name: "Estonia",
      code: "EE",
      phone_code: "+372",
    },
    {
      name: "Eswatini",
      code: "SZ",
      phone_code: "+268",
    },
    {
      name: "Ethiopia",
      code: "ET",
      phone_code: "+251",
    },
    {
      name: "Fiji",
      code: "FJ",
      phone_code: "+679",
    },
    {
      name: "Finland",
      code: "FI",
      phone_code: "+358",
    },
    {
      name: "France",
      code: "FR",
      phone_code: "+33",
    },
    {
      name: "Gabon",
      code: "GA",
      phone_code: "+241",
    },
    {
      name: "Gambia",
      code: "GM",
      phone_code: "+220",
    },
    {
      name: "Georgia",
      code: "GE",
      phone_code: "+995",
    },
    {
      name: "Germany",
      code: "DE",
      phone_code: "+49",
    },
    {
      name: "Ghana",
      code: "GH",
      phone_code: "+233",
    },
    {
      name: "Greece",
      code: "GR",
      phone_code: "+30",
    },
    {
      name: "Grenada",
      code: "GD",
      phone_code: "+1",
    },
    {
      name: "Guatemala",
      code: "GT",
      phone_code: "+502",
    },
    {
      name: "Guinea",
      code: "GN",
      phone_code: "+224",
    },
    {
      name: "Guinea-Bissau",
      code: "GW",
      phone_code: "+245",
    },
    {
      name: "Guyana",
      code: "GY",
      phone_code: "+592",
    },
    {
      name: "Haiti",
      code: "HT",
      phone_code: "+509",
    },
    {
      name: "Honduras",
      code: "HN",
      phone_code: "+504",
    },
    {
      name: "Hungary",
      code: "HU",
      phone_code: "+36",
    },
    {
      name: "Iceland",
      code: "IS",
      phone_code: "+354",
    },
    {
      name: "India",
      code: "IN",
      phone_code: "+91",
    },
    {
      name: "Indonesia",
      code: "ID",
      phone_code: "+62",
    },
    {
      name: "Iran",
      code: "IR",
      phone_code: "+98",
    },
    {
      name: "Iraq",
      code: "IQ",
      phone_code: "+964",
    },
    {
      name: "Ireland",
      code: "IE",
      phone_code: "+353",
    },

    {
      name: "Italy",
      code: "IT",
      phone_code: "+39",
    },
    {
      name: "Jamaica",
      code: "JM",
      phone_code: "+1",
    },
    {
      name: "Japan",
      code: "JP",
      phone_code: "+81",
    },
    {
      name: "Jordan",
      code: "JO",
      phone_code: "+962",
    },
    {
      name: "Kazakhstan",
      code: "KZ",
      phone_code: "+7",
    },
    {
      name: "Kenya",
      code: "KE",
      phone_code: "+254",
    },
    {
      name: "Kiribati",
      code: "KI",
      phone_code: "+686",
    },
    {
      name: "Kuwait",
      code: "KW",
      phone_code: "+965",
    },
    {
      name: "Kyrgyzstan",
      code: "KG",
      phone_code: "+996",
    },
    {
      name: "Laos",
      code: "LA",
      phone_code: "+856",
    },
    {
      name: "Latvia",
      code: "LV",
      phone_code: "+371",
    },
    {
      name: "Lebanon",
      code: "LB",
      phone_code: "+961",
    },
    {
      name: "Lesotho",
      code: "LS",
      phone_code: "+266",
    },
    {
      name: "Liberia",
      code: "LR",
      phone_code: "+231",
    },
    {
      name: "Libya",
      code: "LY",
      phone_code: "+218",
    },
    {
      name: "Liechtenstein",
      code: "LI",
      phone_code: "+423",
    },
    {
      name: "Lithuania",
      code: "LT",
      phone_code: "+370",
    },
    {
      name: "Luxembourg",
      code: "LU",
      phone_code: "+352",
    },
    {
      name: "Madagascar",
      code: "MG",
      phone_code: "+261",
    },
    {
      name: "Mongolia",
      code: "MN",
      phone_code: "+976",
    },
    {
      name: "Montenegro",
      code: "ME",
      phone_code: "+382",
    },
    {
      name: "Morocco",
      code: "MA",
      phone_code: "+212",
    },
    {
      name: "Mozambique",
      code: "MZ",
      phone_code: "+258",
    },
    {
      name: "Myanmar",
      code: "MM",
      phone_code: "+95",
    },
    {
      name: "Namibia",
      code: "NA",
      phone_code: "+264",
    },
    {
      name: "Nauru",
      code: "NR",
      phone_code: "+674",
    },
    {
      name: "Nepal",
      code: "NP",
      phone_code: "+977",
    },
    {
      name: "Netherlands",
      code: "NL",
      phone_code: "+31",
    },
    {
      name: "New Zealand",
      code: "NZ",
      phone_code: "+64",
    },
    {
      name: "Nicaragua",
      code: "NI",
      phone_code: "+505",
    },
    {
      name: "Niger",
      code: "NE",
      phone_code: "+227",
    },
    {
      name: "Nigeria",
      code: "NG",
      phone_code: "+234",
    },
    {
      name: "North Macedonia",
      code: "MK",
      phone_code: "+389",
    },
    {
      name: "Norway",
      code: "NO",
      phone_code: "+47",
    },
    {
      name: "Oman",
      code: "OM",
      phone_code: "+968",
    },
    {
      name: "Pakistan",
      code: "PK",
      phone_code: "+92",
    },
    { name: "Palestine", code: "PS", phone_code: "+970" },
    {
      name: "Palau",
      code: "PW",
      phone_code: "+680",
    },
    {
      name: "Panama",
      code: "PA",
      phone_code: "+507",
    },
    {
      name: "Papua New Guinea",
      code: "PG",
      phone_code: "+675",
    },
    {
      name: "Paraguay",
      code: "PY",
      phone_code: "+595",
    },
    {
      name: "Peru",
      code: "PE",
      phone_code: "+51",
    },
    {
      name: "Philippines",
      code: "PH",
      phone_code: "+63",
    },
    {
      name: "Poland",
      code: "PL",
      phone_code: "+48",
    },
    {
      name: "Portugal",
      code: "PT",
      phone_code: "+351",
    },
    {
      name: "Qatar",
      code: "QA",
      phone_code: "+974",
    },
    {
      name: "Romania",
      code: "RO",
      phone_code: "+40",
    },
    {
      name: "Russia",
      code: "RU",
      phone_code: "+7",
    },
    {
      name: "Rwanda",
      code: "RW",
      phone_code: "+250",
    },
    {
      name: "Saint Kitts and Nevis",
      code: "KN",
      phone_code: "+1",
    },
    {
      name: "Saint Lucia",
      code: "LC",
      phone_code: "+1",
    },
    {
      name: "Saint Vincent and the Grenadines",
      code: "VC",
      phone_code: "+1",
    },
    {
      name: "Samoa",
      code: "WS",
      phone_code: "+685",
    },
    {
      name: "San Marino",
      code: "SM",
      phone_code: "+378",
    },
    {
      name: "Sao Tome and Principe",
      code: "ST",
      phone_code: "+239",
    },
    {
      name: "Saudi Arabia",
      code: "SA",
      phone_code: "+966",
    },
    {
      name: "Senegal",
      code: "SN",
      phone_code: "+221",
    },
    {
      name: "Serbia",
      code: "RS",
      phone_code: "+381",
    },
    {
      name: "Seychelles",
      code: "SC",
      phone_code: "+248",
    },
    {
      name: "Sierra Leone",
      code: "SL",
      phone_code: "+232",
    },
    {
      name: "Singapore",
      code: "SG",
      phone_code: "+65",
    },
    {
      name: "Slovakia",
      code: "SK",
      phone_code: "+421",
    },
    {
      name: "Slovenia",
      code: "SI",
      phone_code: "+386",
    },
    {
      name: "Solomon Islands",
      code: "SB",
      phone_code: "+677",
    },
    {
      name: "Somalia",
      code: "SO",
      phone_code: "+252",
    },
    {
      name: "South Africa",
      code: "ZA",
      phone_code: "+27",
    },
    {
      name: "South Korea",
      code: "KR",
      phone_code: "+82",
    },
    {
      name: "South Sudan",
      code: "SS",
      phone_code: "+211",
    },
    {
      name: "Spain",
      code: "ES",
      phone_code: "+34",
    },
    {
      name: "Sri Lanka",
      code: "LK",
      phone_code: "+94",
    },
    {
      name: "Sudan",
      code: "SD",
      phone_code: "+249",
    },
    {
      name: "Suriname",
      code: "SR",
      phone_code: "+597",
    },
    {
      name: "Sweden",
      code: "SE",
      phone_code: "+46",
    },
    {
      name: "Switzerland",
      code: "CH",
      phone_code: "+41",
    },
    {
      name: "Syria",
      code: "SY",
      phone_code: "+963",
    },
    {
      name: "Taiwan",
      code: "TW",
      phone_code: "+886",
    },
    {
      name: "Tajikistan",
      code: "TJ",
      phone_code: "+992",
    },
    {
      name: "Tanzania",
      code: "TZ",
      phone_code: "+255",
    },
    {
      name: "Thailand",
      code: "TH",
      phone_code: "+66",
    },
    {
      name: "Timor-Leste",
      code: "TL",
      phone_code: "+670",
    },
    {
      name: "Togo",
      code: "TG",
      phone_code: "+228",
    },
    {
      name: "Tonga",
      code: "TO",
      phone_code: "+676",
    },
    {
      name: "Trinidad and Tobago",
      code: "TT",
      phone_code: "+1",
    },
    {
      name: "Tunisia",
      code: "TN",
      phone_code: "+216",
    },
    {
      name: "Turkey",
      code: "TR",
      phone_code: "+90",
    },
    {
      name: "Turkmenistan",
      code: "TM",
      phone_code: "+993",
    },
    {
      name: "Tuvalu",
      code: "TV",
      phone_code: "+688",
    },
    {
      name: "Uganda",
      code: "UG",
      phone_code: "+256",
    },
    {
      name: "Ukraine",
      code: "UA",
      phone_code: "+380",
    },
    {
      name: "United Arab Emirates",
      code: "AE",
      phone_code: "+971",
    },
    {
      name: "United Kingdom",
      code: "GB",
      phone_code: "+44",
    },
    {
      name: "United States",
      code: "US",
      phone_code: "+1",
    },
    {
      name: "Uruguay",
      code: "UY",
      phone_code: "+598",
    },
    {
      name: "Uzbekistan",
      code: "UZ",
      phone_code: "+998",
    },
    {
      name: "Vanuatu",
      code: "VU",
      phone_code: "+678",
    },
    {
      name: "Vatican City",
      code: "VA",
      phone_code: "+39",
    },
    {
      name: "Venezuela",
      code: "VE",
      phone_code: "+58",
    },
    {
      name: "Vietnam",
      code: "VN",
      phone_code: "+84",
    },
    {
      name: "Yemen",
      code: "YE",
      phone_code: "+967",
    },
    {
      name: "Zambia",
      code: "ZM",
      phone_code: "+260",
    },
    {
      name: "Zimbabwe",
      code: "ZW",
      phone_code: "+263",
    },
  ];

  const [view, setView] = useState(1);
  const t = useTranslations("Index");
  const locale = useLocale();
  const [value, setValue] = useState();
  function handleChangePhoneNumber(value) {
    // setValue(e);
    formik.setFieldValue("phoneNumber", value);
    // console.log(value);
  }
  const [selectedCountry, setSelectedCountry] = useState(false);
  const [error, setErrorCred] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleChangeCountry = (selectedOption) => {
    setSelectedCountry(selectedOption);
    formik.setFieldValue("country", JSON.stringify(selectedOption));
    console.log("Selected option:", selectedOption);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    businessName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    country: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      businessName: "",
      email: "",
      phoneNumber: "",
      country: "",
      state: "",
      city: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
      setValue("");
      setSelectedCountry(null);
    },
  });
  return (
    <div className="bg-[url('/BG.jpeg')]  flex items-center justify-center  text-black max-w-screen min-h-screen">
      <div className="loginDiv my-4 w-11/12 flex md:w-8/12 lg:w-5/12 flex-col items-center justify-center bg-white rounded-2xl py-12 md:py-8">
        {/* <img src="/BG.jpeg" alt="sdfhsf" srcset="" /> */}
        <img
          src="https://static.wixstatic.com/media/23fb1b_684b7f2399ae47e4beea5f5987c613f0~mv2.jpg/v1/fill/w_137,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/logo_tekkolab.jpg"
          alt=""
        />
        <h1 className="mb-6 text-2xl">Sign Up for a Business</h1>

        <div className="w-full flex justify-center items-center">
          <form
            className=" flex w-11/12  flex-col items-center justify-center "
            onSubmit={formik.handleSubmit}>
            <div className="flex justify-start w-full px-2">
              <p className="text-l mb-2">Business Owner :</p>
            </div>
            {/* owner div */}
            <div className="rounded-2xl border p-4 w-full">
              <div className=" px-4  flex-col sm:flex-row flex justify-center items-center w-full  ">
                <div className="w-full  sm:mb-0 sm:mr-1">
                  <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                    <IoPersonSharp className="h-5 w-5" />

                    <input
                      className="px-4 w-full focus:outline-none"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                  </div>
                </div>{" "}
                <p className="sm:hidden text-red-500 w-full">
                  {" "}
                  {formik.errors.firstName &&
                    formik.touched.firstName &&
                    formik.errors.firstName}
                </p>
                <div className="w-full mt-2 sm:mt-0">
                  {/* <p className="text-l">Last Name :</p> */}
                  <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                    <IoPersonSharp className="h-5 w-5" />

                    <input
                      className="px-4 w-full focus:outline-none"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                  </div>
                </div>{" "}
                <p className="sm:hidden text-red-500 w-full">
                  {" "}
                  {formik.errors.lastName &&
                    formik.touched.lastName &&
                    formik.errors.lastName}
                </p>
              </div>
              <div className=" hidden px-4 sm:flex justify-center items-center w-full mb-2">
                <p className=" text-red-500 w-2/4">
                  {" "}
                  {formik.errors.firstName &&
                    formik.touched.firstName &&
                    formik.errors.firstName}
                </p>
                <p className=" text-red-500 w-2/4">
                  {" "}
                  {formik.errors.lastName &&
                    formik.touched.lastName &&
                    formik.errors.lastName}
                </p>
              </div>
            </div>
            <div className="flex justify-start w-full px-2 mt-4">
              <p className="text-l mb-2">Business Informations :</p>
            </div>
            {/* busniess div */}

            <div className=" w-full rounded-2xl p-4 border">
              <div className="w-full">
                <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                  <MdBusinessCenter className="h-5 w-5" />

                  <input
                    className="px-4 w-full focus:outline-none"
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.businessName}
                  />
                </div>
                <p className="mb-4 text-red-500">
                  {" "}
                  {formik.errors.businessName &&
                    formik.touched.businessName &&
                    formik.errors.businessName}
                </p>
              </div>{" "}
              <div className="w-full">
                <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                  <MdAlternateEmail className="h-5 w-5" />
                  <input
                    className="px-4 w-full focus:outline-none"
                    type="text"
                    name="email"
                    placeholder="E-mail"
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
              </div>
              <div className="w-full">
                <PhoneInput
                  className="w-full h-10 focus:outline-none input rounded-xl px-4"
                  // defaultCountry="DZ"
                  placeholder="Enter phone number"
                  value={value}
                  onChange={handleChangePhoneNumber}
                />
                <p className="mb-4 text-red-500">
                  {" "}
                  {formik.errors.phoneNumber &&
                    formik.touched.phoneNumber &&
                    formik.errors.phoneNumber}
                </p>
              </div>
              <p className="text-l mb-2">Address :</p>
              <div className="flex-col sm:flex-row   flex justify-center items-center w-full mb-2 ">
                <div className="w-full   sm:mb-0 sm:mr-1">
                  <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                    {!selectedCountry ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24">
                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
                      </svg>
                    ) : (
                      <img
                        className="h-6 w-6"
                        alt="United States"
                        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry.code}.svg`}
                      />
                    )}
                    <Select
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          // borderColor: state.isFocused ? "grey" : "red",
                          borderWidth: state.isFocused ? 0 : 0,
                        }),
                      }}
                      placeholder="Country"
                      className="w-full"
                      options={countries}
                      onChange={handleChangeCountry}
                      getOptionLabel={getOptionLabel}
                      getOptionValue={getOptionValue}
                    />
                  </div>
                </div>
                <p className="sm:hidden w-full text-red-500 ">
                  {" "}
                  {formik.errors.country &&
                    formik.touched.country &&
                    formik.errors.country}
                </p>
                <div className="w-full mt-2 sm:mt-0 ">
                  <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                    <FaLocationArrow className="h-5 w-5" />

                    <input
                      className="px-4 w-full focus:outline-none"
                      type="text"
                      placeholder="State / Province"
                      name="state"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.state}
                    />
                  </div>
                </div>{" "}
                <p className="sm:hidden w-full text-red-500 ">
                  {" "}
                  {formik.errors.state &&
                    formik.touched.state &&
                    formik.errors.state}
                </p>
              </div>
              <div className="hidden sm:flex justify-center items-center w-full mb-2">
                <p className=" text-red-500 w-2/4">
                  {" "}
                  {formik.errors.country &&
                    formik.touched.country &&
                    formik.errors.country}
                </p>
                <p className=" text-red-500 w-2/4">
                  {" "}
                  {formik.errors.state &&
                    formik.touched.state &&
                    formik.errors.state}
                </p>
              </div>
              <div className="w-full">
                <div className="flex justify-start items-center px-2 input rounded-xl h-10 ">
                  <FaCity className="h-5 w-5" />

                  <input
                    className="px-4 w-full focus:outline-none"
                    type="text"
                    name="city"
                    placeholder="Street - City"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                  />
                </div>
                <p className="mb-4 text-red-500">
                  {" "}
                  {formik.errors.city &&
                    formik.touched.city &&
                    formik.errors.city}
                </p>
              </div>
            </div>
            {/* password */}
            <div className="w-full mt-4">
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
            <div className="w-full">
              <p className="text-l">Confirm Password :</p>
              <div className=" flex justify-start items-center px-2 input rounded-xl h-10 ">
                <MdOutlinePassword className="h-5 w-5" />

                <input
                  className="w-full  px-4 focus:outline-none"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                <span
                  className="cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? (
                    <FaEyeSlash className="w-5 h-5" />
                  ) : (
                    <IoEyeSharp className="w-5 h-5" />
                  )}
                </span>
              </div>
              <p className=" mb-4 text-red-500">
                {" "}
                {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword}
              </p>
            </div>
            <button
              className={`w-full  my-4 rounded border-b-4  px-4 py-2 font-bold text-white ${
                formik.isSubmitting
                  ? "border-violet-500 bg-violet-400"
                  : "border-violet-700 bg-violet-500 hover:border-violet-500 hover:bg-violet-400"
              }  `}
              type="submit"
              disabled={formik.isSubmitting}>
              {!formik.isSubmitting ? (
                "Sign Up"
              ) : (
                <div className="flex justify-center items-center">
                  <span className="text-sm">Loading</span>
                  <div className="h-6 w-6 loader ml-2 "></div>{" "}
                </div>
              )}
            </button>
            <p className=" mb-4 text-red-500"> {error}</p>
          </form>
        </div>
        <h1 className="mb-4 text-l">or continue with :</h1>
        <button
          type="button"
          className="w-5/6   text-white   bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          <FaGoogle className="mr-2 -ml-1 w-4 h-4" />
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
