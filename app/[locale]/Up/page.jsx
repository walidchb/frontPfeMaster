"use client";
import Link from "next/link";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import AccountTypeCard from "@/components/AccountTypeCard";
import { Formik } from "formik";

function SignUp() {
  const [view, setView] = useState(1);
  const t = useTranslations("Index");
  const locale = useLocale();

  const [error, setErrorCred] = useState("");
  return (
    <div className="bg-[url('/BG.jpeg')] text-black max-w-screen min-h-screen flex flex-col items-center justify-center  ">
      <div className="  flex flex-col sm:flex-row  items-center justify-center w-screen  ">
        <AccountTypeCard type={1} />
        <AccountTypeCard type={2} />
      </div>
      <div className="border-t-2 border-blue-700 my-4 w-8/12 "></div>

      <p className="w-8/12 text-gray-600 text-center mb-4 ">
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
  );
}

export default SignUp;
