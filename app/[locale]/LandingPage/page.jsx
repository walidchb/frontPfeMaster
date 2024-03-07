import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SectionOneLandingPage from "@/components/SectionOneLandingPage";
import AboutUs from "@/components/AboutUs";

function LandingPage() {
  return (
    <div className="bg-red-600 w-screen h-screen">
      <NavBar />
      <AboutUs />
      <SectionOneLandingPage />
      <Footer />
    </div>
  );
}

export default LandingPage;
