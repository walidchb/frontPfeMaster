import React from "react";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("Index");
  return (
    <div className="text-white">
      <p>{t("title")}</p>
      <p>walid </p>
    </div>
  );
}

export default About;
