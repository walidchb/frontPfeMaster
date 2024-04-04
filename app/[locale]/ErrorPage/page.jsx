import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React, { Fragment } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

function ErrorPage() {
  const locale = useLocale();

  return (
    <Fragment>
      {/* <NavBar /> */}
      <div className="flex items-center justify-center h-screen bg-red-600">
        <div className="text-center">
          <FaExclamationTriangle className="text-yellow-500 w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-black mb-4">Erreur 404</h2>
          <p className="text-lg text-white mb-4">
            La page que vous recherchez est introuvable.
          </p>
          <p className="text-white mb-4">
            Veuillez vérifier l'URL ou retourner à la{" "}
            <a
              href={`/${locale}`}
              className="underline hover:no-underline text-blue-600">
              page d'accueil
            </a>
            .
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
}

export default ErrorPage;
