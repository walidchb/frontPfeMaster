"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import SectionOneLandingPage from "@/components/SectionOneLandingPage";

function LandingPage() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  if (loader) {
    <Loader />;
  } else {
    return (
      <div className="w-screen h-screen max-w-fit p-0 m-0 ">
        <NavBar currentScreen={0} />
        <SectionOneLandingPage />
        {/* <p className=" text-center w-2/4 bg-yellow-400 text-gray-700 text-lg ">
        &copy; 2023 Task Management App. All rights reserved.
      </p> */}
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
