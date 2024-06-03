"use client";
import Image from "next/image";
import LandingPage from "./LandingPage/page";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SectionOneLandingPage from "@/components/SectionOneLandingPage";
import { useEffect } from "react";

export default function Home({ params: { locale } }) {
  // useEffect(() => {
  //   console.log("locale = " + locale);
  //   process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL = `/${locale}/In`;
  // }, []);

  // const locale = await getLocale();

  return <LandingPage />;
}
