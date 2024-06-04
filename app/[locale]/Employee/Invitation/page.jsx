"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import React from "react";

const Invitation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarAuth />
      <div className="flex-grow flex items-center justify-center bg-[url('/BG.jpeg')]">
        <div className="bg-white p-6 rounded shadow max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Invitation à rejoindre l'organisation</h2>
          <p className="text-gray-600 mb-2">Cher(e) [Nom de l'individu],</p>
          <p className="text-gray-700 mb-6">
            Vous avez été invité(e) par [Nom du chef d'organisation] à rejoindre l'organisation "[Nom de l'organisation]" dans notre application de gestion des tâches. En acceptant cette invitation, vous pourrez collaborer avec les membres de l'organisation et vous verrez attribuer un rôle spécifique. Pour accepter l'invitation, veuillez cliquer sur le lien ci-dessous.
          </p>
          <a
            href="#"
            className="inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded hover:bg-orange-600 mb-6"
          >
            Accepter l'invitation →
          </a>
          <p className="text-gray-700 mb-4">
            Notre application de gestion des tâches permet aux organisations de gérer efficacement leurs projets, d'attribuer des tâches aux membres et de suivre l'avancement des travaux.
          </p>
          <p className="text-gray-700">
            Pour en savoir plus sur notre application, veuillez visiter notre site web :{" "}
            <a
              href="https://www.votre-app.com"
              className="text-green-600 underline"
            >
              www.votre-app.com
            </a>
          </p>
        </div>
      </div>
      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Copyright © 2024. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProtectedRoute(Invitation);