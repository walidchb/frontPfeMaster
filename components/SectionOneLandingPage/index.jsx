"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

function SectionOneLandingPage() {
  const locale = useLocale();
  const router = useRouter();

  return (
    <section className="bg-[url('/BG.jpeg')]  text-black flex justify-around items-center  mx-auto py-20 ">
      {/* <Image src={image} alt="Task Management App" className="home-page__image" width={500} height={300} /> */}
      <div className="w-5/12  flex flex-col justify-center items-center">
        <Image
          src="/images/accueil.jpeg"
          alt=""
          srcSet=""
          className="  w-4/6 "
          width={384}
          height={384}
          style={{
            borderRadius: "5px",
            transition: "transform 0.3s",
            transformStyle: "preserve-3d",
            perspective: "1000px",
            transform: "rotateX(20deg) rotateY(-30deg)",
          }}
        />
      </div>

      <div className="w-7/12 px-4 md:px-8 lg:px-20 xl:px-40 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Simplify Your Task Management
        </h1>
        <p className="text-gray-600 leading-6 mb-8">
          Our task management app helps you stay organized and productive. With
          a simple and intuitive interface, you can easily manage your tasks,
          set due dates, and track progress.
        </p>
        <button
          onClick={() => {
            router.push(`/${locale}/Up`);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default SectionOneLandingPage;
