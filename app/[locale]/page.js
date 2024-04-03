import Image from "next/image";
import LandingPage from "./LandingPage/page";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SectionOneLandingPage from "@/components/SectionOneLandingPage";

export default function Home({ params: { locale } }) {
  // const locale = await getLocale();

  return <LandingPage />;
}
