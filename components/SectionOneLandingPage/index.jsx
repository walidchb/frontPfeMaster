"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

function SectionOneLandingPage() {
  const locale = useLocale();

  const router = useRouter();
  const [displayText, setDisplayText] = useState("");
  const titleText = "Simplify Your Task Management";
  const delay = 500; // Délai en millisecondes entre chaque lettre

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => {
        const newText = titleText.slice(0, currentIndex + 1);
        currentIndex = (currentIndex + 1) % (titleText.length + 1);
        return newText;
      });
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [titleText, delay]);

  return (
    <section
      className="bg-[url('/BG.jpeg')] text-black flex flex-col md:flex-row justify-around items-center mx-auto py-20"
      style={{ minHeight: "100vh" }}>
      <div className="w-5/12 flex flex-col justify-center items-center mb-8 md:mb-0">
        <img
          src="/images/accueil.jpeg"
          alt=""
          srcSet=""
          className="w-4/6"
          style={{
            borderRadius: "5px",
            transition: "transform 0.3s",
            transformStyle: "preserve-3d",
            perspective: "1000px",
            transform: "rotateX(20deg) rotateY(-30deg)",
          }}
        />
      </div>
      <div className="w-full md:w-7/12 px-4 md:px-8 lg:px-20 xl:px-40 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl text-[#314155] md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          <span>{displayText}</span>
        </h1>
        <p className="text-gray-600 leading-6 mb-8">
          Our task management app helps you stay organized and productive. With
          a simple and intuitive interface, you can easily manage your tasks,
          set due dates, and track progress.
        </p>
        <button
          onClick={() => {
            router.push(`${locale}/Up`);
          }}
          className="bg-gray-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-gray-800 hover:border-transparent rounded transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default SectionOneLandingPage;
