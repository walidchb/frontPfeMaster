import Image from "next/image";
import LandingPage from "./LandingPage/page";

export default function Home({ params: { locale } }) {
  // const locale = await getLocale();
  return (
    <main className="w-screen h-screen">
      <LandingPage />
      {/* <Link href={`${locale}/About`}>Go to about</Link>
      <Link href={`${locale}/Contact`}>Go to Contact</Link>
      <Footer /> */}
    </main>
  );
}
