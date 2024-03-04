import Image from "next/image";
import { useTranslations } from "next-intl";
// import About from "./About/page";
import LandingPage from "./LandingPage/page";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home({ params: { locale } }) {
  // const locale = await getLocale();
  const t = useTranslations("Index");
  return (
    <main className="">
      <LandingPage />
      {/* <Link href={`${locale}/About`}>Go to about</Link>
      <Link href={`${locale}/Contact`}>Go to Contact</Link>
      <Footer /> */}
    </main>
  );
}
