import React from "react";
import { useTranslations } from "next-intl";
import NavBar from "@/components/NavBar";

function About() {
  const t = useTranslations("Index");
  return (
    <div className="text-white">
      <NavBar />
      <p>{t("title")}</p>
      <p>walid </p>
    </div>
  );
}

export default About;
